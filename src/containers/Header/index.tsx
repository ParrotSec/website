import React from 'react'
import {
  AppBar,
  Collapse,
  Box,
  Grid,
  Link,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  useTheme
} from '@material-ui/core'
import { Menu as MenuIcon, BrightnessHigh, Brightness3 } from '@material-ui/icons'
import { Link as RouterLink } from '@reach/router'
import Logo from './assets/logo.svg'
import PButton from 'components/PButton'
import { useThemeSwitch } from 'containers/HomePageContainers/ThemeProvider'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '2rem',
    paddingBottom: '2rem'
  },
  logo: {
    width: 64,
    height: 64
  },
  logoHolder: {
    flex: 1
  },
  downloadButtonHolder: {
    flex: 1,
    justifyContent: 'flex-end',
    display: 'flex'
  },
  link: {
    padding: '0.5rem',
    textDecoration: 'none',
    transition: '.2s ease-in 0s',
    '&:hover': {
      textDecoration: 'none',
      color: '#05EEFF'
    },
    '&:focus': {
      textDecoration: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      paddingLeft: 0
    }
  },
  nav: {
    display: 'flex',
    flex: 1,
    gap: 41
  },
  menu: {
    color: theme.palette.type === 'dark' ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)'
  },
  register: {
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2)
    }
  },
  dropDown: {
    display: 'flex',
    flexFlow: 'column',
    padding: theme.spacing(2)
  },
  buttons: {
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(1)
    }
  },
  themeSwitcher: {
    fontSize: 12,
    minWidth: 'auto',
    padding: '3px 10px'
  }
}))

const Header = () => {
  const classes = useStyles()
  const [collapsed, setCollapsed] = React.useState(false)
  const toggleCollapse = () => setCollapsed(!collapsed)
  const theme = useTheme()
  const { switchTheme } = useThemeSwitch()

  return (
    <AppBar className={classes.root} color="transparent" position="static" elevation={0}>
      <Toolbar disableGutters>
        <Grid container justifyContent="center">
          <Grid
            container
            item
            xs={12}
            sm={8}
            lg={10}
            xl={12}
            alignItems="center"
            justifyContent="space-between"
          >
            <RouterLink className={classes.logoHolder} to="/">
              <Logo className={classes.logo} />
            </RouterLink>
            <Hidden lgUp>
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={toggleCollapse}
                style={{ marginLeft: 'auto' }}
              >
                <MenuIcon className={classes.menu} />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
              <nav className={classes.nav}>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/community"
                >
                  Community
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/docs"
                >
                  Documentation
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/blog"
                >
                  Blog
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/donate"
                >
                  Donate
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/swag"
                >
                  Swag
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/partners"
                >
                  Partners
                </Link>
              </nav>
              <div className={classes.downloadButtonHolder}>
                <PButton variant="contained" gradient to="/download">
                  Download OS
                </PButton>
              </div>
            </Hidden>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <PButton
              className={classes.themeSwitcher}
              variant="contained"
              startIcon={
                theme.palette.type === 'dark' ? (
                  <Brightness3 fontSize="small" />
                ) : (
                  <BrightnessHigh fontSize="small" />
                )
              }
              onClick={() => switchTheme()}
              size="small"
            >
              {theme.palette.type === 'dark' ? 'Dark' : 'Light'}
            </PButton>
          </Grid>
        </Grid>
      </Toolbar>
      <Hidden lgUp>
        <Collapse in={collapsed}>
          <Grid container justifyContent="center">
            <Grid item container xs={12} sm={8} lg={10} xl={12} alignItems="center">
              <Box className={classes.dropDown}>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/community"
                >
                  Community
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/docs"
                >
                  Documentation
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/blog"
                >
                  Blog
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/donate"
                >
                  Donate
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/swag"
                >
                  Swag
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/partners"
                >
                  Partners
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download"
                >
                  Download OS
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Collapse>
      </Hidden>
    </AppBar>
  )
}

export default Header
