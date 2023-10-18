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
                <NuxtImg src="/img/pageassets/pusing.png" alt="pusing mau promosi" width="499" height="466"
                    :placeholder="placeHolder(499, 466)"  quality="80" />
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

                <ContentList path="/layanan" v-slot="{ list }">
                    <div class="w-full md:w-1/3 lg:w-1/4 p-3" v-for="content in list" :key="content._path">
                        <div
                            class="p-3 shadow-lg rounded-md dark:text-gray-600 bg-white flex flex-col justify-center item-center space-y-2">
                            <h3 class="text-gray-600 text-center font-semibold">{{ content.pageTitle }}</h3>
                            <nuxt-img :src="content.image ?? placeHolder(256, 192)" :alt="content.pageTitle" 
                                quality="80" :placeholder="placeHolder(256, 192)" width="256" height="192" class="rounded-md"/>
                            <UButton :to="content._path" size="md" color="amber" block :ui="{ font: 'font-semibold' }">
                                Selengkapnya
                            </UButton>
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