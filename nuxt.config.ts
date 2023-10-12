// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  site: {
    url: 'https://tiangmas.com',
    name: 'Tiangmas',
    trailingSlash:true
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      }
    }
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/content',
    'nuxt-simple-sitemap',
    '@nuxtjs/google-fonts'
  ],
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
  sitemap:{
    sitemaps:true,
    defaultSitemapsChunkSize:150,
  },
  ui:{
    icons:['heroicons','simple-icons']
  },
  colorMode: {
    preference: 'system'
  },
  image: {
    providers: {
      customProvider: {
        name: 'photon',
        provider: '~/providers/photon'
      }
    }
  },
  // gtm: {
  //   id: 'GTM-NTG6WQ2',
  //   defer: true,
  //   compatibility: true,
  //   enabled: true,
  //   enableRouterSync: true,
  //   trackOnNextTick: true
  // },
  optimization:{
    //@ts-ignore
    splitChunks: {
      maxSize: 300000
    }
  }
})
