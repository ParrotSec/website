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
      title="System Security"
      Icon={Safety}
      /* buttonText="Our approach to system security" */
      /* buttonLink="/docs" */
      key="feature-1"
    >
      The system is designed from the ground up to be secure. Native support for full disk
      encryption, blazing fast security updates and a hardened debian core makes the system the
      perfect place to store sensitive data.
    </PFeatureBlock>,
    <PFeatureBlock
      title="Portability"
      Icon={Build}
      /* buttonText="Parrot runs anywhere" */
      /* buttonLink="/docs" */
      key="feature-2"
    >
      Parrot is based on top of Debian, the most advanced and recognized universal operating system
      that can run anywhere. From your laptop to your Phone, the Parrot core can be executed on a
      huge range of environments, including servers, IoT boards, cloud containers (like docker and
      podman) and more.
    </PFeatureBlock>,
    <PFeatureBlock
      title="Performance"
      Icon={Vector}
      /* buttonText="The system is blazing fast" */
      /* buttonLink="/docs" */
      key="feature-3"
    >
      We care about speed, and the system has been engineered to be as lightweight as possible. You
      can run it on very old hardware, or perform very intensive tasks without performance drops.
      Your applications, not the operating system, will be free to use all your hardware resources.
    </PFeatureBlock>,
    <PFeatureBlock
      title="Privacy"
      Icon={Unlock}
      /* buttonText="We care about your privacy" */
      /* buttonLink="/docs" */
      key="feature-4"
    >
      Don&apos;t leave your sensitive customer data floating around unprotected. The installer
      supports full disk encryption, and the system lets you handle data in the most secure and
      reliable way. Parrot OS is free from trackers and telemetry "features", and it provides many
      privacy tools like AnonSurf, Tor Browser, a custom Firefox profile, easy cryptographic tools
      and much more.
    </PFeatureBlock>,
    <PFeatureBlock
      title="Customizability"
      Icon={Layout}
      /* buttonText="Customize the system" */
      /* buttonLink="/docs" */
      key="feature-5"
    >
      Perfect default settings and great customizability are key to the success of the project. You
      can either fall in love with the italian style of the Parrot system, or use it as a framework
      to build your custom system tailored around your very own needs and style.
    </PFeatureBlock>,
    <PFeatureBlock
      title="Freedom"
      Icon={WeChat}
      /* buttonText="Learn more about your rights" */
      /* buttonLink="/docs" */
      key="feature-6"
    >
      The system is Free and Open Source, and all the code that powers the system is made available
      either through our APT software repository or our GIT servers for you to read, customize and
      contribute to. Free access to the code that runs on your devices is a fundamental freedom, and
      we do our best to fight for your rights.g
    </PFeatureBlock>
  ]
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
          <Carousel swipe animation="slide" navButtonsAlwaysInvisible>
            {blocks}
          </Carousel>
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default FeaturesSection
