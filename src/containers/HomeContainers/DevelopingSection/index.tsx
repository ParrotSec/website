import { Grid, Hidden, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import cls from 'classnames'

import PIconLink from 'components/PIconLink'
import Slider from 'components/Slider'
import Burp from 'containers/HomeContainers/ToolsSection/assets/tool-logo-burp 1.svg'
import John from 'containers/HomeContainers/ToolsSection/assets/tool-logo-john 1.svg'
import Maltego from 'containers/HomeContainers/ToolsSection/assets/tool-logo-maltego 1.svg'
import Metasploit from 'containers/HomeContainers/ToolsSection/assets/tool-logo-metasploit 1.svg'
import Nmap from 'containers/HomeContainers/ToolsSection/assets/tool-logo-nmap 1.svg'
import Sqlmap from 'containers/HomeContainers/ToolsSection/assets/tool-logo-sqlmap 1.svg'

const useStyles = makeStyles(theme => ({
  developerBlock: {
    marginTop: 115
  },
  papersBlock: {
    marginTop: 66
  },
  devPaper: {
    display: 'flex',
    [theme.breakpoints.down('lg')]: {
      flexFlow: 'column',
      paddingBottom: theme.spacing(8)
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: theme.spacing(4)
    }
  },
  devToolsBlock: {
    paddingLeft: theme.spacing(8),
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('lg')]: {
      paddingBottom: theme.spacing(2)
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(4),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    }
  },
  compilePaper: {
    padding: theme.spacing(9, 8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4)
    }
  },
  marginedSlider: {
    marginLeft: theme.spacing(2)
  },
  sliderHorizontal: {
    minHeight: 93
  },
  sliderBlock: {
    minWidth: 93,
    marginRight: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
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
      <b>Golang</b>
      <br />
      golang description
    </>
  </PIconLink>,
  <PIconLink key="develop-john" href="https://nest.parrotsec.org/packages/tools/john" Icon={John}>
    <>
      <b>Java</b>
      <br />
      java description
    </>
  </PIconLink>,
  <PIconLink key="develop-maltego" href="https://www.maltego.com/product-features/" Icon={Maltego}>
    <>
      <b>Python</b>
      <br />
      Python description
    </>
  </PIconLink>,
  <PIconLink key="develop-nmap" href="https://nest.parrotsec.org/packages/tools/nmap" Icon={Nmap}>
    <>
      <b>Docker</b>
      <br />
      Docker description
    </>
  </PIconLink>,
  <PIconLink
    key="metasploit"
    href="https://nest.parrotsec.org/packages/tools/metasploit-framework"
    Icon={Metasploit}
  >
    <>
      <b>Nodejs</b>
      <br />
      Nodejs description
    </>
  </PIconLink>,
  <PIconLink key="sqlmap" href="https://nest.parrotsec.org/packages/tools/sqlmap" Icon={Sqlmap}>
    <>
      <b>Rust</b>
      <br />
      Rust description
    </>
  </PIconLink>
]

const DevelopingSection = () => {
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.developerBlock} container item xs={12} md={7}>
        <Typography variant="h1" align="center" paragraph>
          A Developer Friendly environment
        </Typography>
        <Typography variant="subtitle2Semi" align="center">
          Whether you are an IT or security professional who needs to write your custom scripts,
          or a software developer in search for the best environment to work with your favorite languages and frameworks,
          Parrot is made for you.<br />
        </Typography>
      </Grid>
      <Grid className={classes.papersBlock} container item xs={12} md={9} spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.devPaper} elevation={0}>
            <div className={classes.devToolsBlock}>
              <Typography variant="h5" paragraph>
                Compilers & Interpreters
              </Typography>
              <Typography variant="body1Semi" paragraph>
                Parrot integrates popular compilers, interpreters, libraries and development frameworks
                either pre-installed or one command away through our software repository, for faster and easier software development.
                <br />
                You can also use Parrot in your CI/CD pipelines to add security tests to your release workflow.
              </Typography>
            </div>
            <Hidden mdUp>
              <Slider className={classes.sliderHorizontal} spacing={4} cloneFactor={2}>
                {items}
              </Slider>
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
            <Typography variant="h5" paragraph>
              Development tools
            </Typography>
            <Typography variant="body1Semi">
                We are developers too, and we love to have advanced, comfortable and easy to use environment too.
                This is why Parrot ships with Codium pre-installed. It is an advanced and extensible editor with IDE capabilities built upon VSCode.
                Other IDEs and editors are ready to install from our official software repository.<br />
                <br />
                Boot the system, start the editor, run the code. It can't get easier than that.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default DevelopingSection
