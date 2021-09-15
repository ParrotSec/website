import {
  Grid,
  GridProps,
  IconButton,
  lighten,
  makeStyles,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'
import Arrow from 'components/PFeatureBlock/assets/arrow.svg'
import cls from 'classnames'

const useStyles = makeStyles(theme => ({
  grid: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  root: {
    width: '100%',
    padding: theme.spacing(14),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4)
    }
  },
  textField: {
    backgroundColor: theme.palette.background.default,
    borderRadius: 10,
    opacity: 1
  },
  inputLabel: {
    color: '#A4B1CD'
  },
  arrowFill: {
    fill: theme.palette.background.default
  },
  button: {
    marginLeft: 10,
    padding: 21,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 10,
    '&:hover': {
      backgroundColor: lighten(theme.palette.primary.main, 0.2)
    }
  }
}))

const NewsletterSection = ({ className, ...rest }: GridProps) => {
  const classes = useStyles()
  return (
    <Grid className={cls(classes.grid, className)} {...rest} container item xs={12} md={9}>
      <Paper className={classes.root} elevation={0}>
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" paragraph>
              Subscribe to our newsletter
            </Typography>
            <Typography variant="subtitle2">
              Choose the channel that you are most active in and let’s stay connected!
            </Typography>
          </Grid>
          <Grid container item xs={12} md={6} wrap="nowrap">
            <TextField
              variant="outlined"
              label="Your best email"
              fullWidth
              type="email"
              inputProps={{ pattern: '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$' }}
              InputProps={{ classes: { root: classes.textField } }}
              InputLabelProps={{ classes: { root: classes.inputLabel } }}
            />
            <IconButton className={classes.button}>
              <Arrow />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default NewsletterSection
