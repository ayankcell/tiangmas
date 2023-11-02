<template>
    <div class="flex flex-wrap justify-center items-center py-5 gap-3">
        <UButton size="xl" icon="i-bxl-whatsapp" color="green" to="/x/contact-whatsapp">
            Konsultasi via WhatsApp
        </UButton>
        <UButton size="xl" icon="i-heroicons-map-pin" color="amber" to="/x/map-navigation">
            Kunjungi Workshop Kami
        </UButton>
        <UButton size="xl" icon="i-heroicons-magnifying-glass" color="sky" to="/portfolio">
            Lihat Contoh Yang Kami Kerjakan
        </UButton>

        <Maps v-if="!!maps" class="w-full"/>
    </div>
</template>
<script setup>
const props = defineProps(['maps'])
</script>