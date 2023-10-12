<template>
    <header :class="colorTheme == 'light'?'bg-white': 'bg-gray-900'">
        <UContainer class="py-16">
            <div class="items-center lg:flex" :class="direction == 'rtl'? 'flex-row-reverse':'' ">
                <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <slot name="image"/>
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-3xl font-semibold lg:text-4xl" :class="colorTheme =='light'?'text-gray-800': 'text-white'">
                            <slot />
                        </h1>
                        <p class="mt-3" :class="colorTheme == 'light'?'text-gray-600': 'text-gray-400'">
                            <slot name="description" />
                        </p>
                    </div>
                </div>
            </div>
        </UContainer>
    </header>
</template>
<script setup>
const colorTheme = ref('dark')
const props = defineProps(['theme','direction'])
colorTheme.value = props.theme?? 'dark'

</script>