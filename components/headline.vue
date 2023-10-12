<template>
    <div :class="alignClass" class="py-3">
        <component :is="tag??defaultTag" class="text-2xl font-bold">
            <slot/>
        </component>
        <p class="text-base"><slot name="subtitle"/>
        </p>
    </div>
</template>
<script setup>
const defaultTag = 'h2'
const props = defineProps(['tag','align'])

const alignClass = props.align == 'center' ? 'text-center' : props.align == 'right' ? 'text-right' : 'text-left'
</script>