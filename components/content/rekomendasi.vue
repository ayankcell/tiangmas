<template>
    <div class="flex flex-col mb-6 items-start">

        <UDivider :label="label ?? 'Rekomendasi'" />

        <NuxtLink :to="isRelative ? `${slug}/` : link"
            class="w-full flex justify-normal text-gray-500 bg-white hover:no-underline hover:text-gray-600 rounded shadow-md hover:shadow-lg">
            <NuxtImg
                :src="isRelative ? related.coverImage.url : 'https://www.sadiskon.com/img/pwa/sadiskon-icon-pwa-512.png'"
                width="100" height="100" :alt="isRelative ? related.coverImage.altText ?? '' : ''" />
            <div class="px-2">
                <span v-if="isRelative">{{ related.title }}</span>
                <span v-else>
                    <slot />
                </span>
            </div>
        </NuxtLink>

    </div>
</template>
<script setup>
const props = defineProps(['label', 'link'])
const isRelative = !props.link.includes('http')
const related = ref(null)
const slug = ref(null)


// if relative
if (isRelative) {
    //remove trailing and prepending slashes
    slug.value = props.link //.replace(/\//g, '')

    const { data } = await useAsyncData(`inline-${slug.value}`, () => {
        return queryContent(slug.value).only(['coverImage', 'title']).findOne();
    });

    related.value = data.value
}
</script>