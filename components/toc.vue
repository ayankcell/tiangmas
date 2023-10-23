<template>
    <div class="bg-gray-100 shadow rounded-md overflow-hidden">
        <div class="p-2 bg-red-500 text-white">Daftar Isi</div>
        <div class="px-5 py-3">
            <ul>
                <li v-for="link of links" :key="link.id">
                    <a :href="`#${link.id}`" class="text-gray-600 hover:text-gray-500">{{ link.text }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['links'])
</script>