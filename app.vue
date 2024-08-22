<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage />
    <UNotifications />
    <FloatCta />
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
useSeoMeta({
  ogSiteName: 'Tiangmas Advertising'
})
useSchemaOrg([
  defineOrganization({
    name: 'Tiangmas Advertising',
    logo: '/tiangmas-icon.png',
  }),
  defineLocalBusiness({
    name: 'Tiangmas Advertising',
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -5.3799167,
      longitude: 105.2990278
    }
  }),
  defineWebPage({
    name: 'Tiangmas Advertising',
  }),
  defineWebSite({
    name: 'Tiangmas Advertising',
  })
])

/** generate canonical */
const { canonicalGen } = useTiangMas()
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