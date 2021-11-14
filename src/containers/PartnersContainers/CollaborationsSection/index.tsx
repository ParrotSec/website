import { CardActionArea, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Carousel from 'components/Carousel'
import collaborations from 'containers/PartnersContainers/CollaborationsSection/collaborations'

const useStyles = makeStyles(theme => ({
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
  imgProp: {
    width: '100%',
    borderRadius: 24,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}))

const CollaborationSection = () => {
  const classes = useStyles()

  return (
    <>
      <Grid
        className={classes.collaborations}
        container
        item
        xs={12}
        md={9}
        direction="column"
        justifyContent="center"
      >
        <Typography variant="h1" align="center" gutterBottom>
          Collaborations
        </Typography>
        <Typography mb={4} variant="subtitle2Semi" align="center">
          We collaborate with different projects to make the OSS world better
        </Typography>
        <Paper elevation={0} className={classes.collaborationsPaper}>
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
    </>
  )
}

export default CollaborationSection
