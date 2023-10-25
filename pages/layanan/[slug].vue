<template>
    <NuxtLayout>
        <main class="pt-5 pb-16 lg:pt-16 lg:pb-24 bg-white after:antialiased">
            <div class="max-w-screen-xl mx-auto flex justify-center items-center -mt-8 lg:-mt-16">
                <nuxt-img provider="photon" v-if="pageData.image" :src="pageData.image" class="w-full lg:w-[768px] lg:h-[519px] object-cover" width="768"
                    height="519"  quality="80" :placeholder="placeHolder(pageData.image)" />
            </div>
            <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article
                    class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
                    <header class="mb-4 lg:mb-6 not-format">
                        <Breadcrumbs :path="route.path" :title="pageData.pageTitle" />
                        <h1
                            class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                            {{ pageData.pageTitle }}</h1>
                    </header>
                    <ContentDoc :path="`/layanan/${slug}`" />
                    <Cta />
                </article>
            </div>
        </main>
    </NuxtLayout>
</template>
<script setup> 
const slug = useRoute().params.slug
const route = useRoute()
const { placeHolder } = useTiangMas()
// // fetch content
const pageData = await queryContent(`layanan/${slug}`).findOne();
</script>