import { serverQueryContent } from '#content/server'

export default defineEventHandler(async(event)=>{
    const docs = await serverQueryContent(event).only(['_path']).where({_extension:{$ne: 'yml'}}).find()

    /** change path prefix for /page/ to /p/ */
    const p = docs.map((item)=> item._path.includes('/page') ? { "_path": item._path.replace('/page','/p')} : item )

    // return p.filter((e)=>{return e._path.includes('/x/') == false})
    return p
})