<template>
    <div class="max-w-screen-lg mx-auto py-15 h-screen flex justify-center items-center gap-2">
        <UIcon name="i-heroicons-arrow-path" class="animate-spin"></UIcon> Mengarahkan ke {{ data.redirto }}
    </div>
</template>
<script setup>
const slug = useRoute().params.slug
const data = await queryContent(`/x/${slug}`).findOne()

</script>