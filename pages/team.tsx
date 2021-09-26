import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'

import UserCard from 'components/UserCard'
import ContributeSection from 'containers/HomeContainers/ContributeSection'
import ActiveContributors from 'containers/TeamContainers/ActiveContributorsSection'
import PastContributors from 'containers/TeamContainers/PastContributorsSection'
import SpecialThanks from 'containers/TeamContainers/SpecialThanksSection'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  title: {
    marginTop: 10,
    paddingBottom: 20
  },
  headingSubTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6.5)
  },
  developBlock: {
    marginTop: 154
  }
}))

const Team: NextPage = () => {
  const classes = useStyles()

  return (
    <Grid container xs={12} className={classes.root} justifyContent="center">
      <Grid
        container
        direction="column"
        className={classes.title}
        item
        xs={12}
        justifyContent="center"
      >
        <Typography variant="h1" align="center" paragraph>
          The Team <br /> behind Parrot<span style={{ fontWeight: 300 }}>OS</span>
        </Typography>
        <Typography className={classes.headingSubTitle} variant="subtitle2Semi" align="center">
          A GNU/Linux distribution based on Debian and designed with Security and Privacy in mind.
        </Typography>
      </Grid>
      <Grid container xs={12} md={9} spacing={4}>
        <UserCard
          name="Lorenzo Faletra"
          nickname="palinuro"
          role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
          socials={{
            github: 'https://github.com',
            twitter: 'https://twitter.com',
            linkedIn: 'https://linkedin.com',
            email: 'mailto:god@god.com'
          }}
        />
        <UserCard
          name="Lorenzo Faletra"
          nickname="palinuro"
          role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
          socials={{
            github: 'https://github.com',
            twitter: 'https://twitter.com',
            linkedIn: 'https://linkedin.com',
            email: 'mailto:god@god.com'
          }}
        />
        <UserCard
          name="Lorenzo Faletra"
          nickname="palinuro"
          role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
          socials={{
            github: 'https://github.com',
            twitter: 'https://twitter.com',
            linkedIn: 'https://linkedin.com',
            email: 'mailto:god@god.com'
          }}
        />
        <UserCard
          name="Lorenzo Faletra"
          nickname="palinuro"
          role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
          socials={{
            github: 'https://github.com',
            twitter: 'https://twitter.com',
            linkedIn: 'https://linkedin.com',
            email: 'mailto:god@god.com'
          }}
        />
        <UserCard
          name="Lorenzo Faletra"
          nickname="palinuro"
          role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
          socials={{
            github: 'https://github.com',
            twitter: 'https://twitter.com',
            linkedIn: 'https://linkedin.com',
            email: 'mailto:god@god.com'
          }}
        />
        <UserCard
          name="Lorenzo Faletra"
          nickname="palinuro"
          role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
          socials={{
            github: 'https://github.com',
            twitter: 'https://twitter.com',
            linkedIn: 'https://linkedin.com',
            email: 'mailto:god@god.com'
          }}
        />
      </Grid>
      <ActiveContributors />
      <SpecialThanks />
      <PastContributors />
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Team
