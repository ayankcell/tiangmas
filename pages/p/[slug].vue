<template>
    <NuxtLayout>

        <UContainer>
            <!-- primary section left-->
            <div id="primary" class="lg:flex">
                <main class="w-full lg:w-3/4 px-8 py-3 shadow-md">
                    <article>
                        <header class="w-full my-5">
                            <h1
                                class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                                {{ pageData.title }}</h1>
                            <nuxt-img provider="photon" :src="pageData.image.url"
                                class="h-80 w-full overflow-hidden shadow-md rounded object-cover" width="840" height="331"
                                quality="90" :placeholder="placeHolder(pageData.image.url)" :alt="pageData.image.altText" />
                        </header>
                        <Toc :links="pageData.body.toc.links" />
                        <ContentDoc :path="`/page/${slug}`" />
                        <Cta />
                    </article>
                </main>
                <!--secondary right-->
                <section class="p-2 flex-grow">
                    <div class="shadow p-2">
                        Right
                    </div>
                </section>
            </div>
        </UContainer>

    </NuxtLayout>
</template>
<script setup>
const { placeHolder } = useTiangMas()
const slug = useRoute().params.slug
// // fetch content
const pageData = await queryContent(`page/${slug}`).findOne();
console.log(pageData.body.toc.links)
</script>