import { CardActionArea, Divider, Grid, Hidden, Paper, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import collaborations from './collaborations'

import Carousel from 'components/Carousel'

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
    padding: theme.spacing(3)
  },
  collaborationsDesc: {
    paddingRight: theme.spacing(5)
  },
  imgProp: {
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: theme.spacing(1)
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
      <Grid container item xs={12} justifyContent="center">
        <Typography variant="h3" gutterBottom>
          Collaborations
        </Typography>
      </Grid>
      <Hidden smDown>
        <Paper elevation={0} className={classes.collaborationsPaper}>
          <Stack direction="column">
            {collaborations.map(data => (
              <>
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
                {data.id !== collaborations.length ? <Divider variant="middle" /> : null}
              </>
            ))}
          </Stack>
        </Paper>
      </Hidden>
      <Hidden mdUp>
        <Paper elevation={0} className={classes.collaborationsPaper}>
          <Carousel>
            {collaborations.map((data, i) => (
              <CardActionArea key={`data-${i}`} className={classes.actionArea} href={data.url}>
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
      </Hidden>
    </Grid>
  )
}

export default CollaborationSection
