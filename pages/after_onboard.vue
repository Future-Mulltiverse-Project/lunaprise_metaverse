<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { setSession } from "@/utils/encryption";

const router = useRouter();
const route = useRoute();

onMounted(async () => {
  const request_reference = route.query.request as string | undefined;
  const bearer_token = route.query.session as string | undefined;

  if (!bearer_token) {
    return router.push({
      name: "obtain_access_token",
      query: { token: "Missing session token" },
    });
  }

  // ✅ await so cookie is written before API call / redirect
  await setSession(bearer_token);

  try {
    const response = await fetch(
      "https://api.auth.futuremultiverse.com/api/v1/account/connect/request/session/data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearer_token}`,
        },
        body: JSON.stringify({ request_reference }),
      }
    );

    if (!response.ok) {
      return router.push({
        name: "obtain_access_token",
        query: { token: "Could not generate token. Please try again later" },
      });
    }

    const data = await response.json();

    if (data.status !== "0") {
      // ✅ Save cookies
      const { name, email } = data.data.user;
      const domain = window.location.hostname.split(".").slice(-2).join(".");
      document.cookie = `futuremultiversename=${name}; path=/; domain=${domain}; SameSite=None; Secure`;
      document.cookie = `futuremultiverseemail=${email}; path=/; domain=${domain}; SameSite=None; Secure`;

      // ✅ Read & clear redirect URI
      const redirectUri =
        localStorage.getItem("futuremultiverseRedirectUrl") || "/";
      localStorage.removeItem("futuremultiverseRedirectUrl");

      // ✅ Use Nuxt-native navigate
      return navigateTo(redirectUri);
    }
  } catch (error) {
    console.error("after_onboard error:", error);
    return router.push("/");
  }
});
</script>

<template>
  <!-- Minimal placeholder to avoid missing template warnings -->
  <div class="hidden"></div>
</template>
