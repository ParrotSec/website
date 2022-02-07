import { Grid, GridProps, Hidden, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import burpsuiteScreenshot from './assets/burpsuite.png'
import Ettercap from './assets/ettercap.svg'
import ettercapScreenshot from './assets/ettercapScreenshot.png'
import johnnyScreenshot from './assets/johnny.png'
import nmapScreenshot from './assets/nmap.png'
import Burp from './assets/tool-logo-burp 1.svg'
import John from './assets/tool-logo-john 1.svg'
import Metasploit from './assets/tool-logo-metasploit 1.svg'
import Nmap from './assets/tool-logo-nmap 1.svg'

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
  const screenshots = [ettercapScreenshot, johnnyScreenshot, burpsuiteScreenshot, nmapScreenshot]

  const icons = [
    <PIconLink
      key="burp"
      href="https://nest.parrotsec.org/packages/tools/burpsuite"
      Icon={Burp}
      large
    >
      <>
        <b>Burp Suite</b>
        <br />
        Burp Suite is a set of tools used for penetration testing of web applications. It is
        developed by the company named Portswigger, which is also the alias of its founder Dafydd
        Stuttard.
      </>
    </PIconLink>,
    <PIconLink key="john" href="https://nest.parrotsec.org/packages/tools/john" Icon={John} large>
      <>
        <b>John the Ripper</b>
        <br />
        John the Ripper is a fast password cracker, currently available for many flavors of Unix,
        macOS, Windows, DOS, BeOS, and OpenVMS (the latter requires a contributed patch). Its
        primary purpose is to detect weak Unix passwords.
      </>
    </PIconLink>,
    <PIconLink key="nmap" href="https://nest.parrotsec.org/packages/tools/nmap" Icon={Nmap}>
      <>
        <b>Nmap</b>
        <br />
        Nmap is an open source tool for network exploration and security auditing. It was designed
        to rapidly scan large networks, although it works fine against single hosts. Nmap uses raw
        IP packets in novel ways to determine what hosts are available on the network, what services
        those hosts are offering, what operating systems they are running, what type of packet
        filters/firewalls are in use, and dozens of other characteristics.
      </>
    </PIconLink>,
    <PIconLink
      key="metasploit"
      href="https://nest.parrotsec.org/packages/tools/metasploit-framework"
      Icon={Metasploit}
    >
      <>
        <b>Metasploit</b>
        <br />
        Metasploit is a tool for developing and executing exploit code against a remote target
        machine. Other important sub-projects include the Opcode Database, shellcode archive and
        related research.
      </>
    </PIconLink>,
    <PIconLink
      key="ettercap"
      href="https://nest.parrotsec.org/packages/tools/bettercap"
      Icon={Ettercap}
      large
    >
      <>
        <b>Ettercap</b>
        <br />
        Ettercap is a free and open source network security tool for man-in-the-middle attacks on
        LAN. It can be used for computer network protocol analysis and security auditing.
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
                  Download
                </PButton>
              </Grid>
              <Grid className={classes.responsiveJustify} container item xs={12} sm={6}>
                <PButton variant="outlined" to="/docs">
                  View Tools
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
