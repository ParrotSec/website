import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { PostType } from '../types'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = [], serializeDate = true) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
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
  if (serializeDate) post.date = post.date.toLocaleString('en-US')
  return post
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  return (
    slugs
      .map(slug => getPostBySlug(slug, fields, false))
      // sort blog by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
      .map(post => {
        post.date = post.date.toLocaleString('en-US')
        return post
      }) as PostType[]
  )
}
