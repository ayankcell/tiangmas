<template>
    <NuxtLayout>

        <Head>
            <Title>Layanan Tiang Mas Advertising</Title>
            <Meta />
        </Head>

        <Hero>
            Bingung Dengan Kebutuhan Promosi Bisnis Anda?
            <template #description>
                Apapun kebutuhanp promosi yang sedang anda perlukan saat ini, konsultasikan segera dengan kami.
            </template>
            <template #image>
                <NuxtImg src="/img/page/pusing.png" alt="pusing mau promosi" width="499" height="466" />
            </template>
        </Hero>
        <!-- main content -->
        <UContainer :ui="{
            base: 'bg-gray-50 py-12'
        }">
            <Headline tag="h2" align="center" class="text-gray-600">
                Tiang Mas Advertising
                <template #subtitle>All in One Solution Advertising in Lampung</template>
            </Headline>
            <div class="flex w-full flex-wrap items-center justify-center">
                <!-- looping layanan-->
                <div class="w-full md:w-1/3 lg:w-1/4 p-3" v-for="(item, i) in layanan" :key="i">
                    <div
                        class="p-3 shadow-lg rounded-md dark:text-gray-600 bg-white flex flex-col justify-center item-center space-y-2">
                        <h3 class="text-center font-semibold">{{ item.title }}</h3>
                        <nuxt-img :src="item.image" :alt="item.title" />
                        <UButton :to="item.page" size="md" color="amber" block :ui="{ font: 'font-semibold' }">Selengkapnya
                        </UButton>
                    </div>
                </div>
            </div>
        </UContainer>
        <UContainer :ui="{
            base: 'bg-sky-600 py-12'
        }">
            <Headline tag="h2" align="center">
                Tidak Menemukan Kebutuhan Yang Sesuai?
                <template #subtitle>Diskusikan dengan tim kami</template>
            </Headline>
            <Cta/>
            <Maps/>
        </UContainer>

    </NuxtLayout>
</template>

<script setup>
const layanan = [
    { title: 'Neon Box', image: '/img/page/neon-box.png', page: '/layanan/neon-box' },
    { title: 'Baliho', image: '/img/page/neon-box.png', page: '/layanan/neon-box' },
    { title: 'Huruf Timbul', image: '/img/page/huruf-timbul.png', page: '/layanan/huruf-timbul' },
    { title: 'Billboard', image: '/img/page/neon-box.png', page: '/layanan/neon-box' },
    { title: 'Shop Sign', image: '/img/page/shopsign.jpg', page: '/layanan/shop-sign' },
    { title: 'Neon Sign', image: '/img/page/neon-sign.jpg', page: '/layanan/shop-sign' }
]
</script>