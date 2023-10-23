<template>
    <SdVideo :url="url" :width="width" :height="height"/>
</template>
<script setup>
const props = defineProps(['url', 'width', 'height'])
</script>