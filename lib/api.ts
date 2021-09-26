import fs from 'fs/promises'
import { join } from 'path'

import matter from 'gray-matter'

import { PostType } from '../src/types'

const postsDirectory = join(process.cwd(), 'posts')

export async function getPostSlugs() {
  return fs.readdir(postsDirectory)
}

export async function getPostBySlug(slug: string, fields: string[] = [], serializeDate = true) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = await fs.readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const fieldMap: {
    slug: string
    content: string
  } = {
    slug: realSlug,
    content
  }

  // Ensure only the minimal needed data is exposed
  const post = fields.reduce<{ date: Date | string } & Partial<Omit<PostType, 'date'>>>(
    (acc, field) => {
      acc[field as keyof PostType] = ['slug', 'content'].includes(field)
        ? fieldMap[field as keyof typeof fieldMap]
        : data[field] ?? null
      return acc
    },
    { date: new Date() }
  )
  if (serializeDate)
    post.date = (post.date as Date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  return post
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = await getPostSlugs()
  return (
    (await Promise.all(slugs.map(slug => getPostBySlug(slug, fields, false))))
      // sort blog by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
      .map(post => {
        post.date = (post.date as Date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
        return post
      }) as PostType[]
  )
}
