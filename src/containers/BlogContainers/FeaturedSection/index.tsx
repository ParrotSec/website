import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { PostType } from '../../../types'

import Carousel from 'components/Carousel'

const useStyles = makeStyles({
  carouselImg: {
    display: 'block',
    margin: 'auto'
  }
})

type FeaturedSectionProps = {
  featuredPosts: PostType[]
}

const FeaturedSection = ({ featuredPosts }: FeaturedSectionProps) => {
  const classes = useStyles()
  return (
    <Grid item container xs={12} md={10} justifyContent="center">
      <Carousel swipe animation="slide" navButtonsAlwaysInvisible>
        {featuredPosts.map((post, i) => (
          <div key={`featured-post-${i}`}>
            <img className={classes.carouselImg} src={post.image} alt="Post image" />
          </div>
        ))}
      </Carousel>
    </Grid>
  )
}

export default FeaturedSection
