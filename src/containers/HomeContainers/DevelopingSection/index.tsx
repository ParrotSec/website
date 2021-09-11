import React from 'react'
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import Burp from 'containers/HomeContainers/ToolsSection/assets/tool-logo-burp 1.svg'
import John from 'containers/HomeContainers/ToolsSection/assets/tool-logo-john 1.svg'
import Maltego from 'containers/HomeContainers/ToolsSection/assets/tool-logo-maltego 1.svg'
import Nmap from 'containers/HomeContainers/ToolsSection/assets/tool-logo-nmap 1.svg'
import Metasploit from 'containers/HomeContainers/ToolsSection/assets/tool-logo-metasploit 1.svg'
import Sqlmap from 'containers/HomeContainers/ToolsSection/assets/tool-logo-sqlmap 1.svg'
import InfiniteSlider from 'components/InfiniteSlider'
import cls from 'classnames'

const useStyles = makeStyles(theme => ({
  developerBlock: {
    marginTop: 115
  },
  papersBlock: {
    marginTop: 66
  },
  devPaper: {
    paddingTop: theme.spacing(9),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  },
  devPaperEnd: {
    paddingBottom: theme.spacing(9),
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(4)
    }
  },
  icon: {
    padding: 5,
    width: 64,
    height: 64,
    background: '#FFF',
    borderRadius: 6,
    boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.25)'
  }
}))

const DevelopingSection = () => {
  const classes = useStyles()
  const icons = [
    <Burp className={classes.icon} key="burp" />,
    <John className={classes.icon} key="john" />,
    <Maltego className={classes.icon} key="maltego" />,
    <Nmap className={classes.icon} key="nmap" />,
    <Metasploit className={classes.icon} key="metasploit" />,
    <Sqlmap className={classes.icon} key="sqlmap" />
  ]
  return (
    <>
      <Grid className={classes.developerBlock} container item xs={9} md={6}>
        <Typography variant="h1" align="center" paragraph>
          Parrot is developer friendly. Secure in a Linux Environment.
        </Typography>
        <Typography variant="body1" align="center">
          Compilers, interpreters and intelligent editors. All you need to start programming comes
          out of the box, with the most secure Linux environment.
        </Typography>
      </Grid>
      <Grid className={classes.papersBlock} container item xs={12} md={9} spacing={4}>
        <Grid item xs={12}>
          <Paper elevation={0}>
            <div className={classes.devPaper}>
              <Typography variant="h3" paragraph>
                Developer tools
              </Typography>
              <Typography variant="body1" paragraph>
                Our tools are designed to be compatible with as many devices as possible via
                containerization technologies like Docker or Podman.
              </Typography>
            </div>
            <InfiniteSlider className={classes.devPaperEnd} height={86}>
              {icons}
            </InfiniteSlider>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={cls(classes.devPaper, classes.devPaperEnd)} elevation={0}>
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
