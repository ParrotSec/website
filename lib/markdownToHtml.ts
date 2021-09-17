import { unified } from 'unified'

import remarkRehype from 'remark-rehype'
import remarkParse from 'remark-parse'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'

import rehypeReact from 'rehype-react'
import rehypeHighlight from 'rehype-highlight'
import { createElement, ReactNode } from 'react'

export default async function markdownToHtml(markdown: string): Promise<ReactNode> {
  return (
    await unified()
      .use(remarkParse)
      .use(remarkSlug)
      .use(remarkToc)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeReact, { createElement })
      .process(markdown)
  ).result
}
