<template>
    <figure class="my-1 w-full">
        <nuxt-img :src="src" :alt="alt" loading="lazy" :placeholder="[width, height, 10, 50]" :width="width"
            :height="height" class="mx-auto rounded-lg" />
        <div class="text-sm italic">
            <slot />
        </div>
    </figure>
</template>
<script setup>
const props = defineProps(['src', 'alt', 'width', 'height', 'provider'])
</script>