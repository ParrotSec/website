import { Brightness3, BrightnessHigh } from '@mui/icons-material'
import { Grid, Paper, Typography, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Logo from './assets/logo.svg'

import Link from 'components/NextLink'
import PButton from 'components/PButton'
import { useThemeSwitch } from 'containers/ThemeProvider'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 77,
    marginTop: 154
  },
  logo: {
    width: 64,
    height: 64
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
    fontWeight: 800
  },
  link: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    textDecoration: 'none',
    transition: '.2s ease-in 0s',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main
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
  },
  themeSwitcher: {
    fontSize: 12,
    minWidth: 'auto',
    padding: '3px 10px'
  }
}))

const Footer = () => {
  const classes = useStyles()
  const theme = useTheme()
  const { switchTheme } = useThemeSwitch()
  return (
    <Grid className={classes.root} container justifyContent="center" component="footer">
      <Grid item xs={12} md={9}>
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
              <Typography className={classes.logoSubTitle} variant="body1Semi" paragraph>
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
                <Link className={classes.link} color="textSecondary" href="/download?version=home">
                  Home Edition
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="/download?version=security"
                >
                  Security Edition
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download?version=cloud">
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
                <Link className={classes.link} color="textSecondary" href="/docs">
                  Documentation
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download/home">
                  Get Involved
                </Link>
                <Link className={classes.link} color="textSecondary" href="/community">
                  Community
                </Link>
                <Link className={classes.link} color="textSecondary" href="/blog">
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
                <Link className={classes.link} color="textSecondary" href="/team">
                  Team
                </Link>
                <Link className={classes.link} color="textSecondary" href="/partners">
                  Partners
                </Link>
                <Link className={classes.link} color="textSecondary" href="/donate">
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
                <Link className={classes.link} color="textSecondary" href="/download/home">
                  Facebook
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download/home">
                  Twitter
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download/home">
                  Instagram
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download/home">
                  Discord
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download/home">
                  Telegram
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download/home">
                  Reddit
                </Link>
              </Grid>
            </Grid>
            <Grid className={classes.copyrightSection} item xs={12}>
              <PButton
                className={classes.themeSwitcher}
                variant="contained"
                startIcon={
                  theme.palette.mode === 'dark' ? (
                    <Brightness3 fontSize="small" />
                  ) : (
                    <BrightnessHigh fontSize="small" />
                  )
                }
                onClick={() => switchTheme()}
                size="small"
              >
                {theme.palette.mode === 'dark' ? 'Dark' : 'Light'}
              </PButton>
            </Grid>
            <Grid container item xs={12} spacing={4}>
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
                  <Link className={classes.footerLink} color="textSecondary" href="/download/home">
                    <div>Legal Notice</div>
                  </Link>
                </Grid>
                <Grid item xs={12} lg>
                  <Link className={classes.footerLink} color="textSecondary" href="/warrant">
                    Warrant
                  </Link>
                </Grid>
                <Grid item xs={12} lg>
                  <Link className={classes.footerLink} color="textSecondary" href="/privacy">
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
