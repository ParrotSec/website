import { Grid, GridProps, Hidden, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import aircrackIcon from './assets/aircrack-logo.svg'
import aircrackScreenshot from './assets/aircrack-ng.png'
import anonsurfIcon from './assets/anonsurf-logo.svg'
import anonsurfScreenshot from './assets/anonsurf.png'
import bettercapIcon from './assets/bettercap-logo.svg'
import bettercapScreenshot from './assets/bettercap.png'
import rizincutterIcon from './assets/cutter-logo.svg'
import johnnyScreenshot from './assets/johnny.png'
import niktoIcon from './assets/nikto-logo.svg'
import niktoScreenshot from './assets/nikto.png'
import ophcrackScreenshot from './assets/ophcrack.png'
import rizincutterScreenshot from './assets/rizin-cutter.png'
import vscodiumScreenshot from './assets/vscodium.png'
import wiresharkIcon from './assets/wireshark-logo.svg'
import wiresharkScreenshot from './assets/wireshark.png'
import zaproxyIcon from './assets/zaproxy-logo.svg'
import zaproxyScreenshot from './assets/zaproxy.png'

import Carousel from 'components/Carousel'
import PButton from 'components/PButton'
import PIconLink from 'components/PIconLink'
import Slider from 'components/Slider'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 75,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 75
  },
  carouselImg: {
    display: 'block',
    margin: 'auto'
  },
  headerIcon: {
    fill: theme.palette.mode === 'light' ? '#FFFFFF' : '#06043E'
  },
  headerIconWrapper: {
    width: 64,
    height: 64,
    padding: 16,
    background: theme.palette.mode === 'light' ? '#03232E' : '#FFFFFF',
    borderRadius: 6,
    marginBottom: 20
  },
  bg: {
    height: 'auto',
    width: '100%',
    borderRadius: 6,
    boxShadow: '0px 14px 56px 21px rgba(0, 0, 0, 0.25)'
  },
  bgHolder: {
    width: 'calc(100% - 512px)',
    marginBottom: theme.spacing(6),
    '@media (max-width: 1600px)': {
      width: '75%'
    }
  },
  responsiveJustify: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  buttons: {
    marginTop: theme.spacing(1)
  },
  smMarquee: {
    minHeight: 93,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
}))

const ToolsSection = (rest: GridProps) => {
  const classes = useStyles()
  const screenshots = [
    anonsurfScreenshot,
    bettercapScreenshot,
    aircrackScreenshot,
    johnnyScreenshot,
    niktoScreenshot,
    ophcrackScreenshot,
    rizincutterScreenshot,
    vscodiumScreenshot,
    wiresharkScreenshot,
    zaproxyScreenshot
  ]

  const icons = [
    <PIconLink key="aircrack" Icon={aircrackIcon} large>
      <>
        <b>Aircrack</b>
        <br />
        Aircrack-ng is a complete suite of tools to assess WiFi network security.
      </>
    </PIconLink>,
    <PIconLink key="anonsurf" Icon={anonsurfIcon} large>
      <>
        <b>AnonSurf</b>
        <br />
        AnonSurf is Parrot&apos;s anonymous mode wrapper to force connections through Tor. It is
        written in Nim Language and uses GTK libraries so it can be used via a graphical interface
        (GUI) and a CommandLine Interface (CLI).
      </>
    </PIconLink>,
    <PIconLink key="bettercap" Icon={bettercapIcon} large>
      <>
        <b>Bettercap</b>
        <br />
        bettercap is a powerful, easily extensible and portable framework written in Go which aims
        to offer to security researchers, red teamers and reverse engineers an easy to use,
        all-in-one solution with all the features they might possibly need for performing
        reconnaissance and attacking WiFi networks, Bluetooth Low Energy devices, wireless HID
        devices and Ethernet networks.
      </>
    </PIconLink>,
    <PIconLink key="nikto" Icon={niktoIcon} large>
      <>
        <b>Nikto</b>
        <br />
        Nikto is an Open Source (GPL) web server scanner which performs comprehensive tests against
        web servers for multiple items, including over 6700 potentially dangerous files/programs,
        checks for outdated versions of over 1250 servers, and version specific problems on over 270
        servers. It also checks for server configuration items such as the presence of multiple
        index files, HTTP server options, and will attempt to identify installed web servers and
        software.
      </>
    </PIconLink>,
    <PIconLink key="rizin-cutter" Icon={rizincutterIcon} large>
      <>
        <b>Rizin Cutter</b>
        <br />
        Cutter is a free and open-source reverse engineering platform powered by rizin. It aims at
        being an advanced and customizable reverse engineering platform while keeping the user
        experience in mind. Cutter is created by reverse engineers for reverse engineers.
      </>
    </PIconLink>,
    <PIconLink key="wireshark" Icon={wiresharkIcon} large>
      <>
        <b>Wireshark</b>
        <br />
        Wireshark is the world’s foremost and widely-used network protocol analyzer. It lets you see
        what’s happening on your network at a microscopic level and is the de facto (and often de
        jure) standard across many commercial and non-profit enterprises, government agencies, and
        educational institutions.
      </>
    </PIconLink>,
    <PIconLink key="zaproxy" Icon={zaproxyIcon} large>
      <>
        <b>Zaproxy</b>
        <br />
        The OWASP Zed Attack Proxy (ZAP) is one of the world’s most popular free security tools and
        is actively maintained by a dedicated international team of volunteers. It can help you
        automatically find security vulnerabilities in your web applications while you are
        developing and testing your applications. It&apos;s also a great tool for experienced
        pentesters to use for manual security testing.
      </>
    </PIconLink>
  ]

  return (
    <>
      <Grid {...rest} container item xs={12} md={9}>
        <Paper className={classes.root} elevation={0}>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Typography variant="h3" align="center" paragraph>
              Tools for every operation
            </Typography>
            <Typography variant="subtitle2Semi" align="center" paragraph>
              Choose between 600+ tools for every kind of Red and Blue team operation.
            </Typography>
            <Typography mb={4} variant="subtitle2Semi" align="center" paragraph>
              Parrot Security provides a huge arsenal of tools, utilities and libraries that IT and
              security professionals can use to test and assess the security of their assets in a
              reliable, compliant and reproducible way. From information gathering to the final
              report. The Parrot system gets you covered with the most flexible environment.
            </Typography>
            {/*TODO: for futher animations need to apply box-shadow*/}
            <Hidden mdUp>
              <Slider className={classes.smMarquee} cloneFactor={2}>
                {icons}
              </Slider>
            </Hidden>
            <Hidden mdDown>
              <Grid container justifyContent="center">
                <Grid item xs={11}>
                  <Carousel>
                    {screenshots.map((image, i) => (
                      <img
                        className={classes.carouselImg}
                        src={image.src}
                        alt={`screenshot-${i}`}
                        key={`screenshot-${i}`}
                      />
                    ))}
                  </Carousel>
                </Grid>
              </Grid>
            </Hidden>
            <Typography mt={4} variant="h5" align="center">
              Explore over 600+ tools
            </Typography>
            <Grid className={classes.buttons} container item xs={12} spacing={4}>
              <Grid
                className={classes.responsiveJustify}
                container
                item
                xs={12}
                sm={6}
                justifyContent="flex-end"
              >
                <PButton variant="contained" to="/download" gradient>
                  Download ParrotOS 5.1
                </PButton>
              </Grid>
              <Grid className={classes.responsiveJustify} container item xs={12} sm={6}>
                <PButton variant="outlined" to="/docs">
                  Documentation
                </PButton>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  )
}

export default ToolsSection
