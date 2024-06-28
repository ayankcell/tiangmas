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
  ogSiteName: 'Tiang Mas Advertising Lampung'
})
useSchemaOrg([
  defineOrganization({
    name: 'Tiang Mas Advertising Lampung',
    logo: '/tiangmas-icon.png',
  }),
  defineLocalBusiness({
    name: 'Tiang Mas Advertising Lampung',
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
    name: 'Tiangmas Advertising Lampung',
  }),
  defineWebSite({
    name: 'Tiangmas Advertising Lampung',
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