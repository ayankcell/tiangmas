<template>
    <NuxtLayout>
        
    </NuxtLayout>
</template>
<script setup>
const slug = useRoute().params.slug
const pageData = await queryContent(`portfolio/${slug}`).findOne();
// console.log(pageData)
</script>