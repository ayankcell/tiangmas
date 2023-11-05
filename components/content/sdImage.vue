<template>
    <figure class="my-1 w-full">
        <nuxt-img :src="src" provider="photon" :alt="alt" loading="lazy" :placeholder="placeHolder('',{height:height??300,width:width??300})"
        :width="width" :height="height" class="mx-auto rounded-lg"
        />
        <div class="text-sm italic">
            <slot/>
        </div>
    </figure>
</template>
<script setup>
const props = defineProps(['src','alt','width','height','provider'])
const {placeHolder} = useTiangMas()
</script>