import { Grid, GridProps, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import HTB from '../HTBSection/assets/htbLogo.svg'

import EcCouncil from './assets/ec-council.svg'
import Linode from './assets/linode.svg'

const useStyles = makeStyles(theme => ({
  trustLogosBlock: {
    marginTop: theme.spacing(2)
  },
  img: {
    width: '100%',
    height: '100%',
    maxWidth: theme.spacing(25),
    maxHeight: theme.spacing(5),
    display: 'block',
    margin: 'auto',
    fill: theme.palette.mode === 'dark' ? 'white' : 'inherit',
    '& #linode-block': {
      fill: '#03232E'
    },
    '& #linode-text': {
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
        <Grid item xs={8} md={6} lg={4}>
          <Linode className={classes.img} />
        </Grid>
        <Grid item xs={8} md={6} lg={4}>
          <HTB className={classes.img} />
        </Grid>
        <Grid item xs={8} md={6} lg={4}>
          <EcCouncil className={classes.img} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TrustSection
