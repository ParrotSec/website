import { Grid, Typography, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'

import UserCard from 'components/UserCard'
import data from 'components/UserCard/team'
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
    marginTop: 27,
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 16
    },
    marginBottom: theme.spacing(4)
  },
  email: {
    marginTop: theme.spacing(1),
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 16
    },
    marginBottom: theme.spacing(1)
  },
  developBlock: {
    marginTop: 154
  }
}))

const teamData = data.map((data, i) => {
  return (
    <UserCard
      key={`team-card-${i}`}
      name={data.name}
      nickname={data.nickname}
      role={data.role}
      socials={{
        github: data.github,
        twitter: data.twitter,
        linkedIn: data.linkedIn,
        email: data.email
      }}
    />
  )
})

const Team: NextPage = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} justifyContent="center">
      <Grid
        container
        item
        xs={12}
        md={9}
        direction="column"
        className={classes.title}
        justifyContent="center"
      >
        <Typography variant="h1" align="center" paragraph>
          The Team <br /> behind Parrot<span style={{ fontWeight: 300 }}>OS</span>
        </Typography>
        <Typography className={classes.headingSubTitle} variant="subtitle2Semi" align="center">
          The Parrot Project is a community-driven project. In this page we list contributors and
          members, past and present, who have contributed significantly to the project.
        </Typography>
        <Typography className={classes.email} variant="inherit" align="center">
          Board of Directors:{' '}
          <Link underline="none" href={`mailto:director@parrotsec.org`}>
            director@parrotsec.org
          </Link>
        </Typography>
        <Typography className={classes.email} variant="inherit" align="center">
          Parrot Team:{' '}
          <Link underline="none" href={`mailto:team@parrotsec.org`}>
            team@parrotsec.org
          </Link>
        </Typography>
      </Grid>
      <Grid container item xs={12} md={9} spacing={4}>
        {teamData}
      </Grid>
      <ActiveContributors />
      <SpecialThanks />
      <PastContributors />
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Team
