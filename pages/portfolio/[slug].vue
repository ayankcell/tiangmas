<template>
    <NuxtLayout>
        <UContainer>
            <header>
                <Breadcrumbs :path="route.path" :title="data.title" />
                <h1 class="text-xl">{{ data.title }}</h1>
            </header>
            <main class="w-full py-2 my-12">
                <div class="md:flex md:flex-wrap p-3 shadow-md rounded-md">
                    <div class="w-full md:w-9/12">
                        <NuxtImg :src="data.images[0].url" :alt="data.images[0].altText" class="w-full rounded-xl"
                            width="894" height="503" :placeholder="[894, 503, 10, 50]" fit="cover"/>
                    </div>
                    <div class="p-2 md:w-3/12">
                        <span class="bg-amber-600 inline-block w-6 h-6"></span>
                        <p>
                            {{ data.description }}
                        </p>
                    </div>
                    <div class="w-full p-3 flex flex-wrap gap-3 justify-center items-center">
                        <NuxtImg :src="image.url" v-for="image of data.images" :key="image.url" :alt="image.altText"
                            height="300" width="300" :placeholder="[300, 300, 10, 50]" />
                    </div>
                </div>
                <!-- Call to Action Buttons-->
                <Cta class="my-8" />
                <!-- Other Portfolios-->
                <div class="flex flex-wrap p-3 shadow-md my-6">
                    <div class="w-full">
                        <h2 class="text-lg">Hasil Karya Kami Lainnya:</h2>
                    </div>
                    <div class="w-full md:w-1/3 p-2" v-for=" related of relatedPortfolio" :key="related._path">
                        <UCard
                            :ui="{ background: 'bg-white dark:bg-white', ring: 'dark:ring-gray-200', divide: 'dark:divide-gray-200' }">
                            <NuxtLink :to="related._path">
                                <NuxtImg :src="related.images[0].url" :alt="related.images[0].altText" width="300"
                                    height="300" :placeholder="[300, 300, 10, 50]" fit="cover"
                                    class="w-full md:mx-auto md:h-[300px] md:w-[300px] rounded-md" />
                            </NuxtLink>

                            <template #footer>
                                <h2 class="font-normal">
                                    <NuxtLink :to="related._path">{{ related.title }}</NuxtLink>
                                </h2>
                            </template>
                        </UCard>


                    </div>
                </div>
            </main>
        </UContainer>
    </NuxtLayout>
</template>
<script setup>
const route = useRoute()
const slug = route.params.slug
const { data } = await useAsyncData(() => {
    return queryContent(`portfolio/${slug}`).findOne();
})
/** return 404 if no route */
if (data.value === null) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
/** related portfolio */
const relatedPortfolio = await queryContent('portfolio').where({ _path: { $ne: data.value._path } }).find();

/** SEO */
useSeoMeta({
    title: data.value.title
})
useServerSeoMeta({
    title: data.value.title,
    description: data.value.description,
    ogImage: data.value.images[0].url
})
</script>