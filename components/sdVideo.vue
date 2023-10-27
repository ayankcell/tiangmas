<template>
    <div class="flex justify-center items-center py-8" id="tiangmas-video">
        <NuxtImg :src="placeHolder('',{width:width,height:height})" loading="lazy" provider="photon" alt="Peta Lokasi Tiangmas Adv"
        :width="width" :height="height" v-show="!videoLoaded" />
    </div>
</template>
<script setup>
const props = defineProps(['url', 'width', 'height'])
const { placeHolder } = useTiangMas()
const videoLoaded = ref(false)

onMounted(()=>{
    const videoContainer = document.getElementById('tiangmas-video')
    const loadVideo = ()=>{
        const video = document.createElement('video')
        video.width = props.width
        video.height = props.height
        video.controls = true
        video.autoplay = true
        /** source */
        const source = document.createElement('source')
        source.src = props.url
        source.type = 'video/mp4'
        video.appendChild(source)
        videoContainer.appendChild(video)
    }

    setTimeout(()=>{
        loadVideo()
        videoLoaded.value = true
    },3000)
})

useSchemaOrg([
    defineVideo({
        url: props.url,
        inLanguage: 'id-ID',
        width: props.width,
        height: props.height,
        thumbnailUrl: placeHolder('',{width:props.width,height:props.height}),
        uploadDate: new Date().toString()
    })
])
</script>