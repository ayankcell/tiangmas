<template>
    <SdVideo :url="url" :width="width" :height="height"/>
</template>
<script setup>
const props = defineProps(['url', 'width', 'height'])
useSchemaOrg([
    defineVideo({
        url: props.url,
        inLanguage: 'id-ID',
        width: props.width,
        height: props.height
    })
])
</script>