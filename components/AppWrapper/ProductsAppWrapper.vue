<template>
    <component :is="is || 'div'" :class="$style.el">
      <slot />
    </component>
  </template>
  
  <script lang="ts" setup>
  type AppWrapperProps = {
    is?: 'section' | 'article';
  };
  
  defineProps<AppWrapperProps>();
  </script>
  
  <style lang="scss" module>
  .el {
    flex: 1 1 auto;
    margin: 0 auto;
    position: relative;
    max-width: 88%;
  }
  </style>
  