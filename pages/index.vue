<template>
    <NuxtLayout>
        <!-- hero -->
        <header class="bg-white dark:bg-gray-900 h-[650px] md:h-[500px] lg:h-[400px]">
            <UContainer class="py-16">
                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Tempat terbaik
                                untuk kebutuhan
                                <span class="text-amber-500 transition-all duration-300 ease-in-out block"
                                    v-for="(item, i) in services" :key="i"
                                    :class="i === sActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 w-0 h-0'">{{
                                        item.label }}</span>
                            </h1>

                            <p class="mt-3 text-gray-600 dark:text-gray-400">
                                Berpengalaman dalam menghasilkan kebutuhan branding bisnis yang sesuai harapan. Dipercaya
                                oleh pelanggan korporasi dan UMKM di Lampung & Sekitarnya.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <NuxtImg v-for="(item, i) in services" :key="i" :src="item.img" alt="item.label" width="500" height="300"
                        :placeholder="placeHolder(500,300)"
                        format="webp" quality="80"
                        
                        loading="lazy"
                            class="transition-all duration-300 ease-in-out"
                            :class="i === sActive ? '' : 'hidden'" />
                    </div>
                </div>
            </UContainer>
        </header>
        <!-- section 1-->
        <section class="bg-white">
            <UContainer class="flex flex-col items-center px-12 py-12 text-center space-y-12">
                <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl">
                    Semua solusi periklanan bisnis anda <span class="text-blue-500">dikerjakan dengan lebih baik.</span>
                </h2>

                <p class="max-w-4xl mt-6 text-center text-gray-500">
                    Tiang Mas Advertising bukan yang terbesar, tapi kami mengerjakan semuanya dengan lebih baik di Lampung.
                    Solusi terintegrasi untuk apa pun kebutuhan branding dan periklanan anda.
                </p>

                <h2 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Kami bukan yang terbesar
                    <br>Kami <span class="text-blue-500">Menghasilkan Yang Terbaik</span>
                </h2>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                    <div v-for="why of theReasons" :key="why.title"
                        class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                        <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full h-12 w-12">
                            <UIcon :name="why.icon" />
                        </span>

                        <h3 class="text-xl font-semibold text-gray-700 capitalize">{{ why.title }}</h3>

                        <p class="text-gray-500">
                            {{ why.text }}
                        </p>
                    </div>
                </div>
            </UContainer>
        </section>
        <!--layanan-->
        <section class="bg-white dark:bg-gray-900 py-12">
            <UContainer>
                <h2 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Layanan Kami <br>
                    untuk <span class="underline decoration-blue-500">Anda</span></h2>

                <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                    Apa pun kebutuhan branding anda, kami menyediakan semuanya!
                </p>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                    <div v-for="(item, i) in layanan" :key="i" class="space-y-3">
                        <span
                            class="flex justify-center items-center p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500 h-10 w-10">
                            <UIcon :name="item.icon" />
                        </span>

                        <h3 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">{{ item.title }}</h3>

                        <p class="text-gray-500 dark:text-gray-300">
                            {{ item.description }}
                        </p>

                        <nuxt-link :to="item.page"
                            class="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <span class="mx-1">Selengkapnya</span>
                            <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </nuxt-link>
                    </div>
                </div>
            </UContainer>
        </section>
        <!-- testimonials -->
        <section class="bg-white py-12">
            <UContainer>
                <h2 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                    Pendapat <span class="text-blue-500 ">Mereka</span>
                </h2>

                <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500">
                    Puluhan Client Tiang Mas Advertising berasal dari berbagai skala bisnis. Dari UMKM hingga Korporasi
                    mempercayakan pengerjaan kebutuhan promosinya pada kami.
                </p>

                <div class="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
                    <div v-for="(item, i) in testimonials" :key="i" class="p-6 bg-gray-600 rounded-lg md:p-8">
                        <p class="leading-loose text-gray-500 dark:text-gray-300">
                            “{{ item.description }}”.
                        </p>

                        <div class="flex items-center mt-6">
                            <nuxt-img class="object-cover rounded-full w-14 h-14" :src="item.photo" format="webp" quality="80" :alt="`testimoni dari ${item.name}, ${item.title}`" :placeholder="placeHolder(300,250)" loading="lazy" />
                            <div class="mx-4">
                                <h3 class="font-semibold text-blue-500">{{ item.name }}</h3>
                                <span class="text-sm text-gray-500 dark:text-gray-300">{{ item.title }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </UContainer>
        </section>
        <section class="bg-sky-600 py-12">
            <UContainer>
                <Headline tag="h2" align="center">
                    Diskusikan Dengan Tim Kami Sekarang!
                    <template #subtitle>Apapun kebutuhan Anda, kami berikan penawaran terbaik.</template>
                </Headline>
                <Cta />
                <Maps />
            </UContainer>
        </section>
    </NuxtLayout>
</template>
<script setup>
const { placeHolder } = useTiangMas()
const sActive = ref(0)
const services = [
    { label: 'Huruf Timbul', img: '/img/page/huruf-timbul.png' },
    { label: 'Baliho', img: '/img/page/billboard.png' },
    { label: 'Neon Box', img: '/img/page/neon-box.png' },
    { label: 'Semua Periklanan Anda', img: '/img/page/billboard.png' },
]
/** berkala ganti service yang tampil */
const rotateService = () => {
    setTimeout(() => {
        if (sActive.value + 1 < services.length) {
            sActive.value += 1
        } else {
            sActive.value = 0
        }
        rotateService()
    }, 2000)
}
rotateService()
/** data */
const theReasons = [
    {
        title: 'Dikerjakan dengan baik', icon: 'i-heroicons-check', text: 'Setiap projek adalah unik, sehingga kami selalu mengerjakan dengan perhatian ekstra untuk mendapatkan hasil  terbaik.'
    },
    {
        title: 'Tepat Waktu', icon: 'i-simple-icons-speedtest',
        text: 'Hasil pekerjaan terbaik, tidak akan sempurna jika dikerjakan terlambat.  Kami selalu memperhatikan deadline dengan ketat.'
    },
    {
        title: 'Customer Oriented', icon: 'i-heroicons-users',
        text: 'Tim marketing dan workshop kami selalu mendengarkan apa yang client kami butuhkan. Jika dibutuhkan, kami bisa memberikan saran.'
    },
]

const testimonials = [
    {
        name: 'Saprudin',
        photo: '/img/page/user-testimonials-example.jpg',
        title: 'Owner, Warung Bakso Mang Udin - Lampung',
        description: 'Saya puas dengan hasil pengerjaan Tiang Mas Advertising ini.  Jadwalnya gak ngaret. Tepat waktu buat cabang baru.'
    },
    {
        name: 'Ikhsan',
        title: 'Store Manager, Sabar Subur Mart - Bandar Lampung',
        photo: '/img/page/user-testimonials-example.jpg',
        description: 'Komunikasi dengan team di Tiang Mas sangat menyenangkan.  Selain itu pengerjaan sesuai spek yang diberikan.  Good job!'
    }
]

const layanan = [
    {
        title: 'Neon Box', icon: 'i-heroicons-check',
        description: 'Salah satu media jenis billboard yang didalamnya diisi dengan lampu neon atau LED strip untuk memberikan cahaya penerangan',
        page: '/layanan/neon-box'
    },
    {
        title: 'Baliho', icon: 'i-heroicons-check',
        description: ' Media luar ruangan (outdoor) untuk informasi event atau kegiatan dengan audience luas', page: '/layanan/neon-box'
    },
    { title: 'Huruf Timbul', icon: 'i-heroicons-check', description: 'Reklame unik yang berupa tulisan 3D dalam ukuran besar maupun sedang', page: '/layanan/huruf-timbul' },
    { title: 'Billboard', icon: 'i-heroicons-check', description: 'Billboard merupakan media iklan luar ruang (outdoor advertising) yang paling banyak digunakan', page: '/layanan/neon-box' },
    { title: 'Shop Sign', icon: 'i-heroicons-check', description: 'Shopsign berfungsi untuk menonjolkan ciri dan identitas suatu perusahaan, memberikan petunjuk kepada para konsumen agar mengetahui dimana sebuah tempat usaha berada', page: '/layanan/shop-sign' },
    { title: 'Semua Layanan', icon: 'i-heroicons-check', description: 'Lihat daftar semua layanan dari Tiang Mas Advertising', page: '/layanan' }
]

useSeoMeta({
    title: 'Solusi Branding & Advertising di Lampung | PT. Tiang Mas Teknik Perdana'
})
</script>