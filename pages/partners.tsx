import { Grid, Typography, Paper, CardActionArea } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import HTBWallpaper from 'assets/htb_community.png'
import Carousel from 'components/Carousel'
import PButton from 'components/PButton'
import ContributeSection from 'containers/HomeContainers/ContributeSection'
import collaborations from 'containers/PartnersContainers/collaborations'

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
    color: '#FFFFFF',
    minHeight: '45vh',
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
  collaborationsDesc: {
    paddingRight: theme.spacing(5)
  },
  mirrors: {
    paddingTop: theme.spacing(5)
  },
  mirrorTitle: {
    margin: theme.spacing(4)
  },
  mirrorDesc: {
    margin: theme.spacing(3)
  },
  wideButton: {
    margin: theme.spacing(3),
    padding: theme.spacing(2, 10),
    border: `1px solid ${
      theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(3, 35, 46, 0.5)'
    }`,
    borderRadius: 24
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
          <Carousel>
            {collaborations.map(data => (
              <CardActionArea key={data.name} className={classes.actionArea} href={data.url}>
                <Paper elevation={0} className={classes.collaborationsPaper}>
                  <Grid container item xs={12} direction="row">
                    <Grid item xs={8} className={classes.collaborationsDesc}>
                      <Typography variant="h4" gutterBottom>
                        {data.name}
                      </Typography>
                      <Typography paragraph>{data.description}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Paper
                        elevation={3}
                        style={{
                          width: '100%',
                          height: '100%',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundImage: `url('${data.image}')`
                        }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </CardActionArea>
            ))}
          </Carousel>
        </Paper>
        <Grid container item xs={12} className={classes.mirrors}>
          <Grid container item xs={8}>
            <MapMirrors />
          </Grid>
          <Grid
            container
            item
            xs={4}
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Typography variant="h4" className={classes.mirrorTitle}>
              Mirrors
            </Typography>
            <Typography paragraph className={classes.mirrorDesc}>
              The software in the parrot archive is delivered in form of deb packages, and these
              packages are served through a vast network of mirror servers that provide the same set
              of packages distributed all around the world for faster software delivery.
            </Typography>
            <PButton
              className={classes.wideButton}
              variant="outlined"
              to="https://parrotsec.org/docs/mirrors-list.html"
            >
              Our mirrors
            </PButton>
          </Grid>
        </Grid>
      </Grid>
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Partners
