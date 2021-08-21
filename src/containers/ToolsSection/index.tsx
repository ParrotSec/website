import React from 'react'
import { Box, /*Box,*/ Grid, makeStyles, Paper, PaperProps, Typography } from '@material-ui/core'
import cls from 'classnames'
import tools from './assets/tools.svg'
import parrotBg from './assets/parrotbg.png'
import PButton from 'components/PButton'
/*import burp from './assets/tool-logo-burp 1.svg'
import john from './assets/tool-logo-john 1.svg'
import maltego from './assets/tool-logo-maltego 1.svg'
import nmap from './assets/tool-logo-nmap 1.svg'
import sqlmap from './assets/tool-logo-sqlmap 1.svg'
import metasploit from './assets/tool-logo-metasploit 1.svg'*/

const useStyles = makeStyles({
  root: {
    paddingTop: 75,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 75
  },
  icon: {
    padding: 16,
    background: '#FFF',
    borderRadius: 6
  },
  desc: {
    opacity: 0.5
  },
  bigIcon: {
    width: 84,
    height: 84,
    padding: 16,
    background: '#FFF',
    borderRadius: 6
  }
})

const ToolsSection = ({ className, ...rest }: PaperProps) => {
  const classes = useStyles()
  return (
    <Paper className={cls(classes.root, className)} {...rest}>
      <Grid container item xs={12} justifyContent="center" alignItems="center" direction="column">
        <div>
          <img className={classes.icon} src={tools} alt="tools icon" />
        </div>
        <Typography variant="h2" align="center">
          Tools for every occasion
        </Typography>
        <Typography className={classes.desc} variant="body1" align="center">
          Choose between 600+ tools for all your hacking needs
        </Typography>
        {/*TODO: for futher animations need to apply box-shadow*/}
        <img src={parrotBg} alt="Parrot BG" />
        {/* <Box position="relative">
          <img className={classes.bigIcon} src={burp} alt="Burp" />
        </Box>
        <Box position="relative">
          <img className={classes.bigIcon} src={john} alt="John" />
        </Box>
        <Box position="relative">
          <img className={classes.bigIcon} width={48} height={48} src={maltego} alt="Maltego" />
        </Box>
        <Box position="relative">
          <img className={classes.icon} src={nmap} alt="Nmap" />
        </Box>
        <Box position="relative" left={472} top={-460}>
          <img className={classes.icon} src={metasploit} alt="Metasploit" />
        </Box>
        <Box position="relative" top={-543} right={360}>
          <img className={classes.bigIcon} src={sqlmap} alt="SQLmap" />
        </Box>*/}
        <Typography variant="h3" align="center">
          Explore over 600+ tools
        </Typography>
        <Box display="flex" marginTop="30px" style={{ gap: 32 }}>
          <PButton variant="contained" to="/download" gradient>
            Download OS
          </PButton>
          <PButton variant="outlined" to="/docs">
            View Tools
          </PButton>
        </Box>
      </Grid>
    </Paper>
  )
}

export default ToolsSection
