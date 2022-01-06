import { Grid, GridProps, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import EC_Council from './assets/ec-council.svg'
import Linode from './assets/linode.svg'

// import HTB from '/Users/ParrotOS/website/src/containers/HomeContainers/HTBSection/assets/htbLogo.svg'

const useStyles = makeStyles(theme => ({
  trustLogosBlock: {
    marginTop: 40
  },
  img: {
    width: '100%',
    height: 'auto',
    maxWidth: 113,
    maxHeight: 40,
    display: 'block',
    margin: 'auto',
    fill: theme.palette.mode === 'dark' ? 'white' : 'inherit',
    '& #path1': {
      stroke: theme.palette.mode === 'light' ? '#03232E' : '#FFF'
    },
    '& #path2': {
      fill: theme.palette.mode === 'light' ? '#03232E' : '#FFF'
    }
  }
}))

const TrustSection = (props: GridProps) => {
  const classes = useStyles()
  return (
    <Grid {...props} container justifyContent="center" alignItems="center" item xs={10}>
      <Grid item xs={10}>
        <Typography variant="body1" align="center" style={{ opacity: 1 }}>
          In partnership with
        </Typography>
      </Grid>
      <Grid
        className={classes.trustLogosBlock}
        container
        item
        xs={10}
        md={8}
        spacing={4}
        justifyContent="center"
      >
        <Grid item xs={6} md={4} lg={2}>
          <Linode className={classes.img} />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          {/*<HTB className={classes.img} />*/}
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <EC_Council className={classes.img} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TrustSection
