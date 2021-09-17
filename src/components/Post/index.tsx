import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardProps,
  makeStyles,
  Typography
} from '@material-ui/core'
import { PostType } from '../../../types'
import PButton from 'components/PButton'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  media: {
    width: '100%',
    height: 'auto'
  }
}))

type PostProps = Omit<PostType, 'content'> & CardProps

const Post = ({ title, description, date, image, slug, author, ...rest }: PostProps) => {
  const classes = useStyles()
  return (
    <Card elevation={0} {...rest}>
      <CardMedia className={classes.media} component="img" alt="Post Image" image={image} />
      <div className={classes.root}>
        <CardContent>
          <Typography variant="h3" paragraph>
            {title}
          </Typography>
          {description && <Typography variant="body2">{description}</Typography>}
        </CardContent>
        <CardActions>
          <PButton variant="contained" to={`/posts/${slug}`}>
            Read More
          </PButton>
        </CardActions>
      </div>
    </Card>
  )
}

export default Post
