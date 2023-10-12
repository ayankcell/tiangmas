<template>
    <NuxtLayout>
        <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article
                    class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header class="mb-4 lg:mb-6 not-format">
                        <h1
                            class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                            {{ pageData.title }}</h1>
                    </header>
                    <ContentDoc :path="`/layanan/${slug}`" />
                    <Cta />
                </article>
            </div>
        </main>
    </NuxtLayout>
</template>
<script setup>
const slug = useRoute().params.slug
// // fetch content
const pageData = await queryContent(`layanan/${slug}`).findOne();
</script>