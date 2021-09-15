import { Grid, makeStyles, Paper, Typography, useTheme } from '@material-ui/core'
import Link from 'components/NextLink'
import Logo from './assets/logo.svg'
import PButton from 'components/PButton'
import { Brightness3, BrightnessHigh } from '@material-ui/icons'
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
              <PButton className={classes.download} variant="contained" gradient href="/download">
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
                <Link className={classes.link} color="textSecondary" href="/download">
                  Home Edition
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download">
                  Security Edition
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download">
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
                <Link className={classes.link} color="textSecondary" href="/download/home">
                  Documentation
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download/home">
                  Get Involved
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download/home">
                  Community
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download/home">
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
                <Link className={classes.link} color="textSecondary" href="/download/home">
                  Team
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download/home">
                  Partners
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download/home">
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
                  <Link className={classes.footerLink} color="textSecondary" href="/download/home">
                    Terms
                  </Link>
                </Grid>
                <Grid item xs={12} lg>
                  <Link className={classes.footerLink} color="textSecondary" href="/download/home">
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
