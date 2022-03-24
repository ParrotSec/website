import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Architect from './assets/Architect.svg'
import Cloud from './assets/Cloud.svg'
import Comingsoon from './assets/comingsoon.png'
import Home from './assets/Home.svg'
import Raspberry from './assets/Raspberry.svg'
import Security from './assets/Security.svg'

import OSCard from 'components/OSCard'

const useStyles = makeStyles(theme => ({
  versionsBlock: {
    marginTop: 173
  },
  osBlocks: {
    marginTop: 67
  },
  homeIcon: {
    background: 'linear-gradient(153.43deg, #00B2FF 16.67%, #0028FF 100%)'
  },
  securityIcon: {
    background: 'linear-gradient(153.43deg, #FF9800 16.67%, #EC4F00 100%)'
  },
  cloudIcon: {
    background: 'linear-gradient(180deg, #E806FF 10%, #B505CC 90%)'
  },
  architectIcon: {
    background: 'linear-gradient(180deg, #B0B0B0 18%, #999999 91%)'
  },
  raspberryIcon: {
    background: 'linear-gradient(90deg, #960E32 58%, #BD0D3B 99%)'
  },
  architectCard: {
    maxWidth: '100%',
    height: '100%'
  },
  architectBlock: {
    padding: 8,
    width: '100%',
    display: 'flex',
    flexFlow: 'column'
  },
  raspberryCard: {
    maxWidth: '100%',
    height: '100%'
  },
  versionsPaper: {
    marginTop: 24,
    padding: 32,
    width: '100%',
    display: 'flex',
    flexFlow: 'column'
  },
  comingSoon: {
    borderRadius: 24,
    padding: 8,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url('${Comingsoon.src}')`,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(60)
    }
  },
  iconHolder: {
    width: 64,
    height: 64,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 21
  },
  icon: {
    width: 32,
    height: 32,
    margin: 'auto'
  }
}))

const OSSection = () => {
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.versionsBlock} container justifyContent="center" item xs={9} md={6}>
        <Typography variant="h2" align="center" paragraph>
          Parrot<span style={{ fontWeight: 300 }}>OS</span> versions
        </Typography>
        <Typography variant="subtitle2Semi" align="center">
          Different versions for different players, role your need and play freely.
        </Typography>
      </Grid>
      <Grid className={classes.osBlocks} container item xs={12} md={9} spacing={4}>
        <OSCard
          Icon={Home}
          iconClassName={classes.homeIcon}
          title="Home Edition"
          link="/download?version=home"
        >
          Home edition is designed for <b>daily use</b>, <b>privacy</b> and{' '}
          <b>software development</b>. Parrot Tools can be manually installed to assemble a custom
          and lightweight pentesting environment.
        </OSCard>
        <OSCard
          Icon={Security}
          iconClassName={classes.securityIcon}
          title="Security Edition"
          link="/download?version=security"
        >
          Security Edition is a special purpose operating system designed for Penetration Testing
          and <b>Red Team</b> operations. It contains a full arsenal of ready-to use pentesting
          tools.
        </OSCard>
        <OSCard
          Icon={Cloud}
          iconClassName={classes.cloudIcon}
          title="Cloud Edition"
          link="/download?version=cloud"
        >
          Cloud Appliances are special editions of Parrot Security made for <b>embedded devices</b>,
          <b>cloud environments</b>, <b>virtual machines</b> and other special deployments.
        </OSCard>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={9}
        direction="row"
        alignItems="stretch"
        spacing={4}
        style={{ marginTop: 0 }}
      >
        <Grid item xs={12} md={8}>
          <OSCard
            Icon={Architect}
            iconClassName={classes.architectIcon}
            title="Architect Edition"
            className={classes.architectCard}
            link="/download?version=architect"
          >
            ParrotOS with nothing pre-installed. It is available for amd64, i386, arm64 and can be
            used to customize the system installation, like picking a different desktop environment,
            doing a minimal installation or installing a custom set of tools at install time.
          </OSCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <OSCard
            Icon={Raspberry}
            iconClassName={classes.raspberryIcon}
            title="Raspberry Pi Images"
            className={classes.raspberryCard}
            link="/download?version=raspberry"
          >
            From now on, Parrot is also available for Raspberry Pi. Install whatever you like.
          </OSCard>
        </Grid>
      </Grid>
    </>
  )
}

export default OSSection
