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
  }),
  defineLocalBusiness({
    name: 'Tiang Mas Advertising',
    logo: '/tiangmas-icon.png',
    image: '/img/pageassets/tiangmas-billboard--flyover.jpg',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      streetAddress: 'Jl. Sentot Alibasya Way Dadi, Sukarame',
      addressLocality: 'Bandar Lampung',
      postalCode: '35131',
    },
    priceRange: '$$',
    telephone: "+62811669003",
    geo:{
      '@type': 'GeoCoordinates',
      latitude: -5.3799167,
      longitude: 105.2990278
    }
  })
])

/** generate canonical */
const canonicalGen = (route) => {
    //@ts-ignore
    return route.path.endsWith("/") ? route.path.slice(0,-1) : route.path;
}
useHead({
  link: [
    { rel: 'canonical', href: `https://tiangmas.com${canonicalGen(route)}` }
  ]
})
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>