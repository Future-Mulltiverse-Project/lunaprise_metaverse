import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useYoutubeAutoPlayOnView(iframeId: string, containerRef: any, options?: { threshold?: number }) {
  const isInView = ref(false);
  let observer: IntersectionObserver | null = null;

  function postToPlayer(command: string) {
    const iframe = document.getElementById(iframeId) as HTMLIFrameElement | null;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: command,
          args: [],
        }),
        '*'
      );
    }
  }

  onMounted(() => {
    if (containerRef.value) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isInView.value = entry.isIntersecting;
            if (isInView.value) {
              postToPlayer('playVideo');
            } else {
              postToPlayer('pauseVideo');
            }
          });
        },
        { threshold: options?.threshold ?? 0.5 }
      );
      observer.observe(containerRef.value);
    }
  });

  onBeforeUnmount(() => {
    if (observer && containerRef.value) {
      observer.unobserve(containerRef.value);
      observer.disconnect();
    }
  });

  return { isInView };
}