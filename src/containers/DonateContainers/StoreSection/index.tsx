import Masonry from '@mui/lab/Masonry'
import { Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Shop from './assets/Shop.svg'

import PButton from 'components/PButton'
import PFeatureBlock from 'components/PFeatureBlock'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  headingSubTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6.5)
  },
  arrow: {
    fill: theme.palette.mode === 'light' ? '#03232E' : '#05EEFF',
    marginLeft: 8
  }
}))

const heights = [200, 60, 70, 170, 150]

const StoreSection = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} xs={12} md={9} spacing={4} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h1" align="center" paragraph>
          Parrot Security Shop
        </Typography>
        <Typography
          className={classes.headingSubTitle}
          variant="subtitle2Semi"
          align="center"
          paragraph
        >
          Express your geekness!
        </Typography>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Masonry columns={2} spacing={2}>
          {heights.map((height, index) => (
            <Paper key={index} sx={{ height }}>
              {index + 1}
            </Paper>
          ))}
        </Masonry>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Paper elevation={0}>
          <PFeatureBlock Icon={Shop} title="Parrot Shop">
            <Typography paragraph gutterBottom>
              Custom swag and premium designed goods for the cyber security enthusiasts.
            </Typography>
            <PButton gradient variant="contained" to={'https://parrot-security.myspreadshop.it'}>
              Check our Store
            </PButton>
          </PFeatureBlock>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default StoreSection
