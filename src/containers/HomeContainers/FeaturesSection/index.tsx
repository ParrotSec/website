import { Grid, GridProps, Hidden } from '@mui/material'

import Build from './assets/Build.svg'
import Layout from './assets/Layout.svg'
import Safety from './assets/Security.svg'
import Unlock from './assets/Unlock.svg'
import Vector from './assets/Vector.svg'
import WeChat from './assets/Wechat.svg'

import Carousel from 'components/Carousel'
import PFeatureBlock from 'components/PFeatureBlock'

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
  return (
    <Grid {...props} container item xs={12} md={9} spacing={4} justifyContent="center">
      <Hidden mdDown>
        {blocks.map(el => (
          <Grid key={`grid-${el.key}`} item sm={6} lg={4}>
            {el}
          </Grid>
        ))}
      </Hidden>
      <Hidden mdUp>
        <Grid item xs={12}>
          <Carousel swipe animation="slide" navButtonsAlwaysInvisible>
            {blocks}
          </Carousel>
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default FeaturesSection
