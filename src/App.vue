<template>
  <RouterView />

  <Icons />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Icons from '@/components/Layout/Icons.vue'

import '@/assets/sass/helper.sass'
import '@/assets/sass/global.sass'
</script>

<style scoped>
html,
body {
  width: 100vw;
  background: #0e1014;
}
</style>
