const placeHolder = (url = '', { showSVG = false, width =10, height = 10 }={}) => {
    /** kalau tidak ada url atau tampilkan SVG */
    if (url == '' || showSVG) {
        const fill = '#cccccc'
        const svg = `<svg fill="${fill}" width="${width}" height="${height}" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><rect width="${width}" height="${height}" rx="${width / 25}" ry="${width / 25}"/>
        <path fill="#666" transform="translate(${width/2-50},${height/2-50})"
        d="M1.318 72.881a57.451 57.451 0 0 1 0.565 -3.212 48.717 48.717 0 0 1 2.441 -8.081A49.344 49.344 0 0 1 26.098 36.847a48.739 48.739 0 0 1 11.645 -4.641c1.1 -0.28 2.108 -0.504 2.134 -0.478 0.013 0.013 -0.057 1.341 -0.158 2.954a324.797 324.797 0 0 0 -0.184 3.059c0 0.123 -0.009 0.127 -0.289 0.202a43.396 43.396 0 0 0 -16.224 8.095 43.445 43.445 0 0 0 -11.662 14.366 43.173 43.173 0 0 0 -3.971 12.065l-0.11 0.649 -2.993 0.013 -2.993 0.013zm37.971 0.184 0.5 -8.169 1.819 -29.508A10181.452 10181.452 0 0 1 42.94 13.887c0.013 -0.062 0.184 -0.175 0.666 -0.438 0.355 -0.193 0.657 -0.342 0.666 -0.333 0.009 0.013 -0.329 13.512 -0.758 30.008l-0.776 29.99 -1.722 0.013c-1.621 0.013 -1.722 0.009 -1.722 -0.057zm5.075 -0.101c0 -0.934 1.573 -60.764 1.6 -60.787 0.018 -0.018 0.456 -0.258 0.977 -0.539l1.122 -0.613 0.175 -0.101 -0.022 0.416c-0.044 0.741 -0.18 6.153 -0.267 10.75a1127.822 1127.822 0 0 0 -0.039 20.063 680.396 680.396 0 0 0 1.052 30.866v0.114h-4.593v-0.171zm48.283 0.118a5.737 5.737 0 0 1 -0.062 -0.373 58.004 58.004 0 0 0 -0.666 -3.243 43.168 43.168 0 0 0 -14.537 -23.053 43.186 43.186 0 0 0 -13.761 -7.604 41.056 41.056 0 0 0 -2.98 -0.881c-0.473 -0.118 -0.631 -0.18 -0.653 -0.232a17.684 17.684 0 0 1 -0.07 -1.284l-0.105 -2.976a49.256 49.256 0 0 1 -0.048 -1.784 49.111 49.111 0 0 1 28.154 16.947 49.138 49.138 0 0 1 8.349 14.726 49.418 49.418 0 0 1 1.788 6.346c0.184 0.868 0.508 2.739 0.565 3.212l0.026 0.25h-2.989c-2.358 0 -2.989 -0.013 -3.002 -0.053z" />
      <path fill="#999" transform="translate(${width/2-50},${height/2-50})"
        d="M42.773 72.618c0.013 -0.28 0.368 -13.967 0.789 -30.406 0.518 -10.198 0.811 -30.639 0.811 -30.639l1.547 -0.739 -0.013 1.173 -0.776 30.126 -0.789 30.345 -0.022 0.657h-1.569zm6.223 0.482a784.895 784.895 0 0 1 -0.443 -8.712 702.418 702.418 0 0 1 -0.381 -50.724c0.031 -1.118 0.057 -2.187 0.057 -2.367 0 -0.193 0.018 -0.329 0.039 -0.32 0.057 0.018 9.221 7.402 9.256 7.459 0.018 0.026 0.044 1.201 0.057 2.608a561.715 561.715 0 0 0 3.055 52.056c0 0.022 -2.174 0.039 -5.82 0.039 -3.199 0 -5.82 -0.018 -5.82 -0.031z" />
    </svg>`;

        return 'data:image/svg+xml;base64,' + btoa(svg)
    } else {
        /** gambar kecil */
        const img = useImage()
        return img(url, { width: width, height: height},{provider:'photon'})
    }
}

const photonConvert = (url: string, params = '') => {
    url = url.replace(/https:\/\//g, '')
    params = params !== '' ? '?' + params : params
    return 'https://i' + Math.floor(Math.random() * 3) + '.wp.com/' + url + params
}

/** generate canonical */
const canonicalGen = (route: Object) => {
    //@ts-ignore
    return route.path.endsWith("/") ? route.path : route.path + "/";
}
/** slug to String */
function slugToName(slug:string) {
    const slugPart = slug.split('-')
    const slugPartProcess = slugPart.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1)
    })

    return slugPartProcess.join(' ')
}

/** date */
function tanggal(tgl:string){
    return new Date(tgl).toLocaleDateString('id-ID',{
        day:'numeric',year:'numeric', month:'short'
    })
}

export default function () {
    return {
        placeHolder,
        photonConvert,
        canonicalGen,
        slugToName,
        tanggal
    }
}