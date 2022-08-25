import { Grid, GridProps, Pagination } from '@mui/material'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'

import { PostType } from '../../../types'

import Post from 'components/Post'
/*
import NewsletterSection from 'containers/HomeContainers/NewsletterSection'
*/

type PostSectionProps = {
  allPosts: PostType[]
} & GridProps

const PostsSection = ({ allPosts, ...rest }: PostSectionProps) => {
  const allPostsRendered = useMemo(
    () =>
      allPosts.map((post, i) => (
        <Grid key={`grid-${i}`} item xs={12} md={6} lg={4}>
          <Post
            key={`post-${i}`}
            description={post.description}
            title={post.title}
            author={post.author}
            date={post.date}
            image={post.image}
            slug={post.slug}
          />
        </Grid>
      )),
    [allPosts]
  )

  const router = useRouter()

  const [page, setPage] = useState(1)
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    router.push(`/blog/?page=${value}`, undefined, { shallow: true })
  }

  const contentPerPage = 6
  const lastIndex = page * contentPerPage
  const firstIndex = lastIndex - contentPerPage
  const count = Math.ceil(allPosts.length / contentPerPage)

  return (
    <Grid container item xs={12} md={9} spacing={4} {...rest} justifyContent="center">
      {/*
      {allPostsRendered.slice(0, 6)}
      <NewsletterSection md={12} />
      */}
      {allPostsRendered.slice(firstIndex, lastIndex)}
      <Grid container item xs={12} md={9} justifyContent="center">
        <Pagination count={count} page={page} size="large" onChange={handleChange} />
      </Grid>
    </Grid>
  )
}

export default PostsSection
