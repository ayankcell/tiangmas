<template>
    <NuxtLayout>
       
            <ContentRenderer :value="data" class="text-gray-600">
                <template #not-found>

                </template>
            </ContentRenderer>
        
    </NuxtLayout>
</template>
<script setup>
const slug = useRoute().params.slug
// // fetch content
const data=  await queryContent(`layanan/${slug}`).findOne();
// console.log(data)
</script>