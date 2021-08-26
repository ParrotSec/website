import React from 'react'
import { Box, Grid, GridProps, Hidden, makeStyles, Paper, Typography } from '@material-ui/core'
import tools from './assets/tools.svg'
import parrotBg from './assets/shellBg.png'
import screenshot from './assets/screenshot.png'
import PButton from 'components/PButton'
import burp from './assets/tool-logo-burp 1.svg'
import john from './assets/tool-logo-john 1.svg'
import maltego from './assets/tool-logo-maltego 1.svg'
import nmap from './assets/tool-logo-nmap 1.svg'
import sqlmap from './assets/tool-logo-sqlmap 1.svg'
import metasploit from './assets/tool-logo-metasploit 1.svg'
import { useMeasure } from 'react-use'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 75,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 75
  },
  headerIcon: {
    padding: 16,
    background: '#FFF',
    borderRadius: 6
  },
  icon: {
    position: 'absolute',
    padding: 16,
    background: '#FFF',
    borderRadius: 6
  },
  desc: {
    opacity: 0.5,
    paddingBottom: 20
  },
  bigIcon: {
    position: 'absolute',
    width: 84,
    height: 84,
    padding: 16,
    background: '#FFF',
    borderRadius: 6
  },
  bg: {
    borderRadius: 6,
    boxShadow: '0px 14px 56px 21px rgba(0, 0, 0, 0.25)'
  },
  bgHolder: {
    width: 'calc(100% - 512px)',
    marginBottom: 48,
    marginTop: 46,
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
    marginTop: 31
  }
}))

const ToolsSection = (rest: GridProps) => {
  const classes = useStyles()
  const [ref, { width, height }] = useMeasure()
  return (
    <>
      <Grid {...rest} container item xs={12} md={9}>
        <Paper className={classes.root}>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <img className={classes.headerIcon} src={tools} alt="tools icon" />
            <Typography variant="h2" align="center" paragraph>
              Tools for every occasion
            </Typography>
            <Typography className={classes.desc} variant="body1" align="center">
              Choose between 600+ tools for all your hacking needs
            </Typography>
            {/*TODO: for futher animations need to apply box-shadow*/}
            <Hidden mdDown>
              <Box position="relative" width={width}>
                <img
                  className={classes.bigIcon}
                  src={burp}
                  alt="Burp"
                  style={{
                    top: -24,
                    left: 0.922 * width
                  }}
                />
                <img
                  className={classes.bigIcon}
                  src={john}
                  alt="John"
                  style={{
                    top: 0.902 * height,
                    left: 0.045 * width
                  }}
                />
                <img
                  className={classes.bigIcon}
                  width={48}
                  height={48}
                  src={maltego}
                  alt="Maltego"
                  style={{
                    left: 0.958 * width,
                    top: 0.595 * height
                  }}
                />
                <img
                  className={classes.icon}
                  src={nmap}
                  alt="Nmap"
                  style={{
                    top: 0.518 * height,
                    left: -0.14 * width
                  }}
                />
                <img
                  className={classes.icon}
                  src={metasploit}
                  alt="Metasploit"
                  style={{
                    top: 0.23 * height,
                    left: 1.111 * width
                  }}
                />
                <img
                  className={classes.bigIcon}
                  src={sqlmap}
                  alt="SQLmap"
                  style={{
                    top: 0.2 * height,
                    left: -42
                  }}
                />
              </Box>
            </Hidden>
            <Box className={classes.bgHolder}>
              <img ref={ref} className={classes.bg} src={parrotBg} alt="Parrot BG" />
            </Box>
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
          <Paper>
            <Box display="flex" justifyContent="space-between" flexDirection="column" height="100%">
              <Box padding="60px">
                <Typography variant="h3">Hacking tools at your fingertips</Typography>
                <Typography variant="body1">
                  When it comes to general tools and functional features, Parrot OS wins over Kali
                  Linux. Parrot OS has all the tools that are available in Kali Linux and also adds
                  its own tools. There are several tools you will find on ParrotOS that is not found
                  on Kali Linux.
                </Typography>
              </Box>
              <img
                src={screenshot}
                style={{ display: 'block', marginLeft: 'auto', maxWidth: '90%' }}
                alt="Parrot Tools"
              />
            </Box>
          </Paper>
        </Grid>
        <Grid container item xs={12} md={6}>
          <Paper>
            <Box display="flex" justifyContent="space-between" flexDirection="column" height="100%">
              <Box padding="60px">
                <Typography variant="h3">This block should be replaced</Typography>
                <Typography variant="body1">
                  When it comes to general tools and functional features, Parrot OS wins over Kali
                  Linux. Parrot OS has all the tools that are available in Kali Linux and also adds
                  its own tools. There are several tools you will find on ParrotOS that is not found
                  on Kali Linux.
                </Typography>
              </Box>
              <img
                src={screenshot}
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
