export default defineEventHandler(async () => {
    const [
      contents,
    ] = await Promise.all([
      $fetch('/api/contents')
    ])
    
    return [...contents].map((p) => {
      //@ts-ignore
      return { loc: p._path }
    })

  })
  