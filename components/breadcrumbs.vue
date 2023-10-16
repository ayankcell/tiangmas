<template>
    <div class="flex items-center py-4 overflow-x-auto whitespace-nowrap w-full">
        <ULink to="/" class="text-gray-600 flex items-center">
            <UIcon name="i-heroicons-home" />
        </ULink>
        <div v-for="(path, i) in paths" :key="path" class="flex items-center w-fit">
            <UIcon name="i-heroicons-chevron-right" />
            <ULink :to="path.path" class="hover:underline" :class="path.isLast ? 'text-blue-600' : 'text-gray-600'">
                {{ path.label }}
            </ULink>
        </div>

    </div>
</template>
<script setup lang="ts">
const props = defineProps(['path', 'title'])
const paths = ref(props.path.split('/'))
paths.value.shift() // hilangkan empty array element
console.log(props.title)

paths.value = paths.value.map((item: string, index: number) => {
    index++
    const path = index < paths.value.length ? `/${item}` : props.path
    const isLast = index == paths.value.length

    return { path: path, label: isLast ? props.title : item.charAt(0).toUpperCase() + item.slice(1), isLast: isLast }
})
</script>