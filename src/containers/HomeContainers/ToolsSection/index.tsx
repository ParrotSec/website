import { Box, Grid, GridProps, Hidden, makeStyles, Paper, Typography } from '@material-ui/core'
import Tools from './assets/tools.svg'
import parrotBg from './assets/shellBg.png'
import screenshot from './assets/screenshot.png'
import PButton from 'components/PButton'
import Burp from './assets/tool-logo-burp 1.svg'
import John from './assets/tool-logo-john 1.svg'
import Maltego from './assets/tool-logo-maltego 1.svg'
import Nmap from './assets/tool-logo-nmap 1.svg'
import Sqlmap from './assets/tool-logo-sqlmap 1.svg'
import Metasploit from './assets/tool-logo-metasploit 1.svg'
import { useMeasure } from 'react-use'
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
  headerIcon: {
    fill: theme.palette.type === 'light' ? '#FFFFFF' : '#06043E'
  },
  headerIconWrapper: {
    width: 64,
    height: 64,
    padding: 16,
    background: theme.palette.type === 'light' ? '#03232E' : '#FFFFFF',
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
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  buttons: {
    marginTop: theme.spacing(4)
  },
  smMarquee: {
    minHeight: 93,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  paperPadding: {
    padding: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4)
    }
  }
}))

const ToolsSection = (rest: GridProps) => {
  const classes = useStyles()
  const [ref, { width, height }] = useMeasure<HTMLImageElement>()

  const icons = (absolute: boolean) => [
    <PIconLink
      key="burp"
      href="https://nest.parrotsec.org/packages/tools/burpsuite"
      Icon={Burp}
      large
      style={
        absolute
          ? {
              position: 'absolute',
              top: -24,
              left: 0.922 * width
            }
          : {}
      }
    >
      <>
        <b>Burp Suite</b>
        <br />
        Burp Suite is a set of tools used for penetration testing of web applications. It is
        developed by the company named Portswigger, which is also the alias of its founder Dafydd
        Stuttard.
      </>
    </PIconLink>,
    <PIconLink
      key="john"
      href="https://nest.parrotsec.org/packages/tools/john"
      Icon={John}
      large
      style={
        absolute
          ? {
              position: 'absolute',
              top: 0.902 * height,
              left: 0.045 * width
            }
          : {}
      }
    >
      <>
        <b>John the Ripper</b>
        <br />
        John the Ripper is a fast password cracker, currently available for many flavors of Unix,
        macOS, Windows, DOS, BeOS, and OpenVMS (the latter requires a contributed patch). Its
        primary purpose is to detect weak Unix passwords.
      </>
    </PIconLink>,
    <PIconLink
      key="maltego"
      href="https://www.maltego.com/product-features/"
      Icon={Maltego}
      large
      style={
        absolute
          ? {
              position: 'absolute',
              left: 0.958 * width,
              top: 0.595 * height
            }
          : {}
      }
    >
      <>
        <b>Maltego</b>
        <br />
        Maltego is an open source intelligence and graphical link analysis tool for gathering and
        connecting information for investigative tasks. Maltego is a Java application that runs on
        Windows, Mac and Linux.
      </>
    </PIconLink>,
    <PIconLink
      key="nmap"
      href="https://nest.parrotsec.org/packages/tools/nmap"
      Icon={Nmap}
      style={
        absolute
          ? {
              position: 'absolute',
              top: 0.518 * height,
              left: -0.14 * width
            }
          : {}
      }
    >
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
      style={
        absolute
          ? {
              position: 'absolute',
              top: 0.23 * height,
              left: 1.111 * width
            }
          : {}
      }
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
      key="sqlmap"
      href="https://nest.parrotsec.org/packages/tools/sqlmap"
      Icon={Sqlmap}
      large
      style={
        absolute
          ? {
              position: 'absolute',
              top: 0.2 * height,
              left: -42
            }
          : {}
      }
    >
      <>
        <b>SQLMap</b>
        <br />
        SQLmap is an open source penetration testing tool that automates the process of detecting
        and exploiting SQL injection flaws and taking over of database servers. It comes with a
        powerful detection engine, many niche features for the ultimate penetration tester, and a
        broad range of switches including database fingerprinting, over data fetching from the
        database, accessing the underlying file system, and executing commands on the operating
        system via out-of-band connections.
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
            <div className={classes.headerIconWrapper}>
              <Tools className={classes.headerIcon} />
            </div>
            <Typography variant="h2" align="center" paragraph>
              Tools for every occasion
            </Typography>
            <Typography variant="subtitle2" align="center" paragraph>
              Choose between 600+ tools for all your hacking needs
            </Typography>
            {/*TODO: for futher animations need to apply box-shadow*/}
            <Hidden smDown>
              <Box position="relative" width={width} marginTop="46px">
                {icons(true)}
              </Box>
            </Hidden>
            <Hidden mdUp>
              <Slider className={classes.smMarquee}>{icons(false)}</Slider>
            </Hidden>
            <Hidden smDown>
              <div className={classes.bgHolder}>
                <img ref={ref} className={classes.bg} src={parrotBg.src} alt="Parrot BG" />
              </div>
            </Hidden>
            <Typography variant="h3" align="center">
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
                  Download OS
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
      <Grid container spacing={4} item xs={12} md={9} style={{ marginTop: 32 }}>
        <Grid container item xs={12} md={6}>
          <Paper elevation={0}>
            <Box display="flex" justifyContent="space-between" flexDirection="column" height="100%">
              <div className={classes.paperPadding}>
                <Typography variant="h3" paragraph>
                  Hacking tools at your fingertips
                </Typography>
                <Typography variant="body1">
                  When it comes to general tools and functional features, Parrot OS wins over Kali
                  Linux. Parrot OS has all the tools that are available in Kali Linux and also adds
                  its own tools. There are several tools you will find on ParrotOS that is not found
                  on Kali Linux.
                </Typography>
              </div>
              <img
                src={screenshot.src}
                style={{ display: 'block', marginLeft: 'auto', maxWidth: '90%' }}
                alt="Parrot Tools"
              />
            </Box>
          </Paper>
        </Grid>
        <Grid container item xs={12} md={6}>
          <Paper elevation={0}>
            <Box display="flex" justifyContent="space-between" flexDirection="column" height="100%">
              <div className={classes.paperPadding}>
                <Typography variant="h3" paragraph>
                  This block should be replaced
                </Typography>
                <Typography variant="body1">
                  When it comes to general tools and functional features, Parrot OS wins over Kali
                  Linux. Parrot OS has all the tools that are available in Kali Linux and also adds
                  its own tools. There are several tools you will find on ParrotOS that is not found
                  on Kali Linux.
                </Typography>
              </div>
              <img
                src={screenshot.src}
                style={{ display: 'block', marginLeft: 'auto', maxWidth: '90%' }}
                alt="Parrot Tools"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default ToolsSection
