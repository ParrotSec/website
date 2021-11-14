import {
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  GridProps,
  Link
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import cls from 'classnames'

import Email from './assets/Email.svg'
import Github from './assets/Github.svg'
import LinkedIn from './assets/LinkedIn.svg'
import Twitter from './assets/Twitter.svg'

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(4)
  },
  bgColor: {
    backgroundColor: theme.palette.background.default
  },
  size: {
    height: '100%'
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
    fill: theme.palette.mode === 'light' ? 'white' : 'inherit',
    '& #github': {
      stroke: theme.palette.mode === 'light' ? '#06043E' : '#FFF',
      fill: theme.palette.mode === 'light' ? '#06043E' : '#FFF'
    },
    '& #twitter': {
      stroke: theme.palette.mode === 'light' ? '#06043E' : '#FFF',
      fill: theme.palette.mode === 'light' ? '#06043E' : '#FFF'
    },
    '& #linkedin': {
      stroke: theme.palette.mode === 'light' ? '#06043E' : '#FFF',
      fill: theme.palette.mode === 'light' ? '#06043E' : '#FFF'
    },
    '& #email': {
      stroke: theme.palette.mode === 'light' ? '#06043E' : '#FFF',
      fill: theme.palette.mode === 'light' ? '#06043E' : '#FFF'
    }
  }
}))

type UserCardProps = {
  role: string
  noAvatar?: boolean
  nickname?: string
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
      <Card
        className={cls({ [classes.bgColor]: variant === 'background' }, classes.size)}
        elevation={0}
      >
        <CardContent className={classes.card}>
          {!noAvatar && (
            <Avatar className={classes.iconLarge} src={`/assets/avatars/${nickname}.jpg`} />
          )}
          {name && (
            <Typography variant="h5" paragraph={!nickname}>
              {name}
            </Typography>
          )}
          {nickname && (
            <Typography className={classes.nicknameTextColor} paragraph>
              {nickname}
            </Typography>
          )}
          <Typography variant="body1Semi">{role}</Typography>
          {socials && (
            <Grid
              className={classes.socials}
              container
              direction="row"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Link href={socials.github}>
                  <IconButton size="small">
                    <Github className={classes.icons} />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link href={socials.twitter}>
                  <IconButton size="small">
                    <Twitter className={classes.icons} />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link href={socials.linkedIn}>
                  <IconButton size="small">
                    <LinkedIn className={classes.icons} />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link href={socials.email}>
                  <IconButton size="small">
                    <Email className={classes.icons} />
                  </IconButton>
                </Link>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default UserCard
