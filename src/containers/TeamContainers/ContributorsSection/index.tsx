import { makeStyles, Grid, Typography, GridProps, Box, Paper } from '@material-ui/core'
import PButton from 'components/PButton'

const useStyles = makeStyles(theme => ({
  activeContrib: {
    marginTop: theme.spacing(10)
  },
  contribHeader: {
    textTransform: 'uppercase',
    marginBottom: 20
  },
  contribTitle: {
    marginTop: 0,
    marginBottom: 5
  },
  contribSubtitle: {
    marginTop: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(5)
  },
  contribRole: {
    marginTop: 10,
    marginBottom: 20
  },
  contribSection: {
    marginTop: theme.spacing(7),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  wideButton: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2, 10),
    border: `1px solid ${
      theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(3, 35, 46, 0.5)'
    }`,
    borderRadius: 24
  }
}))

type ContributorsSectionProps = {
  heading: string
  title: string
  subtitle: string
} & GridProps

const ContributorsSection = ({
  heading,
  title,
  subtitle,
  children,
  ...rest
}: ContributorsSectionProps) => {
  const classes = useStyles()

  return (
    <Grid
      {...rest}
      className={classes.activeContrib}
      container
      item
      xs={12}
      alignItems="center"
      direction="column"
      wrap="nowrap"
    >
      <Grid item xs={12}>
        <Box
          className={classes.contribHeader}
          fontWeight={700}
          color="#05EEFF"
          letterSpacing="0.1em"
          textAlign="center"
        >
          <span style={{ fontWeight: 'bold' }}>{heading}</span>
        </Box>
        <Typography className={classes.contribTitle} variant="h1" align="center">
          {title}
        </Typography>
        <Typography className={classes.contribSubtitle} variant="subtitle2" align="center">
          {subtitle}
        </Typography>
      </Grid>
      <Grid
        className={classes.contribSection}
        item
        container
        xs={12}
        md={9}
        justifyContent="center"
        alignItems="center"
      >
        <Paper className={classes.paper} elevation={0}>
          <Grid container justifyContent="center" spacing={3}>
            {children}
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <PButton className={classes.wideButton} variant="outlined" to="">
              View All Contributors
            </PButton>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ContributorsSection
