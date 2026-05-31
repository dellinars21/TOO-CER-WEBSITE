<template>
  <NavBar />
  <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { ScrollTrigger } from './composables/useScrollAnimation.js'
import NavBar from './components/NavBar.vue'

const route = useRoute()
watch(() => route.path, () => {
  // Let Vue finish rendering the new page, then refresh ScrollTrigger
  setTimeout(() => ScrollTrigger.refresh(), 100)
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
