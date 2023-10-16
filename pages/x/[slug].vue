<template>
    <div class="max-w-screen-lg mx-auto py-15 h-screen flex justify-center items-center gap-2 text-gray-800 dark:text-gray-200">
        <UIcon name="i-heroicons-arrow-path" class="animate-spin"></UIcon> Membuka WhatsApp
    </div>
</template>
<script setup>
const slug = useRoute().params.slug
const data = await queryContent(`/x/${slug}`).findOne()

setTimeout(() => {
    navigateTo(data.redirto,{external:true, open:{target:'_blank'}})
    useRouter().back()
}, 500)
</script>