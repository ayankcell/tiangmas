<template>
    <NuxtLayout>
        <ContentDoc v-slot="{ doc }">
            <ContentRenderer :value="doc" class="text-gray-600"/>
        </ContentDoc>
    </NuxtLayout>
</template>
<script setup>
const slug = useRoute().params.slug
// // fetch content
// const data=  await queryContent(`layanan/${slug}`).findOne();
// console.log(data)
</script>