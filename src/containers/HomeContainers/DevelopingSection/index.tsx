import { Grid, Hidden, makeStyles, Paper, Typography } from '@material-ui/core'
import Burp from 'containers/HomeContainers/ToolsSection/assets/tool-logo-burp 1.svg'
import John from 'containers/HomeContainers/ToolsSection/assets/tool-logo-john 1.svg'
import Maltego from 'containers/HomeContainers/ToolsSection/assets/tool-logo-maltego 1.svg'
import Nmap from 'containers/HomeContainers/ToolsSection/assets/tool-logo-nmap 1.svg'
import Metasploit from 'containers/HomeContainers/ToolsSection/assets/tool-logo-metasploit 1.svg'
import Sqlmap from 'containers/HomeContainers/ToolsSection/assets/tool-logo-sqlmap 1.svg'
import PIconLink from 'components/PIconLink'
import Slider from 'components/Slider'
import cls from 'classnames'

const useStyles = makeStyles(theme => ({
  developerBlock: {
    marginTop: 115
  },
  papersBlock: {
    marginTop: 66
  },
  devPaper: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexFlow: 'column',
      paddingBottom: theme.spacing(8)
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(4)
    }
  },
  devToolsBlock: {
    paddingLeft: theme.spacing(8),
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      paddingBottom: theme.spacing(2)
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(4),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    }
  },
  compilePaper: {
    padding: `${theme.spacing(9)}px ${theme.spacing(8)}px`,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4)
    }
  },
  marginedSlider: {
    marginLeft: theme.spacing(2)
  },
  sliderBlock: {
    minWidth: 93,
    marginRight: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(4)
    }
  }
}))

const items = [
  <PIconLink
    key="develop-burp"
    href="https://nest.parrotsec.org/packages/tools/burpsuite"
    Icon={Burp}
  >
    <>
      <b>Burp Suite</b>
      <br />
      Burp Suite is a set of tools used for penetration testing of web applications. It is developed
      by the company named Portswigger, which is also the alias of its founder Dafydd Stuttard.
      BurpSuite aims to be an all in one set of tools and its capabilities can be enhanced by
      installing add-ons that are called BApps.
    </>
  </PIconLink>,
  <PIconLink key="develop-john" href="https://nest.parrotsec.org/packages/tools/john" Icon={John}>
    <>
      <b>John the Ripper</b>
      <br />
      John the Ripper is a fast password cracker, currently available for many flavors of Unix,
      macOS, Windows, DOS, BeOS, and OpenVMS (the latter requires a contributed patch). Its primary
      purpose is to detect weak Unix passwords. Besides several crypt(3) password hash types most
      commonly found on various Unix flavors, supported out of the box are Kerberos/AFS and Windows
      LM hashes, as well as DES-based tripcodes, plus hundreds of additional hashes and ciphers in
      "-jumbo" versions.
    </>
  </PIconLink>,
  <PIconLink key="develop-maltego" href="https://www.maltego.com/product-features/" Icon={Maltego}>
    <>
      <b>Maltego</b>
      <br />
      Maltego is an open source intelligence and graphical link analysis tool for gathering and
      connecting information for investigative tasks. Maltego is a Java application that runs on
      Windows, Mac and Linux. Maltego is used by a broad range of users, ranging from security
      professionals to forensic investigators, investigative journalists, and researchers.
    </>
  </PIconLink>,
  <PIconLink key="develop-nmap" href="https://nest.parrotsec.org/packages/tools/nmap" Icon={Nmap}>
    <>
      <b>Nmap</b>
      <br />
      Nmap is an open source tool for network exploration and security auditing. It was designed to
      rapidly scan large networks, although it works fine against single hosts. Nmap uses raw IP
      packets in novel ways to determine what hosts are available on the network, what services
      (application name and version) those hosts are offering, what operating systems (and OS
      versions) they are running, what type of packet filters/firewalls are in use, and dozens of
      other characteristics. While Nmap is commonly used for security audits, many systems and
      network administrators find it useful for routine tasks such as network inventory, managing
      service upgrade schedules, and monitoring host or service uptime.
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
  <PIconLink key="sqlmap" href="https://nest.parrotsec.org/packages/tools/sqlmap" Icon={Sqlmap}>
    <>
      <b>SQLMap</b>
      <br />
      SQLmap is an open source penetration testing tool that automates the process of detecting and
      exploiting SQL injection flaws and taking over of database servers. It comes with a powerful
      detection engine, many niche features for the ultimate penetration tester, and a broad range
      of switches including database fingerprinting, over data fetching from the database, accessing
      the underlying file system, and executing commands on the operating system via out-of-band
      connections.
    </>
  </PIconLink>
]

const DevelopingSection = () => {
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.developerBlock} container item xs={12} md={7}>
        <Typography variant="h1" align="center" paragraph>
          Parrot is developer friendly. Secure in a Linux Environment.
        </Typography>
        <Typography variant="subtitle2" align="center">
          Compilers, interpreters and intelligent editors. All you need to start programming comes
          out of the box, with the most secure Linux environment.
        </Typography>
      </Grid>
      <Grid className={classes.papersBlock} container item xs={12} md={9} spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.devPaper} elevation={0}>
            <div className={classes.devToolsBlock}>
              <Typography variant="h3" paragraph>
                Developer tools
              </Typography>
              <Typography variant="body1" paragraph>
                Our tools are designed to be compatible with as many devices as possible via
                containerization technologies like Docker or Podman.
              </Typography>
            </div>
            <Hidden lgUp>
              <Slider spacing={4}>{items}</Slider>
            </Hidden>
            <Hidden mdDown>
              <Slider
                className={cls(classes.sliderBlock, classes.marginedSlider)}
                spacing={4}
                orientation="vertical"
              >
                {items}
              </Slider>
              <Slider className={classes.sliderBlock} spacing={4} orientation="vertical" reversed>
                {items}
              </Slider>
            </Hidden>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.compilePaper} elevation={0}>
            <Typography variant="h3" paragraph>
              Compilers & interpreters
            </Typography>
            <Typography variant="body1">
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default DevelopingSection
