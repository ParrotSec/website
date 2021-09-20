import {
  makeStyles,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  GridProps
} from '@material-ui/core'
import cls from 'classnames'
import Email from './assets/Email.svg'
import Github from './assets/Github.svg'
import LinkedIn from './assets/LinkedIn.svg'
import Twitter from './assets/Twitter.svg'

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2)
  },
  bgColor: {
    backgroundColor: theme.palette.background.default
  },
  iconLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: theme.spacing(3)
  },
  nicknameTextColor: {
    color: '#05EEFF',
    opacity: 1
  },
  socials: {
    marginTop: theme.spacing(3)
  },
  icons: {
    display: 'block',
    margin: 'auto',
    fill: theme.palette.type === 'light' ? 'white' : 'inherit',
    '& #github': {
      stroke: theme.palette.type === 'light' ? '#06043E' : '#FFF',
      fill: theme.palette.type === 'light' ? '#06043E' : '#FFF'
    },
    '& #twitter': {
      stroke: theme.palette.type === 'light' ? '#06043E' : '#FFF',
      fill: theme.palette.type === 'light' ? '#06043E' : '#FFF'
    },
    '& #linkedin': {
      stroke: theme.palette.type === 'light' ? '#06043E' : '#FFF',
      fill: theme.palette.type === 'light' ? '#06043E' : '#FFF'
    },
    '& #email': {
      stroke: theme.palette.type === 'light' ? '#06043E' : '#FFF',
      fill: theme.palette.type === 'light' ? '#06043E' : '#FFF'
    }
  }
}))

type UserCardProps = {
  role: string
  noAvatar?: boolean
  nickname: string
  name?: string
  socials?: {
    github: string
    twitter: string
    linkedIn: string
    email: string
  }
  variant?: 'paper' | 'background'
} & GridProps

const UserCard = ({
  name,
  nickname,
  role,
  noAvatar = false,
  socials,
  variant = 'paper',
  ...props
}: UserCardProps) => {
  const classes = useStyles()

  return (
    <Grid {...props} item xs={12} md={4} justifyContent="center">
      <Card className={cls({ [classes.bgColor]: variant === 'background' })} elevation={0}>
        <CardContent className={classes.card}>
          {!noAvatar && (
            <Avatar className={classes.iconLarge} src={`/assets/avatars/${nickname}.jpg`} />
          )}
          <Typography variant="h5" paragraph={!nickname}>
            {name}
          </Typography>
          {nickname && (
            <Typography className={classes.nicknameTextColor} paragraph>
              {nickname}
            </Typography>
          )}
          <Typography variant="body1">{role}</Typography>
          {socials && (
            <Grid
              className={classes.socials}
              container
              direction="row"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <IconButton href={socials.github} size="small">
                  <Github className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Twitter href={socials.twitter} className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <LinkedIn href={socials.linkedIn} className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href={socials.email} size="small">
                  <Email className={classes.icons} />
                </IconButton>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default UserCard
