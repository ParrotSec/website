import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import dynamic from 'next/dynamic'
import PostsSection from 'containers/BlogContainers/PostsSection'
import { getAllPosts } from '../lib/api'
import { PostType } from '../src/types'
import Wallpaper from 'assets/wallpaper.png'
const ContributeSection = dynamic(() => import('containers/HomeContainers/ContributeSection'))

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  wallpaper:
    theme.palette.mode === 'dark'
      ? {
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          opacity: 0.1,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #06043E), url('${Wallpaper.src}')`
        }
      : { display: 'none' },
  headingSubTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6.5)
  },
  contributeBlock: {
    marginTop: theme.spacing(13)
  }
}))

type BlogProps = { allPosts: PostType[]; featuredPosts: PostType[] }

const Blog = ({ allPosts }: BlogProps) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} justifyContent="center">
      <div className={classes.wallpaper} />
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
        <Typography className={classes.headingSubTitle} variant="subtitle2Semi" align="center">
          Latest Posts
        </Typography>
      </Grid>
      <PostsSection allPosts={allPosts} />
      <ContributeSection className={classes.contributeBlock} />
    </Grid>
  )
}

export default Blog

export const getStaticProps = async () => {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'author',
    'image',
    'description',
    'content',
    'slug'
  ])

  /* const featuredPosts = await Promise.all(
    ['parrot-4.11-release-notes.md', '2020-05-08-parrot-hackthebox.md'].map(slug =>
      getPostBySlug(slug, ['title', 'image', 'date', 'description'], true)
    )
  )*/

  return {
    props: { allPosts }
  }
}
