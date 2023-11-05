<template>
    <NuxtLayout>

        <Head>
            <Title>Layanan Tiang Mas Advertising</Title>
            <Meta name="description" content="Produk dan layanan Tiang Mas Advertising Lampung meliputi periklanan luar ruangan, konstruksi, dan lainnya.  Melayani wilayah kota Bandar Lampung, Provinsi Lampung dan area Sumatra"/>
            <Meta name="og:image" content="/img/pageassets/huruf-timbul-pascasarjana-uinril.jpg"/>
        </Head>

        <Hero>
            Bingung Dengan Kebutuhan Promosi Bisnis Anda?
            <template #description>
                Apapun kebutuhanp promosi yang sedang anda perlukan saat ini, konsultasikan segera dengan kami.
            </template>
            <template #image>
                <nuxt-img provider="photon" src="/img/pageassets/pusing.png" alt="pusing mau promosi" width="499"
                    height="466" :placeholder="placeHolder('/img/pageassets/pusing.png')" quality="80" />
            </template>
        </Hero>
        <!-- main content -->
        <UContainer :ui="{
            base: 'bg-gray-50 py-12'
        }">
            <Headline tag="h2" align="center" class="text-gray-600">
                Tiang Mas Advertising
                <template #subtitle>All in One Advertising Solution in Lampung</template>
            </Headline>
            <div class="flex w-full flex-wrap items-center justify-center">

                <ContentList path="/layanan" v-slot="{ list }">
                    <div class="w-full md:w-1/2 lg:w-1/3 p-3" v-for="content in list" :key="content._path">
                        <div
                            class="shadow-lg rounded-md overflow-hidden dark:text-gray-600 bg-white flex flex-col justify-center item-center space-y-2 transition-all duration-200 hover:-translate-y-1">
                            <div class="container h-52 overflow-hidden">
                                <ULink :to="content._path">
                                    <nuxt-img provider="photon"
                                        :src="content.coverImage ? content.coverImage.url : placeHolder('', { showSVG: true, width: 256, height: 192 })"
                                        :alt="content.coverImage ? content.coverImage.altText : content.title" :placeholder="placeHolder('', { showSVG: true, width: 256, height: 192 })" width="381" height="208"
                                        class="w-full h-full object-cover" :modifiers="{
                                            lb:'381,208'
                                        }"/>
                                </ULink>
                            </div>
                            <div class="p-3">
                                <h3 class="text-gray-600 text-center font-semibold">{{ content.title }}</h3>
                                <p class="text-sm text-gray-500 line-clamp-2">{{ content.description }}</p>
                            </div>
                            <div class="flex justify-end p-3">
                                <UButton :to="content._path" size="md" color="orange" :ui="{ font: 'font-semibold' }"
                                    icon="i-heroicons-chevron-right" :trailing="true">
                                    Info Lengkap
                                </UButton>
                            </div>
                        </div>
                    </div>
                </ContentList>
                <!-- looping layanan-->

            </div>
        </UContainer>
        <UContainer :ui="{
            base: 'bg-sky-600 py-12'
        }">
            <Headline tag="h2" align="center">
                Tidak Menemukan Kebutuhan Yang Sesuai?
                <template #subtitle>Diskusikan dengan tim kami</template>
            </Headline>
            <Cta />
            <Maps />
        </UContainer>

    </NuxtLayout>
</template>

<script setup>
const { placeHolder } = useTiangMas()
</script>