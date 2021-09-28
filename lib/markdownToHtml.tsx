/* eslint-disable react/display-name */
import { Link, Typography } from '@mui/material'
import { createElement, HTMLProps, ReactNode } from 'react'
import rehypeHighlight from 'rehype-highlight'
import rehypeReact from 'rehype-react'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import { unified } from 'unified'

export default async function markdownToHtml(markdown: string): Promise<ReactNode> {
  return (
    await unified()
      .use(remarkParse)
      .use(remarkSlug)
      .use(remarkToc)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeReact, {
        createElement,
        components: {
          a: ({ children, href }: HTMLProps<HTMLAnchorElement>) => (
            <Link href={href}>{children}</Link>
          ),
          p: ({ children }: HTMLProps<HTMLParagraphElement>) => (
            <Typography variant="body1" style={{ opacity: 1, paddingTop: 20, paddingBottom: 20 }}>
              {children}
            </Typography>
          ),
          h1: ({ children }: HTMLProps<HTMLHeadingElement>) => (
            <Typography variant="h3" paragraph>
              {children}
            </Typography>
          ),
          h2: ({ children }: HTMLProps<HTMLHeadingElement>) => (
            <Typography variant="h4" paragraph>
              {children}
            </Typography>
          ),
          h3: ({ children }: HTMLProps<HTMLHeadingElement>) => (
            <Typography variant="h5" paragraph>
              {children}
            </Typography>
          ),
          h4: ({ children }: HTMLProps<HTMLHeadingElement>) => (
            <Typography variant="h6" paragraph>
              {children}
            </Typography>
          ),
          h5: ({ children }: HTMLProps<HTMLHeadingElement>) => (
            <Typography variant="h6" paragraph>
              {children}
            </Typography>
          ),
          h6: ({ children }: HTMLProps<HTMLHeadingElement>) => (
            <Typography variant="h6" paragraph>
              {children}
            </Typography>
          )
        }
      })
      .process(markdown)
  ).result
}
