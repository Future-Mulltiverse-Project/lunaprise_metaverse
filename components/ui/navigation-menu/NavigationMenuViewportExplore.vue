<script setup lang="ts">import { type HTMLAttributes, computed } from 'vue'
import {
  NavigationMenuViewport,
  type NavigationMenuViewportProps,
  useForwardProps,
} from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<NavigationMenuViewportProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <!--div class="absolute left-0 top-full w-full flex justify-center"-->
  <div class="absolute left-0 top-full w-full flex overflow-x-hidden" style="left: -20%; min-width: 1537px;">
    <NavigationMenuViewport
      v-bind="forwardedProps"
      style="height: 292px;"
      :class="
        cn(
          'origin-top-center w-full bg-white mt-1.5 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 ',
          props.class,
        )
      "
    />
  </div>
</template>
