<template>
  <div>
    <NuxtPage />
    <UNotifications />
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