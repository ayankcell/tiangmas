<template>
    <div class="flex p-3 justify-center items bg-center">
        <UButton @click="redirect">
            <slot/>
        </UButton>
    </div>
</template>
<script setup>
const props = defineProps(['link'])

const redirect = ()=>{
    navigateTo(props.link,{
        open:{
            target:"_blank"
        },
        external: true
    })
}
</script>