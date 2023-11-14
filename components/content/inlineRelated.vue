<template>
    <div class="w-full my-3 shadow-md rounded-md overflow-hidden">
        <span class="block w-full bg-red-400 text-white font-semibold p-2">Baca juga:</span>
        <div class="p-2 gap-2 flex items-center">
            <NuxtImg v-if="coverImage" :src="coverImage.url" :alt="coverImage.altText" provider="photon" width="150" height="150"/>
            <NuxtLink :to="link" class="underline text-base md:text-xl hover:opacity-80">
                {{ title }}
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['link', 'title','coverImage'])
</script>