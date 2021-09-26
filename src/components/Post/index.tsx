import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardProps,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import RouterLink from 'next/link'

import { PostType } from '../../types'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    padding: theme.spacing(2)
  },
  media: {
    width: '100%',
    height: 'auto'
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100%',
    borderRadius: 24
  }
}))

type PostProps = Omit<PostType, 'content'> & CardProps

const Post = ({ title, description, date, image, slug, author, ...rest }: PostProps) => {
  const classes = useStyles()
  return (
    <Card className={classes.root} elevation={0} {...rest}>
      <RouterLink href={`/blog/${slug}`}>
        <CardActionArea className={classes.actionArea}>
          <CardMedia className={classes.media} component="img" alt="Post Image" image={image} />
          <CardContent className={classes.content}>
            <Typography variant="h5" paragraph>
              {title}
            </Typography>
            {description && (
              <Typography variant="body2" paragraph>
                {description}
              </Typography>
            )}
            <Box display="flex" alignItems="center" justifyContent="space-between" marginTop="auto">
              <Box display="flex" alignItems="center" style={{ gap: 8 }}>
                <Avatar src={`/assets/avatars/${author}.jpg`} />
                <Typography variant="body1" color="primary" style={{ opacity: 1 }}>
                  {author}
                </Typography>
              </Box>
              <Typography variant="body1">{date}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </RouterLink>
    </Card>
  )
}

export default Post
