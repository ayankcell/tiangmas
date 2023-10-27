<script setup lang="ts">
const props = defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })

const errorTitle: Object = {
    //@ts-ignore
    404: `Halaman tidak ditemukan: ${props.error.url} | Tiangmas.com`,
    500: 'Maaf, sedang ada gangguan di sistem kami.  Coba beberapa saat lagi'
}

useSeoMeta({
    //@ts-ignore
    title: errorTitle[props.error.statusCode]
});
</script>

<template >
    <NuxtLayout name="error">
        <div class="min-h-screen w-full flex flex-col justify-center items-center space-y-5">

            <svg viewBox="7.7 10 112.238 108.45" class="w-[200px] animate-bounce" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M118.1 88.7H68.588V78.125h-9.537v10.563H9.525c-1.012 0-1.825.813-1.825 1.825s.813 1.825 1.825 1.825H59.05v26.113h9.537V92.35h49.525a1.82 1.82 0 0 0 1.825-1.825A1.838 1.838 0 0 0 118.1 88.7z"
                    fill="#333E48" />
                <path d="M59.05 78.125h9.537v8.325H59.05zm0 20.7h9.537v5.775H59.05z" />
                <path d="M47.425 90.525V98.7a1.84 1.84 0 0 0 1.837 1.837h29.1a1.84 1.84 0 0 0 1.837-1.837v-8.175H47.425z"
                    fill="#D1D3D3" />
                <path
                    d="M61.862 95.525a1.95 1.95 0 1 0 3.9 0 1.95 1.95 0 1 0-3.9 0Zm-9.125 0a1.95 1.95 0 1 0 3.9 0 1.95 1.95 0 1 0-3.9 0Zm18.262 0a1.95 1.95 0 1 0 3.9 0 1.95 1.95 0 1 0-3.9 0Z"
                    fill="#A4A9AD" />
                <path d="M47.425 90.525H80.2v5H47.425z" />
                <path
                    d="M28.85 26.063a1.82 1.82 0 0 1-1.825-1.825v-11.1c0-1.012.813-1.825 1.825-1.825s1.825.813 1.825 1.825v11.1c0 1-.825 1.825-1.825 1.825z"
                    fill="#A4A9AD" />
                <path d="M27.025 15.35h3.65v3.825h-3.65z" />
                <path
                    d="M38.788 11.338c0-.738-.6-1.337-1.337-1.337H20.238c-.738 0-1.337.6-1.337 1.337v3.587c0 .738.6 1.337 1.337 1.337H37.45c.738 0 1.337-.6 1.337-1.337v-3.587z"
                    fill="#333E48" />
                <path
                    d="M63.813 26.063a1.82 1.82 0 0 1-1.825-1.825v-11.1c0-1.012.813-1.825 1.825-1.825s1.825.813 1.825 1.825v11.1c0 1-.813 1.825-1.825 1.825z"
                    fill="#A4A9AD" />
                <path d="M61.987 15.35h3.65v3.825h-3.65z" />
            <path
                d="M73.763 11.338c0-.738-.6-1.337-1.337-1.337H55.212c-.738 0-1.337.6-1.337 1.337v3.587c0 .738.6 1.337 1.337 1.337h17.212c.738 0 1.337-.6 1.337-1.337v-3.587z"
                fill="#333E48" />
            <path
                d="M98.775 26.063a1.82 1.82 0 0 1-1.825-1.825v-11.1c0-1.012.813-1.825 1.825-1.825s1.825.813 1.825 1.825v11.1c0 1-.813 1.825-1.825 1.825z"
                fill="#A4A9AD" />
            <path d="M96.95 15.35h3.65v3.825h-3.65z" />
            <path
                d="M108.725 11.338c0-.738-.6-1.337-1.337-1.337H90.175c-.738 0-1.337.6-1.337 1.337v3.587c0 .738.6 1.337 1.337 1.337h17.212c.738 0 1.337-.6 1.337-1.337v-3.587z"
                fill="#333E48" />
            <path
                d="M118.1 25.762a2.7 2.7 0 0 0-2.688-2.688H12.213a2.7 2.7 0 0 0-2.688 2.688v55.15a2.7 2.7 0 0 0 2.688 2.688h103.213a2.7 2.7 0 0 0 2.688-2.688l-.013-55.15z"
                fill="#00B3E3" />
            <path d="M65.075 83.588h50.337A2.7 2.7 0 0 0 118.1 80.9V30.563c-29.275 0-53.025 23.75-53.025 53.025z"
                fill="#0071CE" />
            <path
                d="M54.5 42.375H23.087c-1.012 0-1.825-.813-1.825-1.825s.813-1.825 1.825-1.825H54.5c1.012 0 1.825.813 1.825 1.825s-.812 1.825-1.825 1.825zm-9.225 8.262H23.087c-1.012 0-1.825-.813-1.825-1.825s.813-1.825 1.825-1.825h22.2a1.82 1.82 0 0 1 1.825 1.825 1.846 1.846 0 0 1-1.837 1.825z"
                fill="#FFF"  class="animate-pulse"/>
        </svg>

        <div class="w-full" v-if="error.statusCode == 404 ">
            <h1 class="w-full text-center py-5 text-3xl font-bold text-gray-600">
               404: Halaman Tidak Ditemukan
            </h1>
            <p class="text-center px-2">
                Mungkin halaman ini sudah dihapus atau tidak tersedia.
            </p>
            <p class="text-center px-2">
                Periksa kembali tautan yang anda tuju atau gunakan tombol berikut untuk kembali ke halaman depan.
            </p>
        </div>

        <div class="w-full" v-if="error.statusCode == 500 ">
            <h1 class="w-full text-center py-5 text-3xl font-bold text-gray-600">
               Mohon maaf sistem sedang gangguan
            </h1>
            <p class="text-center px-2">
                Silakan coba beberapa saat lagi.
            </p>
            <p class="text-center px-2">
                atau kunjungi halaman depan Tiangmas dengan tombol berikut ini.
            </p>
        </div>

        <UButton color="blue" size="xl" icon="i-heroicons-arrow-left-20-solid" @click="handleError">ke Beranda
            Tiangmas.com</UButton>

    </div>
</NuxtLayout></template>
