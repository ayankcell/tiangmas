// https://nuxt.com/docs/api/configuration/nuxt-config
//@ts-ignore
export default defineNuxtConfig({
  // devtools: { enabled: true },
  site: {
    url: 'https://tiangmas.com',
    name: 'Tiangmas Advertising Lampung',
    trailingSlash: false,
    inLanguage: 'id-ID'
  },
  app: {
    rootId: 'app',
    buildAssetsDir: '/_assets/',
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      script: [
        { type: 'application/ld+json', innerHTML: `{"@context": "https://schema.org","@type": "Organization","url": "https://tiangmas.com","logo": "https://www.sadiskon.com/tiangmas-icon.png"}` }
      ],
    }
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/content',
    'nuxt-schema-org',
    '@nuxtjs/google-fonts',
    'nuxt-gtag',
    'nuxt-delay-hydration',
    "@nuxtjs/sitemap"
  ],
  sitemap:{
    sources:[
      '/api/__sitemap__/urls'
    ],
    exclude: ['/x/*']
  },
  gtag: {
    id: 'G-8KQRP5YHZN'
  },
  delayHydration: {
    mode: 'mount',
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === 'development'
  },
  image: {
    provider: 'ipx',
    format: ['webp', 'avif', 'jpeg', 'png', 'jpg'],
    quality: 80,
  },
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },
  googleFonts: {
    families: {
      Gabarito: {
        wght: [400, 700]
      },
      'Open+Sans': { wght: [400] },
      overwriting: false,
      base64: true
    }
  },
  content: {
    markdown: {
      rehypePlugins: {
        'rehype-external-links': false,
      }
    }
  },
  routeRules: {
    '/**': { prerender: true },
    '/service/*': { redirect: '/layanan' },
    '/home/*': { redirect: '/' },
    '/produk/*': { redirect: '/layanan' },
    '/kontak/*': { redirect: '/p/kontak' },
    '/page/kontak/*': { redirect: '/p/kontak' },
    '/tentang-kami/**': { redirect: '/p/profil' },
    '/category/**': { redirect: '/' },
    '/portfolio/kitchen-set-lampung-2/**': { redirect: '/portfolio/kitchen-set-lampung' },
    '/portfolio/kitchen-set-lampung-3/**': { redirect: '/portfolio/kitchen-set-lampung' },
    '/artikel/daftar-kecamatan-di-kota-bandar-lampung/*': { redirect: '/artikel/jumlah-kecamatan-di-bandar-lampung' },
    '/semua-berita.html': { redirect: '/artikel' },
    '/hal-visi-dan-misi-perusahaan.html': { redirect: '/p/profil' },
    '/kitchen-set-lampung/*': { redirect: '/artikel/model-kitchen-set-minimalis' },
    '/hal-sejarah-perusahaan.html': { redirect: '/p/profil' },
    '/contact.html': { redirect: '/p/kontak' },
    '/layanan/kampanye/*': { redirect: '/layanan/billboard' },
    '/layanan/baliho/*': { redirect: '/layanan/billboard' },
    '/champoil-putra-bodas-lampung': { redirect: '/portfolio/champoil-putra-bodas-lampung' },
    '/download.html': { redirect: '/' },
    '/category/plots/*': { redirect: '/' },
    '/page/profil/*': { redirect: '/p/profil' }
  },
  ui: {
    icons: ['heroicons', 'bxl']
  },
  colorMode: {
    preference: 'dark'
  },
})