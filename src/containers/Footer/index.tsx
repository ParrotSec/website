import { Brightness3, BrightnessHigh } from '@mui/icons-material'
import { Box, Grid, Paper, Stack, Typography, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/system'
import cls from 'classnames'

import CarbonIcon from './assets/carbon.svg'
import Logo from './assets/logo.svg'
import WarrantCanary from './assets/warrant-canary.svg'

import Link from 'components/NextLink'
import PButton from 'components/PButton'
import PTooltip from 'components/Tooltip'
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
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4)
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
      color: theme.palette.primary.main
    },
    '&:focus': {
      textDecoration: 'none'
    }
  },
  linksHolder: {
    [theme.breakpoints.down('lg')]: {
      alignContent: 'flex-start'
    }
  },
  copyrightSection: {
    marginTop: 131,
    [theme.breakpoints.down('lg')]: {
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
  },
  carbonButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32A34A !important',
    color: '#fff !important',
    borderRadius: 85,
    fontWeight: 700
  },
  noMargin: {
    marginTop: '0 !important'
  },
  warrantIcon: {
    marginRight: theme.spacing(1)
  }
}))

const Carbon = styled(CarbonIcon)(({ theme }) => ({
  cursor: 'pointer',
  marginRight: theme.spacing(1)
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
                Parrot<span style={{ fontWeight: 300 }}>Sec</span>
              </Typography>
              <Typography className={classes.logoSubTitle} variant="body1Semi" paragraph>
                The ultimate framework for your Cyber Security operations
              </Typography>
              <PButton className={classes.download} variant="contained" gradient to="/download">
                Download
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
                  Editions
                </Typography>
                <Link className={classes.link} color="textSecondary" href="/download?version=home">
                  Home
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="/download?version=security"
                >
                  Security
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="/download?version=hackthebox"
                >
                  Hack The Box
                </Link>
                <Link className={classes.link} color="textSecondary" href="/download?version=cloud">
                  Cloud
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="/download?version=architect"
                >
                  Architect
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="/download?version=raspberry"
                >
                  Raspberry Pi Images
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
                <Link className={classes.link} color="textSecondary" href="/contribute">
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
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="https://www.facebook.com/ParrotSec/"
                >
                  Facebook
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="https://twitter.com/parrotsec"
                >
                  Twitter
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="https://www.instagram.com/parrotproject/"
                >
                  Instagram
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="https://discord.gg/j7QTaCzAsm"
                >
                  Discord
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="https://t.me/parrotsecgroup"
                >
                  Telegram
                </Link>
                {/*
                <Link className={classes.link} color="textSecondary" href="/download/home">
                  Reddit
                </Link>
                */}
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="https://www.linkedin.com/company/parrotsec/about/"
                >
                  LinkedIn
                </Link>
              </Grid>
            </Grid>
            <Grid className={classes.copyrightSection} item xs={12}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 2, sm: 10, lg: 20 }}
                justifyContent="center"
                alignItems="center"
              >
                <Stack direction="row" spacing={2}>
                  <PTooltip
                    placement="top"
                    title={
                      <Box width={230}>
                        <b>We are carbon free!</b>
                        <br />
                        our servers are hosted on carbon neutral datacenters powered by renewable
                        sources, and we compensate any extra emissions by planting trees!
                      </Box>
                    }
                  >
                    <div className={cls(classes.themeSwitcher, classes.carbonButton)}>
                      <Carbon width={21} height={21} />
                      Carbon Neutral
                    </div>
                  </PTooltip>
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
                </Stack>
                <Typography className={classes.footerText} color="textSecondary" variant="body2">
                  © 2022 Parrot Security. All rights reserved.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Link className={classes.footerLink} color="textSecondary" href="/warrant">
                    <Stack direction="row">
                      <WarrantCanary className={classes.warrantIcon} width={21} height={21} />
                      Warrant Canary
                    </Stack>
                  </Link>
                  <Link className={classes.footerLink} color="textSecondary" href="/privacy">
                    Privacy Policy
                  </Link>
                </Stack>
              </Stack>
            </Grid>
            {/*
              <Grid className={classes.noMargin} container item xs={12} spacing={4}>
                <Grid item xs={12} lg={7}>
                  <Typography className={classes.footerText} color="textSecondary" variant="body2">
                    © 2022 Parrot Security. All rights reserved.
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
                  <Grid item xs={12} lg={6}>
                    <Link className={classes.footerLink} color="textSecondary" href="/warrant">
                      <Stack direction="row">
                        <WarrantCanary className={classes.warrantIcon} width={21} height={21} />
                        Warrant Canary
                      </Stack>
                    </Link>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Link className={classes.footerLink} color="textSecondary" href="/privacy">
                      Privacy Policy
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              */}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Footer
