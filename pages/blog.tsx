import { Grid, makeStyles, Typography } from '@material-ui/core'
import PostsSection from 'containers/BlogContainers/PostsSection'
import { getAllPosts } from '../lib/api'
import { PostType } from '../types'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  headingSubTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6.5)
  }
}))

type BlogProps = { allPosts: PostType[] }

const Blog = ({ allPosts }: BlogProps) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} justifyContent="center">
      <Grid
        item
        container
        xs={10}
        justifyContent="center"
        alignItems="center"
        direction="column"
        wrap="nowrap"
      >
        <Typography variant="h1" align="center" paragraph>
          Parrot OS Blog
        </Typography>
        <Typography className={classes.headingSubTitle} variant="subtitle2" align="center">
          Latest Posts
        </Typography>
      </Grid>
      <PostsSection allPosts={allPosts} />
    </Grid>
  )
}

export default Blog

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'author',
    'image',
    'description',
    'content',
    'slug'
  ])

  return {
    props: { allPosts }
  }
}
