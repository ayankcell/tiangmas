<template>
    <div>
    </div>
</template>
<script setup>
const slug = useRoute().params.slug
const { placeHolder } = useTiangMas()
const data = await queryContent(`/x/${slug}`).findOne()

navigateTo(data.redirto, { external: true })

</script>