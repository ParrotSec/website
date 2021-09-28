import { Grid, GridProps } from '@mui/material'
import { useMemo } from 'react'

import { PostType } from '../../../types'

import Post from 'components/Post'
import NewsletterSection from 'containers/HomeContainers/NewsletterSection'

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
  return (
    <Grid container item xs={12} md={9} spacing={4} {...rest} justifyContent="center">
      {allPostsRendered.slice(0, 6)}
      <NewsletterSection md={12} />
      {allPostsRendered.slice(6)}
    </Grid>
  )
}

export default PostsSection
