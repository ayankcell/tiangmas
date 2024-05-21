<template>
    <NuxtLayout>

        <UContainer>
            <!-- primary section left-->
            <div id="primary" class="lg:flex">
                <main class="w-full lg:w-3/4 px-3 lg:px-8 py-3 shadow-md">
                    <article>
                        <Breadcrumbs :path="route.path" :title="pageData.title" />
                        <header class="w-full my-5">
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                                {{ pageData.title }}</h1>
                            <nuxt-img  v-if="pageData.coverImage" :src="pageData.coverImage.url"
                                class="w-full lg:h-[519px] object-cover rounded-md" width="768" height="519" quality="80"
                                :placeholder="placeHolder(pageData.coverImage.url)" :alt="pageData.coverImage.altText" />
                        </header>
                        <Cta/>
                        <ContentDoc :path="`/layanan/${slug}`" />
                        <Cta :maps="true" />
                    </article>
                </main>
                <!--secondary right-->
                <section class="lg:p-2 xs:w-full lg:flex-grow">
                    <div class="shadow-md p-2 my-5">

                    </div>
                </section>
            </div>
        </UContainer>

    </NuxtLayout>
</template>
<script setup>
const slug = useRoute().params.slug
const route = useRoute()
const { placeHolder } = useTiangMas()
// // fetch content
const pageData = await queryContent(`layanan/${slug}`).findOne();

/** SEO */
useServerSeoMeta({
    ogImage: pageData.coverImage.url
})

useSchemaOrg([
    defineProduct({
        name: pageData.title,
        offers:[{price: 0, priceCurrency:'IDR'}],
        image: pageData.coverImage? pageData.coverImage.url : 'https://i2.wp.com/tiangmas.com/img/pageassets/ruangguru-billboard-1.jpg'      
    }),
    defineBreadcrumb({
        itemListElement: [
            { name: 'Home', item: '/' },
            { name: 'Layanan', item: '/layanan'},
            { name: pageData.title }
        ]
    }),
])
</script>