import React from 'react'
import { Grid, Link, makeStyles, Paper, Typography } from '@material-ui/core'
import Logo from './assets/logo.svg'
import PButton from 'components/PButton'
import { Link as RouterLink } from '@reach/router'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 77,
    marginTop: 154
  },
  logo: {
    width: 64,
    height: 64
  },
  grid: {
    paddingLeft: 16,
    paddingRight: 16
  },
  paper: {
    padding: 80,
    paddingBottom: 52,
    [theme.breakpoints.down('sm')]: {
      padding: 40
    }
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
    marginRight: 'auto'
  },
  footerLink: {
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
  },
  linksHolder: {
    [theme.breakpoints.down('md')]: {
      alignContent: 'flex-start'
    }
  },
  copyrightSection: {
    marginTop: 131,
    [theme.breakpoints.down('md')]: {
      marginTop: 50
    }
  },
  legalLinks: {
    [theme.breakpoints.up('lg')]: {
      textAlign: 'right'
    }
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.root} container justifyContent="center">
      <Grid className={classes.grid} item xs={12} md={9}>
        <Paper className={classes.paper} elevation={0}>
          <Grid container spacing={4}>
            <Grid
              className={classes.logoBlock}
              item
              container
              xs={12}
              lg={4}
              direction="column"
              alignItems="flex-start"
            >
              <Logo className={classes.logo} />
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
            <Grid container item xs={12} lg={8} spacing={4}>
              <Grid
                className={classes.linksHolder}
                container
                item
                xs={12}
                sm={6}
                lg={3}
                direction="column"
                alignContent="flex-end"
              >
                <Typography className={classes.title} variant="h6" paragraph>
                  Versions
                </Typography>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Home Edition
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Security Edition
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Cloud Edition
                </Link>
              </Grid>
              <Grid
                className={classes.linksHolder}
                container
                item
                xs={12}
                sm={6}
                lg={3}
                direction="column"
                alignContent="flex-end"
              >
                <Typography className={classes.title} variant="h6" paragraph>
                  Resources
                </Typography>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Documentation
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Get Involved
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Community
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Blog
                </Link>
              </Grid>
              <Grid
                className={classes.linksHolder}
                container
                item
                xs={12}
                sm={6}
                lg={3}
                direction="column"
                alignContent="flex-end"
              >
                <Typography className={classes.title} variant="h6" paragraph>
                  About Us
                </Typography>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Team
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Partners
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Donate
                </Link>
              </Grid>
              <Grid
                className={classes.linksHolder}
                container
                item
                xs={12}
                sm={6}
                lg={3}
                direction="column"
                alignContent="flex-end"
              >
                <Typography className={classes.title} variant="h6" paragraph>
                  Social
                </Typography>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Facebook
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Twitter
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Instagram
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Discord
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Telegram
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/download/home"
                >
                  Reddit
                </Link>
              </Grid>
            </Grid>
            <Grid className={classes.copyrightSection} container item xs={12} spacing={4}>
              <Grid item xs={12} lg={7}>
                <Typography className={classes.footerText} color="textSecondary" variant="body2">
                  © 2021 Parrot Security. All rights reserved.
                </Typography>
              </Grid>
              <Grid
                className={classes.legalLinks}
                container
                item
                xs={12}
                lg
                spacing={3}
                justifyContent="flex-end"
                alignItems="center"
              >
                <Grid item xs={12} lg>
                  <Link
                    className={classes.footerLink}
                    color="textSecondary"
                    component={RouterLink}
                    to="/download/home"
                  >
                    Legal Notice
                  </Link>
                </Grid>
                <Grid item xs={12} lg>
                  <Link
                    className={classes.footerLink}
                    color="textSecondary"
                    component={RouterLink}
                    to="/download/home"
                  >
                    Terms
                  </Link>
                </Grid>
                <Grid item xs={12} lg>
                  <Link
                    className={classes.footerLink}
                    color="textSecondary"
                    component={RouterLink}
                    to="/download/home"
                  >
                    Privacy
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Footer
