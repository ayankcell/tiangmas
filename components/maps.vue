<template>
    <div class="flex justify-center items-center py-5" id="tiangmas-gmap">
        <!-- placeholder maps -->
        <NuxtImg src="/img/pageassets/tiangmas-map.jpg" loading="lazy" provider="photon" alt="Peta Lokasi Tiangmas Adv" class="w-full h-[450px] object-cover" v-show="!mapLoaded"/>
    </div>
</template>
<script setup>
const mapLoaded = ref(false)
const mapsURL = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d377.6965852201092!2d105.29891246120948!3d-5.379935279318889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMjInNDcuNyJTIDEwNcKwMTcnNTYuNSJF!5e0!3m2!1sid!2sid!4v1697461784615!5m2!1sid!2sid'
onMounted(() => {
    const map = document.getElementById('tiangmas-gmap')
    const maplistner = function (e) {
        const frame = document.createElement('iframe');
        frame.src = mapsURL;
        frame.width = '100%'
        frame.height = '450'
        frame.style = 'border:0'
        frame.title="Navigasi Google Maps Tiangmas Adv Lampung"
        frame.allowfullscreen = true
        frame.referrerpolicy = 'no-referrer-when-downgrade'

        map.appendChild(frame);
        // map.removeEventListener("mouseover", maplistner);
    };
    // map.addEventListener('mouseover', maplistner);
    
    setTimeout(() => {
        maplistner()
        mapLoaded.value = true;
    }, 2000);
})
</script>