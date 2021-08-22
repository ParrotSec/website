import React from 'react'
import { Box, Grid, Link, makeStyles, Paper, Typography } from '@material-ui/core'
import logo from './assets/logo.svg'
import PButton from 'components/PButton'
import { Link as RouterLink } from '@reach/router'

const useStyles = makeStyles({
  root: {
    marginBottom: 77,
    marginTop: 154
  },
  grid: {
    paddingLeft: 16,
    paddingRight: 16
  },
  paper: {
    padding: 80,
    paddingBottom: 52
  },
  logoBlock: {
    paddingRight: 130
  },
  logoTitle: {
    marginTop: 26,
    fontSize: 24
  },
  logoSubTitle: {
    fontSize: 18
  },
  download: {
    marginTop: 35
  },
  title: {
    fontSize: 18,
    fontWeight: 700
  },
  link: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    color: 'rgba(255, 255, 255, 0.5)',
    textDecoration: 'none',
    transition: '.2s ease-in 0s',
    '&:hover': {
      textDecoration: 'none',
      color: '#05EEFF'
    },
    '&:focus': {
      textDecoration: 'none'
    }
  },
  footerText: {
    color: '#FFF',
    marginRight: 'auto'
  },
  footerLink: {
    color: '#FFF',
    fontSize: 14,
    textDecoration: 'none',
    transition: '.2s ease-in 0s',
    '&:hover': {
      textDecoration: 'none',
      color: '#05EEFF'
    },
    '&:focus': {
      textDecoration: 'none'
    }
  }
})

const Footer = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.root} container justifyContent="center">
      <Grid className={classes.grid} item xs={9}>
        <Paper className={classes.paper}>
          <Grid container direction="column">
            <Grid container>
              <Grid
                className={classes.logoBlock}
                item
                container
                xs={4}
                direction="column"
                alignItems="flex-start"
              >
                <img width={64} height={64} src={logo} alt="Parrot Logo" />
                <Typography className={classes.logoTitle} variant="h3" paragraph>
                  Parrot<span style={{ fontWeight: 300 }}>OS</span>
                </Typography>
                <Typography className={classes.logoSubTitle} variant="body1" paragraph>
                  A GNU/Linux distribution based on Debian and designed with Security and Privacy in
                  mind.
                </Typography>
                <PButton className={classes.download} variant="contained" gradient to="/download">
                  Download OS
                </PButton>
              </Grid>
              <Grid container item xs={2} direction="column" alignContent="flex-end">
                <Typography className={classes.title} variant="h6" paragraph>
                  Parrot OS Versions
                </Typography>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Home Edition
                </Link>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Security Edition
                </Link>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Cloud Edition
                </Link>
              </Grid>
              <Grid container item xs={2} direction="column" alignContent="flex-end">
                <Typography className={classes.title} variant="h6" paragraph>
                  Resources
                </Typography>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Documentation
                </Link>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Get Involved
                </Link>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Community
                </Link>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Blog
                </Link>
              </Grid>
              <Grid container item xs={2} direction="column" alignContent="flex-end">
                <Typography className={classes.title} variant="h6" paragraph>
                  About Parrot
                </Typography>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Team
                </Link>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Partners
                </Link>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Donate
                </Link>
              </Grid>
              <Grid container item xs={2} direction="column" alignContent="flex-end">
                <Typography className={classes.title} variant="h6" paragraph>
                  Social
                </Typography>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Facebook
                </Link>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Twitter
                </Link>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Instagram
                </Link>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Discord
                </Link>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Telegram
                </Link>
                <Link className={classes.link} component={RouterLink} to="/download/home">
                  Reddit
                </Link>
              </Grid>
              <Box display="flex" mt="131px" style={{ gap: 26 }} width="100%">
                <Typography className={classes.footerText} variant="body2">
                  © 2021 Parrot Security. All rights reserved.
                </Typography>
                <Link className={classes.footerLink} component={RouterLink} to="/download/home">
                  Legal Notice
                </Link>
                <Link className={classes.footerLink} component={RouterLink} to="/download/home">
                  Terms
                </Link>
                <Link className={classes.footerLink} component={RouterLink} to="/download/home">
                  Privacy
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Footer
