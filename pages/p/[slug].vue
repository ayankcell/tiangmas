<template>
    <NuxtLayout>

        <UContainer>
            <!-- primary section left-->
            <div id="primary" class="lg:flex">
                <main class="w-full lg:w-3/4 px-3 lg:px-8 py-3 shadow-md">
                    <article>
                        <header class="w-full my-5">
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                                {{ pageData.title }}</h1>
                            <nuxt-img preload :src="pageData.coverImage.url" v-if="pageData.coverImage"
                                class="h-80 w-full overflow-hidden shadow-md rounded object-cover" width="840"
                                height="331" quality="90" fit="cover" :placeholder="[840, 331, 10, 50]"
                                :alt="pageData.coverImage.altText" :title="pageData.coverImage.altText" />
                        </header>
                        <!-- table of contents-->
                        <Toc :links="pageData.body.toc.links" v-if="pageData.toc || pageData.toc == undefined" />
                        <ContentRenderer :value="pageData"/>
                        <Cta :maps="true" />
                    </article>
                </main>
                <!--secondary right-->
                <Sidebar />
            </div>
        </UContainer>

    </NuxtLayout>
</template>
<script setup>
const slug = useRoute().params.slug
// // fetch content
const pageData = await queryContent(`page/${slug}`).findOne();
/** SEO Things */
const seoData = {
    title: pageData.title + ' | Tiangmas Advertising',
    description: pageData.description,
    image: pageData.coverImage.url
}
useSeoMeta({
    title: seoData.title
})
useServerSeoMeta({
    title: seoData.title,
    description: seoData.description,
    ogImage: seoData.image
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