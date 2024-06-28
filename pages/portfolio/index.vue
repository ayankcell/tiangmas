<template>
    <NuxtLayout>
        <header class="py-8">
            <h1 class="uppercase text-center text-xl lg:text-2xl text-gray-700">Yang Kami Kerjakan di Tiangmas Advertising & Contractors
            </h1>
        </header>
        <main class="py-8">
            <UContainer class="min-h-screen">
                <div class="flex flex-wrap">
                    <ContentList path="/portfolio" v-slot="{ list }">
                        <div class="w-full md:w-1/2 lg:w-1/3 p-3" v-for="content in list" :key="content._path">
                            <NuxtLink :to="content._path+'/'"
                                class="group shadow-md h-80 rounded-md overflow-hidden flex flex-col ">
                                <!-- image -->
                                <div class="flex-grow overflow-hidden">
                                    <NuxtImg :src="content.images[0].url"  width="346" height="272" quality="80" fit="cover" class="w-full object-cover h-full" loading="lazy"
                                        :placeholder="[346,272,10,50]" :alt="content.images[0].altText"/>
                                    <div
                                        class="flex flex-col justify-center items-center transition-all duration-200 p-3 bg-black bg-opacity-60 text-white 
                                        group-hover:-translate-y-full group-hover:h-full">
                                        <div class="line-clamp-3">{{ content.description }}</div>
                                        <UButton icon="i-heroicons-magnifying-glass-plus" color="white"/> 
                                    </div>
                                </div>
                                <!-- title -->
                                <div class="p-2 h-1/6 flex justify-between items-center text-gray-700">
                                    <span class="line-clamp-1 w-11/12">{{ content.title }}</span><UIcon name="i-heroicons-chevron-right"/>
                                </div>
                            </NuxtLink>
                        </div>
                    </ContentList>
                </div>
            </UContainer>
        </main>
    </NuxtLayout>
</template>
<script setup>
useSeoMeta({
    title: 'Galeri Portofolio :: Yang Kami Kerjakan di Tiangmas Advertising & Contractors',
    description: 'Lihat daftar produk dan jasa yang kami kerjakan untuk client kami.  Anda pun dapat memilikinya untuk promosi bisnis dan event anda!'
})
useServerSeoMeta({
    title: 'Galeri Portofolio :: Yang Kami Kerjakan di Tiangmas Advertising & Contractors',
    description: 'Lihat daftar produk dan jasa yang kami kerjakan untuk client kami.  Anda pun dapat memilikinya untuk promosi bisnis dan event anda!',
    ogImage: '/img/pageassets/huruf-timbul-champoil-lg.jpeg'
})
</script>