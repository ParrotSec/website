import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import OSCard from 'components/OSCard'
import Home from './assets/Home.svg'
import Security from './assets/Security.svg'
import Cloud from './assets/Cloud.svg'

const useStyles = makeStyles({
  versionsBlock: {
    marginTop: 173
  },
  osBlocks: {
    marginTop: 67
  },
  homeIcon: {
    background: 'linear-gradient(153.43deg, #03F0FF 16.67%, #03FF77 100%)'
  },
  securityIcon: {
    background: 'linear-gradient(145.47deg, #FAFD50 21.97%, #FD50D7 96.3%)'
  },
  cloudIcon: {
    background: 'linear-gradient(146.41deg, #00D1FF 8.11%, #020DFF 94.7%)'
  }
})

const OSSection = () => {
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.versionsBlock} container justifyContent="center" item xs={9} md={6}>
        <Typography variant="h1" align="center" paragraph>
          Parrot<span style={{ fontWeight: 300 }}>OS</span> versions
        </Typography>
        <Typography variant="body1" align="center">
          Different versions for different players, role your need and play freely.
        </Typography>
      </Grid>
      <Grid className={classes.osBlocks} container item xs={12} md={9} spacing={4}>
        <OSCard Icon={Home} iconClassName={classes.homeIcon} title="Home Edition">
          Home edition is designed for <b>daily use</b>, <b>privacy</b> and{' '}
          <b>software development</b>. Parrot Tools can be manually installed to assemble a custom
          and lightweight pentesting environment.
        </OSCard>
        <OSCard Icon={Security} iconClassName={classes.securityIcon} title="Security Edition">
          Security Edition is a special purpose operating system designed for Penetration Testing
          and <b>Red Team</b> operations. It contains a full arsenal of ready-to use pentesting
          tools.
        </OSCard>
        <OSCard Icon={Cloud} iconClassName={classes.cloudIcon} title="Cloud Edition">
          IoT & Cloud Appliances are special editions of Parrot Security made for{' '}
          <b>embedded devices</b>,<b>cloud environments</b>, <b>virtual machines</b> and other
          special deployments.
        </OSCard>
      </Grid>
    </>
  )
}

export default OSSection
