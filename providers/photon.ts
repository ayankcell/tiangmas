import { joinURL, cleanDoubleSlashes, withoutProtocol, parseURL, withQuery } from 'ufo'

// import {} from '#image'
//@ts-ignore
export function getImage(src, { modifiers, baseURL } = {}, { options, $img }) {
  // const { width, height, format, fit, quality, ...providerModifiers } = modifiers
  /** kalau local file, maka tambahkan hostname dari website ini */
  if (parseURL(src).host === undefined) {
    src = joinURL('tiangmas.staging.irit.link', src)
  } else {
    /** hapus  protocollnya */
    src = withoutProtocol(src)
  }
  /** mapping default modifiers */
  const operation = { width: 'w', height: 'h', fit: 'fit', quality: 'quality', format: 'format' }


  for (const modifier in modifiers) {
    /** rubah modifiernya */
    if (modifiers[modifier] !== undefined) {
      //@ts-ignore
      modifiers[operation[modifier]] = modifiers[modifier]
    }
    /** khusus format, hapus saja */
    if (modifier == 'format') {
      delete modifiers[modifier]
    }
    delete modifiers[modifier]
  }

  /** set base URL random URL from ix.wp.com */
  baseURL = 'https://i' + Math.floor(Math.random() * 3) + '.wp.com'

  return {
    /** bersihkan double slash, gabungkan baseURL & src, serta tambahkan querystring */
    url: cleanDoubleSlashes( withQuery( joinURL(baseURL, src), modifiers ))
  }
}