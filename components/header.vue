<template>
    <nav class="bg-gray-950">
        <div class="container px-6 py-4 mx-auto">
            <div class="lg:flex lg:items-center">
                <div class="flex items-center justify-between">
                    <a href="#" class="flex space-x-1 items-center">
                        <svg class="h-14 w-14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-amber-400"
                                d="M0.9 19.039a13.109 13.109 0 0 1 0.129 -0.733 11.116 11.116 0 0 1 0.557 -1.844 11.259 11.259 0 0 1 4.968 -5.645 11.121 11.121 0 0 1 2.657 -1.059c0.251 -0.064 0.481 -0.115 0.487 -0.109 0.003 0.003 -0.013 0.306 -0.036 0.674a74.111 74.111 0 0 0 -0.042 0.698c0 0.028 -0.002 0.029 -0.066 0.046a9.902 9.902 0 0 0 -3.702 1.847 9.913 9.913 0 0 0 -2.661 3.278 9.851 9.851 0 0 0 -0.906 2.753l-0.025 0.148 -0.683 0.003 -0.683 0.003zm8.664 0.042 0.114 -1.864 0.415 -6.733a2323.164 2323.164 0 0 1 0.304 -4.906c0.003 -0.014 0.042 -0.04 0.152 -0.1 0.081 -0.044 0.15 -0.078 0.152 -0.076 0.002 0.003 -0.075 3.083 -0.173 6.847l-0.177 6.843 -0.393 0.003c-0.37 0.003 -0.393 0.002 -0.393 -0.013zm1.158 -0.023c0 -0.213 0.359 -13.865 0.365 -13.87 0.004 -0.004 0.104 -0.059 0.223 -0.123l0.256 -0.14 0.04 -0.023 -0.005 0.095c-0.01 0.169 -0.041 1.404 -0.061 2.453a257.342 257.342 0 0 0 -0.009 4.578 155.25 155.25 0 0 0 0.24 7.043v0.026h-1.048v-0.039zm11.017 0.027a1.309 1.309 0 0 1 -0.014 -0.085 13.235 13.235 0 0 0 -0.152 -0.74 9.85 9.85 0 0 0 -3.317 -5.26 9.854 9.854 0 0 0 -3.14 -1.735 9.368 9.368 0 0 0 -0.68 -0.201c-0.108 -0.027 -0.144 -0.041 -0.149 -0.053a4.035 4.035 0 0 1 -0.016 -0.293l-0.024 -0.679a11.239 11.239 0 0 1 -0.011 -0.407 11.206 11.206 0 0 1 6.424 3.867 11.212 11.212 0 0 1 1.905 3.36 11.276 11.276 0 0 1 0.408 1.448c0.042 0.198 0.116 0.625 0.129 0.733l0.006 0.057h-0.682c-0.538 0 -0.682 -0.003 -0.685 -0.012z" />
                            <path fill="#223c3c"
                                d="M10.359 18.979c0.003 -0.064 0.084 -3.187 0.18 -6.938s0.177 -6.86 0.18 -6.906l0.005 -0.085h0.353l-0.003 0.099 -0.177 6.874a6684.56 6684.56 0 0 1 -0.18 6.924l-0.005 0.15h-0.358zm1.42 0.11a179.099 179.099 0 0 1 -0.101 -1.988 160.275 160.275 0 0 1 -0.087 -11.574c0.007 -0.255 0.013 -0.499 0.013 -0.54 0 -0.044 0.004 -0.075 0.009 -0.073 0.013 0.004 2.104 1.689 2.112 1.702 0.004 0.006 0.01 0.274 0.013 0.595a128.17 128.17 0 0 0 0.697 11.878c0 0.005 -0.496 0.009 -1.328 0.009 -0.73 0 -1.328 -0.004 -1.328 -0.007z" />
                        </svg>
                        <div class="flex flex-col text-white">
                            <div class="font-gabarito font-bold text-2xl">TIANG<span class="text-amber-400">MAS</span></div>
                            <div class="text-xs">Advertising & Contractors</div>
                        </div>
                    </a>

                    <!-- Mobile menu button -->
                    <div class="flex lg:hidden">
                        <button @click="isOpen = !isOpen" type="button"
                            class="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                            aria-label="toggle menu">
                            <svg v-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                            </svg>

                            <svg v-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
                    class="absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-950 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between">
                    <div
                        class="flex flex-col capitalize text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                        <ULink :to="nav.to" v-for="nav of navMenus" :key="nav.to"
                            class="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-200">
                            {{ nav.label }}
                        </ULink>
                    </div>


                </div>
            </div>
        </div>
    </nav>
</template>
<script lang="ts" setup>
const { isOpen } = useMenuNav()

const navMenus = [
    { label: 'Beranda', to: '/' },
    { label: 'Profil Perusahaan', to: '/p/profil' },
    { label: 'Layanan', to: '/layanan' },
    { label: 'Portofolio', to: '/' },
    { label: 'Kontak', to: '/' },
]
</script>