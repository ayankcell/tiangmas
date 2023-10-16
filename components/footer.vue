<template>
    <footer class="bg-gray-900">
        <div class="container p-6 mx-auto">
            <div class="lg:flex">
                <div class="w-full -mx-6 lg:w-2/5">
                    <div class="px-6">
                        <a href="#" class="flex space-x-1 items-center">
                            <svg class="h-14 w-14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-amber-400"
                                    d="M0.9 19.039a13.109 13.109 0 0 1 0.129 -0.733 11.116 11.116 0 0 1 0.557 -1.844 11.259 11.259 0 0 1 4.968 -5.645 11.121 11.121 0 0 1 2.657 -1.059c0.251 -0.064 0.481 -0.115 0.487 -0.109 0.003 0.003 -0.013 0.306 -0.036 0.674a74.111 74.111 0 0 0 -0.042 0.698c0 0.028 -0.002 0.029 -0.066 0.046a9.902 9.902 0 0 0 -3.702 1.847 9.913 9.913 0 0 0 -2.661 3.278 9.851 9.851 0 0 0 -0.906 2.753l-0.025 0.148 -0.683 0.003 -0.683 0.003zm8.664 0.042 0.114 -1.864 0.415 -6.733a2323.164 2323.164 0 0 1 0.304 -4.906c0.003 -0.014 0.042 -0.04 0.152 -0.1 0.081 -0.044 0.15 -0.078 0.152 -0.076 0.002 0.003 -0.075 3.083 -0.173 6.847l-0.177 6.843 -0.393 0.003c-0.37 0.003 -0.393 0.002 -0.393 -0.013zm1.158 -0.023c0 -0.213 0.359 -13.865 0.365 -13.87 0.004 -0.004 0.104 -0.059 0.223 -0.123l0.256 -0.14 0.04 -0.023 -0.005 0.095c-0.01 0.169 -0.041 1.404 -0.061 2.453a257.342 257.342 0 0 0 -0.009 4.578 155.25 155.25 0 0 0 0.24 7.043v0.026h-1.048v-0.039zm11.017 0.027a1.309 1.309 0 0 1 -0.014 -0.085 13.235 13.235 0 0 0 -0.152 -0.74 9.85 9.85 0 0 0 -3.317 -5.26 9.854 9.854 0 0 0 -3.14 -1.735 9.368 9.368 0 0 0 -0.68 -0.201c-0.108 -0.027 -0.144 -0.041 -0.149 -0.053a4.035 4.035 0 0 1 -0.016 -0.293l-0.024 -0.679a11.239 11.239 0 0 1 -0.011 -0.407 11.206 11.206 0 0 1 6.424 3.867 11.212 11.212 0 0 1 1.905 3.36 11.276 11.276 0 0 1 0.408 1.448c0.042 0.198 0.116 0.625 0.129 0.733l0.006 0.057h-0.682c-0.538 0 -0.682 -0.003 -0.685 -0.012z" />
                                <path fill="#223c3c"
                                    d="M10.359 18.979c0.003 -0.064 0.084 -3.187 0.18 -6.938s0.177 -6.86 0.18 -6.906l0.005 -0.085h0.353l-0.003 0.099 -0.177 6.874a6684.56 6684.56 0 0 1 -0.18 6.924l-0.005 0.15h-0.358zm1.42 0.11a179.099 179.099 0 0 1 -0.101 -1.988 160.275 160.275 0 0 1 -0.087 -11.574c0.007 -0.255 0.013 -0.499 0.013 -0.54 0 -0.044 0.004 -0.075 0.009 -0.073 0.013 0.004 2.104 1.689 2.112 1.702 0.004 0.006 0.01 0.274 0.013 0.595a128.17 128.17 0 0 0 0.697 11.878c0 0.005 -0.496 0.009 -1.328 0.009 -0.73 0 -1.328 -0.004 -1.328 -0.007z" />
                            </svg>
                            <div class="flex flex-col text-white">
                                <div class="font-gabarito font-bold text-2xl">TIANG<span class="text-amber-400">MAS</span>
                                </div>
                                <div class="text-xs">Advertising & Contractors</div>
                            </div>
                        </a>

                        <p class="max-w-sm mt-2 text-gray-400">Jl. Sentot Alibasya, Sukarame, Kota Bandar
                            Lampung, Indonesia
                        </p>

                        <div class="flex mt-6 -mx-2">
                            <!-- social icons-->
                        </div>
                    </div>
                </div>

                <div class="mt-6 lg:mt-0 lg:flex-1">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        <div>
                            <h3 class="uppercase text-white">Profil</h3>
                            <NuxtLink v-for="item of profileLinks" :key="item.to" :to="item.to" class="block mt-2 text-sm text-gray-400 hover:underline">{{ item.label }}</NuxtLink>
                        </div>

                        <div>
                            <h3 class="uppercase text-white">Layanan</h3>
                            <NuxtLink v-for="item of services" :key="item.to" :to="item.to"
                                class="block mt-2 text-sm text-gray-400 hover:underline">{{ item.label }}
                            </NuxtLink>
                        </div>


                        <div>
                            <h3 class="uppercase text-white">Kontak</h3>
                            <span class="block mt-2 text-sm text-gray-400 hover:underline">0811 669
                                003</span>
                            <span
                                class="block mt-2 text-sm text-gray-400 hover:underline">example@email.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="h-px my-6 border-none bg-gray-700">

            <div>
                <p class="text-center text-gray-400">© 2023 PT. Tiang Mas Teknik Perdana</p>
            </div>
        </div>
    </footer>
</template>
<script setup>
const services = [
    { label: 'Baliho', to: '/layanan/baliho' },
    { label: 'Neon Box', to: '/layanan/neon-box' },
    { label: 'Kampanye', to: '/layanan/kampanye' },
    { label: 'Huruf Timbul', to: '/layanan/huruf-timbul' },
    { label: 'Semua Layanan', to: '/layanan' },
]

const profileLinks = [
    {label:'Beranda', to:'/'},
    { label: 'Tentang Perusahaan', to: '/p/profil' },
    { label: 'Kontak', to: '/p/kontak' },
    { label: 'Penawaran', to: '/p/penawaran' },
]
</script>