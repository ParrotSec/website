import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardProps,
  makeStyles,
  Typography
} from '@material-ui/core'
import { PostType } from '../../../types'
import RouterLink from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  media: {
    width: '100%',
    height: 'auto'
  },
  actionArea: {
    borderRadius: 24
  }
}))

type PostProps = Omit<PostType, 'content'> & CardProps

const Post = ({ title, description, date, image, slug, author, ...rest }: PostProps) => {
  const classes = useStyles()
  return (
    <Card elevation={0} {...rest}>
      <RouterLink href={`/blog/${slug}`}>
        <CardActionArea className={classes.actionArea}>
          <CardMedia className={classes.media} component="img" alt="Post Image" image={image} />
          <div className={classes.root}>
            <CardContent>
              <Typography variant="h3" paragraph>
                {title}
              </Typography>
              {description && (
                <Typography variant="body2" paragraph>
                  {description}
                </Typography>
              )}
              <Typography variant="body1" color="primary" style={{ opacity: 1 }}>
                {author}
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </RouterLink>
    </Card>
  )
}

export default Post
