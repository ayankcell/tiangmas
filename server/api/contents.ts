import { serverQueryContent } from '#content/server'

export default defineEventHandler(async(event)=>{
    const docs = await serverQueryContent(event).only(['_path']).find()

    /** change path prefix for /page/ to /p/ */
    const p = docs.map((item)=> item._path.includes('/page') ? { "_path": item._path.replace('/page','/p')} : item )

    return p
})