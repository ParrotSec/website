import { Grid, Paper, Typography, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'

// import DESection from 'containers/DownloadContainers/DESection'

const useStyles = makeStyles(theme => ({
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  },
  PwnboxTitle: {
    width: '100%',
    marginTop: theme.spacing(8),
    padding: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4)
    }
  },
  gridHrMarginTop: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  subtitleMargined: {
    marginBottom: theme.spacing(4)
  },
  subBlockHeading: {
    fontFamily: 'museo-sans',
    fontWeight: 900
  }
}))

const OSPwnbox = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container justifyContent="center">
        <Paper className={classes.PwnboxTitle} elevation={0}>
          <Typography variant="h4" paragraph>
            Hack The Box Edition
          </Typography>
          <Typography variant="subtitle2Semi" paragraph>
            Unleash the full power of your Pwnbox, a customized hacking cloud box based on ParrotOS,
            on your computer or try it at{' '}
            <Link href="https://academy.hackthebox.com" underline="none">
              Hack The Box Academy
            </Link>
            .
          </Typography>
          <Typography variant="h3" paragraph align="center" sx={{ marginY: 10 }}>
            Coming Soon!
          </Typography>
          <Grid container>
            <Grid item xs={12} container spacing={4} style={{ paddingTop: 30 }}>
              <Grid item xs={12} sm={4}>
                <Typography variant="body1" paragraph>
                  Pentest-ready platform
                </Typography>
                <Typography variant="body2Semi">
                  All the hacking tools pre-installed. ParrotOS Security Edition customized with HTB
                  themes.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body1" paragraph>
                  Beginners in Cyber Security
                </Typography>
                <Typography variant="body2Semi">
                  If you don’t know which tools you need yet or how to set up a hacking VM/OS, this
                  is the answer on how to start your hacking journey.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body1" paragraph>
                  Slow device/laptop or with low capabilities
                </Typography>
                <Typography variant="body2Semi">
                  Your PC doesn’t have the capabilities to run a hacking VM or is broken? Pwnbox to
                  the rescue!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        {/*<DESection
          className={classes.desktopEnvironment}
          name="Hack The Box Edition"
          description={
            <>
              Unleash the full power of your Pwnbox, a customized hacking cloud box based on
              ParrotOS, on your computer or try it online at Hack The Box Academy.
            </>
          }
          version="5.1 Electro Ara"
          releaseDate="Sept 23, 2022"
          architecture="amd64"
          size="2.2 GB"
          download="Download"
          url="https://download.parrot.sh/parrot/iso/5.1/Parrot-htb-5.1_amd64.iso"
          torrentUrl="https://download.parrot.sh/parrot/iso/5.1/Parrot-htb-5.1_amd64.iso.torrent"
          torrentButton="Download Torrent"
          screenshots={[]}
          requirements={[
            { heading: 'Processor', description: 'Dual Core CPU' },
            { heading: 'Graphics', description: 'No Graphical Acceleration Required' },
            { heading: 'Memory', description: '1 GB RAM' },
            { heading: 'Storage', description: '16 GB available space' }
          ]}
          features={[
            {
              hero: 'Pentest-ready platform',
              content: [
                {
                  heading: 'Hacking tools pre-installed',
                  description: (
                    <>
                      Burp, FoxyProxywsplb, Wappalyzer, gobuster, dirb, dirbuster, SecLists,
                      PayloadAllTheThings, LinuxPrivChecker, LinPeas, Powershell Terminal,
                      BloodHound, and so on.
                    </>
                  )
                },
                {
                  heading: 'Offline version of Pwnbox',
                  description: <>Parrot Security edition with HTB customization, </>
                }
              ]
            },
            {
              hero: 'Use cases',
              content: [
                {
                  heading: 'Beginners in Cyber Security',
                  description: (
                    <>
                      If you don’t know which tools you need yet or how to set up a hacking VM/OS,
                      this is the answer on how to start your hacking journey.
                    </>
                  )
                },
                {
                  heading: 'Slow device/laptop or with low capabilities',
                  description: (
                    <>
                      Your PC doesn’t have the capabilities to run a hacking VM or is broken? Pwnbox
                      to the rescue!
                    </>
                  )
                }
              ]
            },
            {
              hero: 'Development',
              content: [
                {
                  heading: 'Development Tools',
                  description: <>VSCodium and Geany. You can start developing what you want.</>
                },
                {
                  heading: 'Advanced Framework Support',
                  description: (
                    <>
                      Fully support for a lot of programming languages/frameworks like Go, Rust,
                      Python and more.
                    </>
                  )
                }
              ]
            }
          ]}
          hashes={{
            md5: 'a80094b466a199c603353305e292d360',
            sha1: '7f5b543c753e90bdbd017f22643549401c60526a',
            sha224: '0f1cda7184ec18fac5f83e86c0603d65493946f4f2519a6723006b30',
            sha256: '8dd34a2503685535326f448720d093c00f3f7e490765cb74e8afc76bbafbe8ca',
            sha384:
              '0ce027c6921a0cce793a91041d2963b736af49f5b57e02017cfc7d805576d4d69aa3d4ec120fa172b44d5f925857388b',
            sha512:
              '800b080363ae57116927d33d3e345839be78b1f67a75aca1c0151cc9a323ffbc2aab0584c1fc652bcda6a84547747ed2cbe6b69bea12f24e75fbd00bae2244d1'
          }}
        ></DESection>*/}
      </Grid>
    </>
  )
}

export default OSPwnbox
