<template>
    <div class="p-4">
        <h3>Artikel Tebaru</h3>
        <div class="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
            <NuxtLink :to="post._path + '/'" v-for="post of data" :key="post._path"
                class="lg:flex lg:items-center lg:gap-2" :title="post.title">
                <NuxtImg :src="post.coverImage.url" class="w-full lg:w-1/3 lg:h-fit rounded-md" width="200" height="200"
                    fit="cover" :placeholder="[200, 200, 10, 50]" :alt="post.title" />
                <div class="text-sm mt-5 lg:mt-0 hover:underline lg:line-clamp-3">{{ post.title }}</div>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const currentPath = '/artikel/'+useRoute().params.slug
console.log(currentPath)
const { data } = await useAsyncData('recentPosts', () => queryContent('artikel').sort({ date: -1 }).where({ _path: { $not: currentPath } }).limit(8).find())
</script>