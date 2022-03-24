import Masonry from '@mui/lab/Masonry'
import { Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Article1 from './assets/article1.png'
import Article2 from './assets/article2.png'
import Article3 from './assets/article3.png'
import Article4 from './assets/article4.png'
import Shop from './assets/Shop.svg'

import PButton from 'components/PButton'
import PFeatureBlock from 'components/PFeatureBlock'

const articles = [Article1, Article2, Article3, Article4]

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

const StoreSection = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      item
      className={classes.root}
      xs={12}
      md={9}
      spacing={4}
      justifyContent="center"
    >
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
          {articles.map((article, index) => (
            <div key={index}>
              <img
                src={`${article.src}`}
                srcSet={`${article.src}`}
                loading="lazy"
                style={{
                  borderRadius: 24,
                  display: 'block',
                  width: '100%'
                }}
              />
            </div>
          ))}
        </Masonry>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Paper elevation={0}>
          <PFeatureBlock Icon={Shop} title="Parrot Shop">
            <Typography paragraph gutterBottom>
              Custom swag for the cyber security enthusiasts. We ship all over the world!
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
