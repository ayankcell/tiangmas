<template>
    <div
        class="max-w-screen-lg mx-auto py-15 h-screen flex flex-col justify-center items-center gap-2 text-gray-800 dark:text-gray-200">
        <img :src="placeHolder('',{width:100, height:100})"/>
        <UIcon name="i-heroicons-arrow-path" class="animate-spin"></UIcon> Membuka {{ data.name }}
    </div>
</template>
<script setup>
const slug = useRoute().params.slug
const { placeHolder } = useTiangMas()
const data = await queryContent(`/x/${slug}`).findOne()

onMounted(() => {
    setTimeout(() => {
        navigateTo(data.redirto, { external: true, open: { target: '_blank' } })
        useRouter().back()
    }, 1000)
})
useServerSeoMeta({
    title: `Menghubungkan ke ${data.name} Tiangmas`,
    robots: 'noindex,nofollow'
})
useServerSeoMeta({
    robots: 'noindex'
})
</script>