<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
    <UNotifications />
    <FloatCta v-if="!route.fullPath.includes('/x/')" />
  </div>
</template>
<script setup>
const { isOpen } = useMenuNav()
const route = useRoute()

watchEffect(() => {
  if (route.fullPath) {
    isOpen.value = false
  }
})

useSchemaOrg([
  defineOrganization({
    name: 'Tiang Mas Advertising Lampung',
    logo: '/tiangmas-icon.png',
  })
])
useHead({
  link: [
    { rel: 'canonical', href: `https://tiangmas.com${route.path}` }
  ]
})
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>