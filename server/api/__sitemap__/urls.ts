import { defineEventHandler } from 'h3'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { serverQueryContent } from '#content/server'
import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async (e) => {
  const contentList = (await serverQueryContent(e).where({_extension:{$ne: 'yml'}}).find()) as ParsedContent[]

  const p = contentList.map((item)=> item._path.includes('/page') ? { "_path": item._path.replace('/page','/p')} : item )

  return p
    // .filter(c => c._path.startsWith('read'))
    .map((c) => {
      return asSitemapUrl({
        loc: c._path,
        lastmod: c.date
      })
    })
})
