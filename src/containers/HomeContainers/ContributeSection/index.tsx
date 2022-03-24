import { Grid, GridProps, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Shell from './assets/shell.svg'

import PButton from 'components/PButton'

const useStyles = makeStyles(theme => ({
  icon: {
    width: 32,
    height: 32,
    fill: theme.palette.mode === 'light' ? '#FFFFFF' : '#06043E'
  },
  iconWrapper: {
    width: 64,
    height: 64,
    padding: 16,
    background: theme.palette.mode === 'light' ? '#03232E' : '#FFFFFF',
    borderRadius: 6,
    marginBottom: 20
  }
}))

const ContributeSection = (props: GridProps) => {
  const classes = useStyles()
  return (
    <Grid container item xs={10} md={8} direction="column" alignItems="center" {...props}>
      <div className={classes.iconWrapper}>
        <Shell className={classes.icon} />
      </div>
      <Typography variant="h2" paragraph align="center">
        Develop for Parrot<span style={{ fontWeight: 300 }}>OS</span>
      </Typography>
      <Typography variant="subtitle2Semi" align="center">
        Join our development platform and contribute to the components we maintain, or contact the
        upstream developers of the individual packages if they are not available on our platform.
        Parrot Security is an open source project, and anyone can contribute improving it.
      </Typography>
      <PButton variant="contained" to="/contribute" style={{ width: 165, marginTop: 37 }}>
        Learn More
      </PButton>
    </Grid>
  )
}

export default ContributeSection
