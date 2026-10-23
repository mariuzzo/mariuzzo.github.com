import { listPosts } from '#lib/server/posts.js'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
  return { posts: listPosts('code') }
}
