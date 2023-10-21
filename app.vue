<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
    <UNotifications />
    <FloatCta v-if="!route.fullPath.includes('/x/')"/>
  </div>
</template>
<script setup>
const { isOpen } = useMenuNav()
const route = useRoute()

watchEffect(()=>{
  if(route.fullPath){
    isOpen.value = false
  }
})

</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>