import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import dynamic from 'next/dynamic'

import PButton from 'components/PButton'

const useStyles = makeStyles(theme => ({
  mirrors: {
    paddingTop: theme.spacing(5)
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

const MirrorsSection = () => {
  const classes = useStyles()

  /* Prevent SSR to avoid ReferenceError */
  const MapMirrors = dynamic(() => import('../../../components/Map'), {
    ssr: false
  })

  return (
    <Grid container item xs={12} md={9} className={classes.mirrors}>
      <Grid container item md={8}>
        <MapMirrors />
      </Grid>
      <Grid container item md={4} justifyContent="center" alignItems="center" direction="column">
        <Typography variant="h4">Mirrors</Typography>
        <Typography paragraph className={classes.mirrorDesc}>
          The software in the parrot archive is delivered in form of deb packages, and these
          packages are served through a vast network of mirror servers that provide the same set of
          packages distributed all around the world for faster software delivery.
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
  )
}

export default MirrorsSection
