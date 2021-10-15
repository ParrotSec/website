import { Grid, Typography, Paper, CardActionArea } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Caine from 'assets/caine.png'
import CSAcademy from 'assets/csacademy.png'
import HTBWallpaper from 'assets/htb_community.png'
import ProDef from 'assets/prodefence.png'
import Zorin from 'assets/zorinos.png'
import ContributeSection from 'containers/HomeContainers/ContributeSection'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  title: {
    marginTop: 10,
    paddingBottom: 20
  },
  headingSubTitle: {
    marginTop: 15,
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 15.3
    },
    marginBottom: theme.spacing(6.5)
  },
  developBlock: {
    marginTop: 154
  },
  mainSponsorPaper: {
    padding: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #06043E), url('${HTBWallpaper.src}')`
  },
  actionArea: {
    display: 'flex',
    borderRadius: 24,
    marginTop: theme.spacing(2)
  },
  collaborations: {
    paddingTop: theme.spacing(10)
  },
  collaborationsPaper: {
    padding: theme.spacing(4)
  },
  caine: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url('${Caine.src}')`
  },
  zorin: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url('${Zorin.src}')`
  },
  csacademy: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url('${CSAcademy.src}')`
  },
  prodefence: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url('${ProDef.src}')`
  },
  mirrors: {
    paddingTop: theme.spacing(4)
  }
}))

const Partners: NextPage = () => {
  const classes = useStyles()

  /* Prevent SSR to avoid ReferenceError */
  const MapMirrors = dynamic(() => import('containers/PartnersContainers/MapSection'), {
    ssr: false
  })

  return (
    <Grid container item xs={12} className={classes.root} justifyContent="center">
      <Grid
        container
        direction="column"
        className={classes.title}
        item
        xs={12}
        justifyContent="center"
      >
        <Typography variant="h1" align="center" paragraph>
          Our Partners
        </Typography>
        <Typography className={classes.headingSubTitle} variant="subtitle2Semi" align="center">
          All companies and organizations that have decided to invest in the project.
        </Typography>
      </Grid>
      <Grid container item xs={10} alignItems="center" justifyContent="center" wrap="nowrap">
        <CardActionArea className={classes.actionArea} href="https://hackthebox.eu">
          <Paper className={classes.mainSponsorPaper} elevation={0}>
            <Typography variant="h5">Main sponsor</Typography>
            <Typography variant="h2" gutterBottom>
              Hack The Box
            </Typography>
            <Typography variant="body1">
              Hack The Box is an online platform providing labs and challenges for cyber security
              training. Users can improve their penetration testing skills and exchange ideas and
              methodologies with thousands of people in the security field. By employing several
              social and gamification elements Hack The Box makes the learning experience fun and
              rewarding.
            </Typography>
          </Paper>
        </CardActionArea>
      </Grid>
      <Grid container item xs={10} className={classes.collaborations}>
        <Paper elevation={0} className={classes.collaborationsPaper}>
          <Grid container item xs={12} justifyContent="center">
            <Typography variant="h5" gutterBottom>
              Collaborations
            </Typography>
          </Grid>
          <CardActionArea className={classes.actionArea} href="https://www.caine-live.net">
            <Paper elevation={2} className={classes.collaborationsPaper}>
              <Grid container item xs={12} direction="row">
                <Grid item xs={8}>
                  <Typography variant="h4" gutterBottom>
                    Caine
                  </Typography>
                  <Typography paragraph>
                    We have an open collaboration channel with Nanni Bassetti, developer of Caine, a
                    GNU/Linux distribution focused on digital forensics. The collaboration consists
                    in a friendly partnership where we help Caine in its development and testing
                    process and Caine helps us with our digital forensics section.
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Paper elevation={3} className={classes.caine} />
                </Grid>
              </Grid>
            </Paper>
          </CardActionArea>
          <CardActionArea className={classes.actionArea} href="https://zorin.com">
            <Paper elevation={2} className={classes.collaborationsPaper}>
              <Grid container item xs={12} direction="row">
                <Grid item xs={8}>
                  <Typography variant="h4" gutterBottom>
                    Zorin OS
                  </Typography>
                  <Typography paragraph>
                    We love Zorin OS and the amazing work done by its team, and we have some common
                    goals for the future we would like to invest together in. The collaboration
                    consists in a friendly partnership on some long term plans of both the projects.
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Paper elevation={3} className={classes.zorin} />
                </Grid>
              </Grid>
            </Paper>
          </CardActionArea>
          <CardActionArea className={classes.actionArea} href="https://cs-academy.org">
            <Paper elevation={2} className={classes.collaborationsPaper}>
              <Grid container item xs={12} direction="row">
                <Grid item xs={8}>
                  <Typography variant="h4" gutterBottom>
                    CS Academy
                  </Typography>
                  <Typography paragraph>
                    CS-Academy is an Spanish-language online training center that provides
                    Cybersecurity and Ethical Hacking training courses, Pentesting services, digital
                    forensics analysis and incidents response for individuals and companies.
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Paper elevation={3} className={classes.csacademy} />
                </Grid>
              </Grid>
            </Paper>
          </CardActionArea>
          <CardActionArea className={classes.actionArea} href="https://www.prodefence.org">
            <Paper elevation={2} className={classes.collaborationsPaper}>
              <Grid container item xs={12} direction="row">
                <Grid item xs={8}>
                  <Typography variant="h4" gutterBottom>
                    ProDefence
                  </Typography>
                  <Typography paragraph>
                    is an IT company dedicated to cyber security services, protecting companies from
                    vulnerabilities and system penetration, providing security information training
                    to their employees. Company employees can take advantage of the remote support
                    we give anytime anyday to any platform. In addition to this, we analyze any
                    file, as well as, network activity for malware or any other malicious and
                    suspicious activity and help to recover and educate the users involved
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Paper elevation={3} className={classes.prodefence} />
                </Grid>
              </Grid>
            </Paper>
          </CardActionArea>
        </Paper>
        <Grid container item xs={12} className={classes.mirrors} justifyContent="center">
          <Paper elevation={0}>
            <Typography variant="h5" gutterBottom>
              Mirrors
            </Typography>
            <Paper elevation={2}>
              <MapMirrors />
            </Paper>
          </Paper>
        </Grid>
      </Grid>
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Partners
