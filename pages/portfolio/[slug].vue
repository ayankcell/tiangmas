<template>
    <NuxtLayout>
        <p>Halaman dalam pengembangan</p>
        {{ slug }}
    </NuxtLayout>
</template>
<script setup>
const slug = useRoute().params.slug
</script>