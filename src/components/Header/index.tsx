import React from 'react'
import {
  AppBar,
  Collapse,
  Container,
  Box,
  Divider,
  Grid,
  Link,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { Link as RouterLink } from '@reach/router'
import logo from './assets/logo.svg'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 1140
  },
  appBar: {
    backgroundColor: '#1d2024'
  },
  link: {
    padding: '0.5rem',
    color: 'rgba(255,255,255,.5)',
    textDecoration: 'none',
    transition: '.2s ease-in 0s',
    '&:hover': {
      textDecoration: 'none',
      color: 'rgba(255,255,255,.75)'
    },
    '&:focus': {
      textDecoration: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      paddingLeft: 0
    }
  },
  nav: {
    marginLeft: 'auto'
  },
  menu: {
    color: 'rgba(255,255,255,.5)',
    width: '2em',
    height: '2em'
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
  }
}))

const Header = () => {
  const classes = useStyles()
  const [collapsed, setCollapsed] = React.useState(false)
  const toggleCollapse = () => setCollapsed(!collapsed)

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar disableGutters>
        <Container className={classes.container}>
          <Grid container xs={12} sm={8} lg={10} xl={12} alignItems="center">
            <img src={logo} alt="Logo" />
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
                <Link className={classes.link} component={RouterLink} to="/download">
                  Download
                </Link>
                <Link className={classes.link} component={RouterLink} to="/community">
                  Community
                </Link>
                <Link className={classes.link} component={RouterLink} to="/blog">
                  Blog
                </Link>
                <Link className={classes.link} component={RouterLink} to="/docs">
                  Documentation
                </Link>
                <Link className={classes.link} component={RouterLink} to="/contribute">
                  Get Involved
                </Link>
                <Link className={classes.link} component={RouterLink} to="/team">
                  Team
                </Link>
                <Link className={classes.link} component={RouterLink} to="/donate">
                  Donations & Gadgets
                </Link>
                <Link className={classes.link} component={RouterLink} to="/partners">
                  Partners
                </Link>
              </nav>
            </Hidden>
          </Grid>
        </Container>
      </Toolbar>
      <Divider />
      <Hidden lgUp>
        <Collapse in={collapsed}>
          <Grid container justifyContent="center">
            <Grid item container xs={12} sm={8} lg={10} xl={12} alignItems="center">
              <Box className={classes.dropDown}>
                <Link className={classes.link} component={RouterLink} to="/download">
                  Download
                </Link>
                <Link className={classes.link} component={RouterLink} to="/community">
                  Community
                </Link>
                <Link className={classes.link} component={RouterLink} to="/blog">
                  Blog
                </Link>
                <Link className={classes.link} component={RouterLink} to="/docs">
                  Documentation
                </Link>
                <Link className={classes.link} component={RouterLink} to="/contribute">
                  Get Involved
                </Link>
                <Link className={classes.link} component={RouterLink} to="/team">
                  Team
                </Link>
                <Link className={classes.link} component={RouterLink} to="/donate">
                  Donations & Gadgets
                </Link>
                <Link className={classes.link} component={RouterLink} to="/partners">
                  Partners
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
