import { CardActionArea, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import contribute from './contribute'

import PFeatureBlock from 'components/PFeatureBlock'

const useStyles = makeStyles(theme => ({
  cardArea: {
    borderRadius: theme.spacing(3),
    height: theme.spacing(35)
  }
}))

const GetInvolvedSection = () => {
  const classes = useStyles()

  return (
    <Grid container item xs={12} md={9} spacing={4} justifyContent="center">
      {contribute.map((data, i) => (
        <Grid item sm={12} lg={6} key={`card-${i}`}>
          <CardActionArea className={classes.cardArea} href={data.url}>
            <PFeatureBlock title={data.title} Icon={data.icon}>
              {data.description}
            </PFeatureBlock>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  )
}

export default GetInvolvedSection
