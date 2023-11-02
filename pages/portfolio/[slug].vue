<template>
    <NuxtLayout>
        <UContainer>
            <header>
                <Breadcrumbs :path="route.path" :title="data.title" />
                <h1 class="text-xl">{{ data.title }}</h1>
            </header>
            <main class="w-full py-2 my-12">
                <div class="md:flex p-3 shadow-md rounded-md">
                    <div class="w-full md:w-9/12">
                        <NuxtImg :src="data.image.url" :alt="data.image.altText" provider="photon" class="w-full rounded-xl"
                            width="1200" :placeholder="placeHolder(data.image.url)" />
                    </div>
                    <div class="p-2 md:w-3/12">
                        <span class="bg-amber-600 inline-block w-6 h-6"></span>
                        <p>
                            {{ data.description }}
                        </p>
                    </div>
                </div>

                <Cta class="my-8" />

                <div class="flex flex-wrap p-3 shadow-md my-6">
                    <div class="w-full">
                        <h2 class="text-lg">Hasil Karya Kami Lainnya:</h2>
                    </div>
                    <div class="w-full md:w-1/3 p-2" v-for=" related of relatedPortfolio" :key="related._path">
                        <UCard :ui="{background:'bg-white dark:bg-white', ring: 'dark:ring-gray-200', divide: 'dark:divide-gray-200'}">
                            <NuxtLink :to="related._path">
                                <NuxtImg :src="related.image.url" :alt="related.image.altText" width="300" height="300"
                                    :placeholder="placeHolder(related.image.url)" provider="photon"
                                    class="w-full md:mx-auto md:h-[300px] md:w-[300px] rounded-md"
                                    :modifiers="{ lb: '300,300,cccccc' }" />
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
const { placeHolder } = useTiangMas()
const { data } = await useAsyncData(() => {
    return queryContent(`portfolio/${slug}`).findOne();
})
/** related portfolio */
const relatedPortfolio = await queryContent('portfolio').where({ _path: { $ne: slug } }).find();

/** SEO */
useSeoMeta({
    title: data.value.title
})
useServerSeoMeta({
    title: data.value.title,
    description: data.value.description,
    ogImage: data.value.image.url 
})
</script>