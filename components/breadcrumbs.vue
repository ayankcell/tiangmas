<template>
    <div class="flex items-center py-4 overflow-x-auto whitespace-nowrap w-full">
         <div v-for="(path, i) in breadcrumb" :key="i" class="flex items-center w-fit">
            <UIcon name="i-heroicons-chevron-right" v-if="i>0"/>
            <UButton :to="path.item" color="gray" variant="soft" size="lg">
                {{ path.name }}
            </UButton>
        </div>

    </div>
</template>
<script setup lang="ts">
const props = defineProps(['path', 'title'])
const breadcrumb = ref([{name:'Home', item:'/'}])

const paths = props.path.endsWith('/') ? props.path.slice(0, -1) : props.path

const pathParts = paths.split('/')

for (let i = 2; i <= pathParts.length; i++) {
    //@ts-ignore
    breadcrumb.value.push({
        name: i==pathParts.length? props.title : slugToName(pathParts.slice(0, i).join('/')),
        item: pathParts.slice(0, i).join('/')
    })
}

function slugToName(slug:string) {
    const slugPart = slug.replace(/\//g,'').split('-')
    const slugPartProcess = slugPart.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1)
    })

    return slugPartProcess.join(' ')
}

//schema org
defineBreadcrumb({
    itemListElement: breadcrumb.value
})
</script>