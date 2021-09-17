import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import { PostType } from '../../types'
import { ReactNode, useEffect, useState } from 'react'

const useStyles = makeStyles({
  img: {
    width: 300,
    height: 300,
    borderRadius: 6
  }
})

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
  return (
    <Container>
      {router.isFallback ? (
        <>Loading</>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title}</title>
            </Head>
            <Grid container justifyContent="center" direction="column">
              <Grid container item xs={12} justifyContent="center">
                <img className={classes.img} src={post.image} alt="Post image" />
              </Grid>
              <Grid container item xs={12} justifyContent="center" direction="column">
                <Typography variant="h1" align="center">
                  {post.title}
                </Typography>
                <Typography variant="h3" color="primary" align="center">
                  {post.author}
                </Typography>
                <Typography variant="subtitle2" align="center">
                  {post.date}
                </Typography>
              </Grid>
              {Content}
            </Grid>
          </article>
        </>
      )}
    </Container>
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
