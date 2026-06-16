import { error } from '@sveltejs/kit'
import { getPost } from '$lib/server/posts'
import { getBlogNameById } from '$lib/blog'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const slug = `/${params.category}/${params.slug}`
  const result = await getPost(slug)

  if (!result) {
    error(404, 'Not found')
  }

  const { post, previousSlug, nextSlug } = result

  return {
    post,
    categoryName: getBlogNameById(post.category),
    previousSlug: previousSlug ?? null,
    nextSlug: nextSlug ?? null
  }
}
