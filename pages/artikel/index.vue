<template>
    <NuxtLayout>
        <header class="py-2  max-w-screen-lg mx-auto text-center">
            <h1 class="uppercase text-xl lg:text-2xl text-gray-700">{{ seo.title }}
            </h1>
            <p>{{ seo.description }}</p>
        </header>
        <main class="py-3 max-w-screen-lg mx-auto">
            <UContainer class="min-h-screen flex flex-col gap-5">
                <ContentList path="/artikel" v-slot="{ list }">
                    <div class="w-full p-2 shadow" :class="i>0?'flex':''" v-for="(content, i) in list" :key="content._path">
                        <NuxtLink :to="content._path" :class="i>0?'w-1/3':''">
                            <NuxtImg :src="content.coverImage.url" :alt="content.coverImage.altText" provider="photon"
                                :class="i>0?'h-32 md:h-full':'w-full h-52 md:h-96'" class="object-cover rounded" :width="i>0?'300':''" :height="i>0?'300':''"/>
                        </NuxtLink>
                        <div :class="i>0? 'w-2/3 pl-4':'p-5'">
                            <NuxtLink :to="content._path">
                                <h2 class="text-lg md:text-2xl py-1">{{ content.title }}</h2>
                            </NuxtLink>
                            <div class="line-clamp-2 text-base">
                                <ContentRendererMarkdown :excerpt="true" :value="content" v-if="content.excerpt" />
                                <div v-else>
                                    {{ content.body.children[0].children[0].value }}
                                </div>
                            </div>
                            <div class="flex justify-end py-4">
                                <UButton :to="content._path" icon="i-heroicons-chevron-right" :trailing="true" color="gray">Baca Selengkapnya</UButton>
                            </div>
                        </div>
                    </div>
                </ContentList>
            </UContainer>
        </main>
    </NuxtLayout>
</template>
<script setup>
const { placeHolder, slugToName } = useTiangMas()
const seo = {
    title: 'Berita dan Artikel Bermanfaat',
    description: 'Temukan artikel bermanfaat dan berita terbaru dari Tiangmas Advertising Lampung.'
}
useSeoMeta({
    title: seo.title,
    description: seo.description
})
useServerSeoMeta({
    title: seo.title,
    description: seo.description,
    ogImage: '/img/pageassets/huruf-timbul-champoil-lg.jpeg'
})
</script>