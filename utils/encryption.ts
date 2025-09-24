const algorithm = 'AES-CBC';

function getKeyString() {
  const config = useRuntimeConfig();
  return config.public.NUXT_SESSION_PASSWORD.padEnd(32, '0');
}

async function getKey() {
  const keyString = getKeyString();
  const keyBuffer = new TextEncoder().encode(keyString);
  return crypto.subtle.importKey('raw', keyBuffer, algorithm, false, ['encrypt', 'decrypt']);
}

async function encrypt(text: string): Promise<string> {
  const key = await getKey();
  const iv = crypto.getRandomValues(new Uint8Array(16));
  const encodedText = new TextEncoder().encode(text);

  const encrypted = await crypto.subtle.encrypt({ name: algorithm, iv }, key, encodedText);
  const encryptedBytes = new Uint8Array(encrypted);

  const combinedData = new Uint8Array(iv.length + encryptedBytes.length);
  combinedData.set(iv);
  combinedData.set(encryptedBytes, iv.length);

  return btoa(String.fromCharCode(...combinedData));
}

async function decrypt(encryptedText: string): Promise<string> {
  const key = await getKey();
  const encryptedBytes = Uint8Array.from(atob(encryptedText), c => c.charCodeAt(0));

  const iv = encryptedBytes.slice(0, 16);
  const encryptedData = encryptedBytes.slice(16);

  const decrypted = await crypto.subtle.decrypt({ name: algorithm, iv }, key, encryptedData);
  return new TextDecoder().decode(decrypted);
}

export async function setSession(token: string) {
  if (process.server) return;
  const encryptedToken = await encrypt(token);

  const domain = window.location.hostname.split('.').slice(-2).join('.');
  document.cookie = `authToken=${encryptedToken}; path=/; domain=${domain}; SameSite=None; Secure`;
}

export async function getToken() {
  const getCookie = (name: string): string | null => {
    const cookie = document.cookie
      .split('; ')
      .find(cookie => cookie.startsWith(name + '='));

    if (!cookie) return null;
    const value = cookie.split('=')[1];
    return value || null;
  };

  const token = getCookie('authToken');
  return token ? await decrypt(token) : null;
}
