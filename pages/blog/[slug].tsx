import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { Box, Button, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import { PostType } from '../../types'
import { ReactNode, useEffect, useState } from 'react'
import RouterLink from 'next/link'
import Left from 'assets/Left.svg'

const useStyles = makeStyles(theme => ({
  heading: {
    marginBottom: theme.spacing(4)
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 6,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  arrow: {
    verticalAlign: 'middle',
    fill: theme.palette.text.secondary
  },
  crumb: {
    textTransform: 'none',
    color: theme.palette.text.secondary,
    opacity: 0.5
  },
  gridHr: {
    marginTop: theme.spacing(3)
  }
}))

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post /*, morePosts, preview*/ }: Props) => {
  const router = useRouter()
  const [Content, setContent] = useState<ReactNode>(null)
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  useEffect(() => {
    ;(async () => {
      setContent(await markdownToHtml(post.content ?? ''))
    })()
  }, [])
  const classes = useStyles()
  return router.isFallback ? (
    <>Loading</>
  ) : (
    <>
      <article>
        <Head>
          <title>{post.title}</title>
        </Head>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10}>
            <RouterLink href="/blog">
              <Button
                startIcon={<Left className={classes.arrow} fill="textSecondary" />}
                className={classes.crumb}
              >
                Back
              </Button>
            </RouterLink>
          </Grid>
          <Grid className={classes.gridHr} item xs={10}>
            <Divider variant="fullWidth" />
          </Grid>
        </Grid>
        <Grid
          className={classes.gridHr}
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Grid
            className={classes.heading}
            container
            item
            xs={12}
            md={6}
            justifyContent="center"
            direction="column"
          >
            <Typography variant="h2" component="h1" paragraph>
              {post.title}
            </Typography>
            {post.description && (
              <Typography variant="subtitle1" component="h2">
                {post.description}
              </Typography>
            )}
            <Box display="flex" justifyContent="space-between" marginTop={3}>
              <Typography variant="body1" color="primary" style={{ opacity: 1 }}>
                {post.author}
              </Typography>
              <Typography variant="body1">{post.date}</Typography>
            </Box>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <img className={classes.img} src={post.image} alt="Post image" />
          </Grid>
          <Grid item xs={12} md={6}>
            {Content}
          </Grid>
        </Grid>
      </article>
    </>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export function getStaticProps({ params }: Params) {
  return {
    props: {
      post: getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'image',
        'description'
      ])
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug
        }
      }
    }),
    fallback: false
  }
}
