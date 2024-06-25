<template>
    <NuxtLayout>

        <UContainer>
            <!-- primary section left-->
            <div id="primary" class="lg:flex">
                <main class="w-full lg:w-3/4 px-3 lg:px-8 py-3 shadow-md">
                    <article>
                        <Breadcrumbs :path="pageData._path" :title="pageData.title" />
                        <header class="w-full my-5 text-sm">
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                                {{ pageData.title }}</h1>
                            <nuxt-img preload :src="pageData.coverImage.url" v-if="pageData.coverImage"
                                class="h-80 md:h-96 w-full overflow-hidden shadow-md rounded object-cover" width="840"
                                height="331" quality="80" :placeholder="[840, 331, 10, 50]"
                                :alt="pageData.coverImage.altText" />
                            <div class="flex justify-between py-5">
                                <div class="font-semibold inline-flex gap-1 justify-center items-center">
                                    <div class="h-10 w-10 bg-gray-200 flex rounded-full justify-center items-center">
                                        <UIcon name="i-heroicons-user-circle" class="h-8 w-8" />
                                    </div>
                                    <div>Ditulis oleh: <span class="text-red-700">{{ slugToName(pageData.author)
                                            }}</span>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    pada: {{ tanggal(pageData.date) }}
                                </div>
                            </div>
                            <hr>
                        </header>
                        <!-- table of contents-->
                        <Toc :links="pageData.body.toc.links" v-if="pageData.toc || pageData.toc == undefined" />
                        <!-- <ContentDoc :path="`/artikel/${slug}`" /> -->
                        <ContentRenderer :value="pageData">
                            <ContentRendererMarkdown :value="pageData" />
                        </ContentRenderer>
                        <Cta />
                    </article>
                </main>
                <!--secondary right-->
                <Sidebar />
            </div>
        </UContainer>

    </NuxtLayout>
</template>
<script setup>
const { slugToName, tanggal } = useTiangMas()
const slug = useRoute().params.slug
// // fetch content
const pageData = await queryContent(`artikel/${slug}`).findOne();

/** auto inline related */
const related = await queryContent('/artikel').where({ _path: { $ne: pageData._path } }).only(['_path', 'title', 'coverImage']).sort({ date: -1 }).findOne()
const insertElem = {
    type: 'element', tag: 'inlineRelated', props: { link: related._path, title: related.title, coverImage: related.coverImage }
}
const halfOfContent = pageData.body.children.length / 2

const indexToInsert = halfOfContent

pageData.body.children.splice(indexToInsert, 0, insertElem)

/** SEO Things */
const ogimg = useImage()
const seoData = {
    title: pageData.head.title + ' | Tiangmas Advertising Lampung',
    description: pageData.head.description,
    image: pageData.coverImage.url
}
useSeoMeta({
    title: seoData.title,
    description: seoData.description,
})
useServerSeoMeta({
    title: seoData.title,
    description: seoData.description,
    ogImage: ogimg(seoData.image, { width: 1200, height: 630, fit: 'cover' })
})
/** structured data */
useSchemaOrg([
    defineBreadcrumb({
        itemListElement: [
            { name: 'Home', item: '/' },
            { name: seoData.title }
        ]
    }),
    /** article */
    defineArticle({
        headline: seoData.title,
        description: seoData.description,
        image: seoData.image,
        datePublished: pageData.date,
        inLanguage: 'id-ID',
        author: {
            name: 'Admin Tiangmas',
            url: 'https://tiangmas.com'
        }
    })

])

</script>