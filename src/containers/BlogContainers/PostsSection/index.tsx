import { Grid, GridProps } from '@material-ui/core'
import { PostType } from '../../../../types'
import Post from 'components/Post'

type PostSectionProps = {
  allPosts: PostType[]
} & GridProps

const PostsSection = ({ allPosts, ...rest }: PostSectionProps) => (
  <Grid container item xs={12} md={9} spacing={4} {...rest} justifyContent="center">
    {allPosts.map((post, i) => (
      <Grid key={`grid-${i}`} item xs={4}>
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
    ))}
  </Grid>
)

export default PostsSection
