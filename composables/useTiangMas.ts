/** responsive svg placeholder */
const placeHolder = (width = 50, height = 50, fill = '#cccccc') => {
    const svg = `<svg fill="${fill}" width="${width}" height="${height}" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><rect width="${width}" height="${height}" rx="${width / 25}" ry="${width / 25}"/>
    <circle fill="#ffffff33" r="${height / 5}" cy="${height / 2}">
    <animate attributeName="r" values="0;10;${height / 2};10;0" dur="2s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" attributeType="XML" type="translate" from="-${width}" to="${width * 2}" dur="2s" repeatCount="indefinite" />
    </circle>
    </svg>`;

    return 'data:image/svg+xml;base64,' + btoa(svg)
}

const photonConvert = (url: string, params = '') => {
    url = url.replace(/https:\/\//g, '')
    params = params !== '' ? '?' + params : params
    return 'https://i' + Math.floor(Math.random() * 3) + '.wp.com/' + url + params
}

/** generate canonical */
const canonicalGen = (route: Object) => {
    //@ts-ignore
    return route.path.endsWith("/") ? route.path: route.path + "/";
}
export default function(){
    return {
        placeHolder,
        photonConvert,
        canonicalGen
    }
}