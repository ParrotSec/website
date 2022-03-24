import { CardActionArea, Grid, Hidden, Paper, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import collaborations from './collaborations'

import Carousel from 'components/Carousel'
import BunnyLogo from 'containers/HomeContainers/TrustSection/assets/bunnycdn.svg'
import LinodeLogo from 'containers/HomeContainers/TrustSection/assets/linode.svg'

const useStyles = makeStyles(theme => ({
  actionArea: {
    display: 'flex',
    borderRadius: 24,
    marginTop: theme.spacing(2),
    height: '100%'
  },
  collaborations: {
    paddingTop: theme.spacing(10)
  },
  collaborationsPaper: {
    padding: theme.spacing(2)
  },
  collaborationsDesc: {
    paddingRight: theme.spacing(5)
  },
  imgProp: {
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  sponsorPaper: {
    color: '#FFFFFF',
    height: '100%',
    padding: theme.spacing(4)
  },
  sponsorImg: {
    width: '100%',
    backgroundSize: 'cover',
    display: 'block',
    margin: 'auto'
  }
}))

const CollaborationSection = () => {
  const classes = useStyles()

  return (
    <Grid container item xs={12} md={9} className={classes.collaborations}>
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
                <Grid container item md={12} direction="row">
                  <Grid container item md={8} className={classes.collaborationsDesc}>
                    <Typography variant="h4" gutterBottom>
                      {data.name}
                    </Typography>
                    <Typography paragraph>{data.description}</Typography>
                  </Grid>
                  <Grid container item md={4}>
                    <img src={data.image} className={classes.imgProp} alt={data.name} />
                  </Grid>
                </Grid>
              </Paper>
            </CardActionArea>
          ))}
        </Carousel>
      </Paper>
    </Grid>
  )
}

export default CollaborationSection
