import React from 'react'
import { Grid, GridProps, Hidden, useTheme } from '@material-ui/core'
import PFeatureBlock from 'components/PFeatureBlock'
import Safety from './assets/Security.svg'
import Build from './assets/Build.svg'
import Vector from './assets/Vector.svg'
import Unlock from './assets/Unlock.svg'
import Layout from './assets/Layout.svg'
import WeChat from './assets/Wechat.svg'
import Carousel from 'react-material-ui-carousel'

const FeaturesSection = (props: GridProps) => {
  const blocks = [
    <PFeatureBlock
      title="Secure System"
      Icon={Safety}
      buttonText="Learn about Parrot’s security"
      buttonLink="/docs"
      key="feature-1"
    >
      Our tools are designed to be compatible with as many devices as possible via containerization
      technologies like Docker or Podman.
    </PFeatureBlock>,
    <PFeatureBlock
      title="Portable"
      Icon={Build}
      buttonText="Learn about Parrot’s portability"
      buttonLink="/docs"
      key="feature-2"
    >
      Our tools are designed to be compatible with as many devices as possible via containerization
      technologies like Docker or Podman.
    </PFeatureBlock>,
    <PFeatureBlock
      title="Performance"
      Icon={Vector}
      buttonText="Learn about Parrot’s performance"
      buttonLink="/docs"
      key="feature-3"
    >
      Our tools are designed to be compatible with as many devices as possible via containerization
      technologies like Docker or Podman.
    </PFeatureBlock>,
    <PFeatureBlock
      title="Privacy First"
      Icon={Unlock}
      buttonText="Learn about Parrot’s security"
      buttonLink="/docs"
      key="feature-4"
    >
      Our tools are designed to be compatible with as many devices as possible via containerization
      technologies like Docker or Podman.
    </PFeatureBlock>,
    <PFeatureBlock
      title="Customizable"
      Icon={Layout}
      buttonText="Learn about Parrot’s security"
      buttonLink="/docs"
      key="feature-5"
    >
      Our tools are designed to be compatible with as many devices as possible via containerization
      technologies like Docker or Podman.
    </PFeatureBlock>,
    <PFeatureBlock
      title="Free & Open Source"
      Icon={WeChat}
      buttonText="Learn about Parrot’s security"
      buttonLink="/docs"
      key="feature-6"
    >
      Our tools are designed to be compatible with as many devices as possible via containerization
      technologies like Docker or Podman.
    </PFeatureBlock>
  ]
  const {
    palette: { type: themeType }
  } = useTheme()
  return (
    <Grid {...props} container item xs={12} md={9} spacing={4} justifyContent="center">
      <Hidden smDown>
        {blocks.map(el => (
          <Grid key={`grid-${el.key}`} item sm={6} lg={4}>
            {el}
          </Grid>
        ))}
      </Hidden>
      <Hidden mdUp>
        <Grid item xs={12}>
          <Carousel
            swipe
            animation="slide"
            navButtonsAlwaysInvisible
            indicatorIconButtonProps={{
              style: {
                color: themeType === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
              }
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: '#55ddff'
              }
            }}
          >
            {blocks}
          </Carousel>
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default FeaturesSection
