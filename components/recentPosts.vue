<template>
    <div class="p-4">
        <h3>Artikel Tebaru</h3>
        <div class="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
            <NuxtLink :to="post._path + '/'" v-for="post of data" :key="post._path"
                class="lg:flex lg:items-center lg:gap-2" :title="post.title">
                <NuxtImg :src="post.coverImage.url" class="w-full lg:w-1/3 lg:h-fit rounded-md" width="200" height="200"
                    fit="cover" :placeholder="[200, 200, 10, 50]" :alt="post.title" preload/>
                <div class="text-sm mt-5 lg:mt-0 hover:underline lg:line-clamp-3">{{ post.title }}</div>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const currentPath = '/artikel/' + useRoute().params.slug

// reactive: daftar recent posts exclude halaman aktif
const data = ref(
    await queryContent('artikel').sort({ date: -1 }).where({ _path: { $not: currentPath } }).limit(8).find()
)

// rubah recent post list jika dinavigasi
watchEffect(async () => {
    if (useRoute().fullPath) {
        data.value = await queryContent('artikel').sort({ date: -1 }).where({ _path: { $not: currentPath } }).limit(8).find()
    }
})
</script>