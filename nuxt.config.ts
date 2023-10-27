// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  site: {
    url: 'https://tiangmas.com',
    name: 'Tiangmas Advertising Lampung',
    trailingSlash:true
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      script: [
        { type: 'application/ld+json', innerHTML: `{"@context": "https://schema.org","@type": "Organization","url": "https://tiangmas.com","logo": "https://www.sadiskon.com/tiangmas-icon.png"}` }
      ],
      link: [
        { rel: 'preconnect', href: 'https://i0.wp.com' },
        { rel: 'preconnect', href: 'https://i1.wp.com' },
        { rel: 'preconnect', href: 'https://i2.wp.com' },
      ],
    }
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/content',
    'nuxt-simple-sitemap',
    'nuxt-schema-org',
    '@nuxtjs/google-fonts'
  ],
  image:{
    format:['webp'],
    providers:{
      photon:{
        options:{
          baseDomain:'tiangmas.com',
        },
        name: 'photon',
        provider : '~/providers/photon'
      }
    }
  },
  googleFonts: {
    families: {
      Gabarito: {
        wght: [400,700]
      },
      'Open+Sans':{wght:[400]},
      overwriting:false,
      base64: true
    }
  },
  // routeRules:{
  //   '/**': {prerender:true}
  // },
  sitemap:{
    sitemaps:true,
    defaultSitemapsChunkSize:150,
    exclude:[
      '/x/**'
    ]
  },
  ui:{
    icons:['heroicons','bxl']
  },
  colorMode: {
    preference: 'dark'
  },

  // gtm: {
  //   id: 'GTM-NTG6WQ2',
  //   defer: true,
  //   compatibility: true,
  //   enabled: true,
  //   enableRouterSync: true,
  //   trackOnNextTick: true
  // }
})
