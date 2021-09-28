import { DialogTitle, IconButton, makeStyles, Typography } from '@material-ui/core'
import CloseIcon from 'containers/TeamContainers/PastContributorsSection/assets/Close.svg'

const useStyles = makeStyles(theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2.5),
    fill: theme.palette.type === 'dark' ? '#FFFFFF' : '#06043E'
  },
  dialogTitle: {
    padding: theme.spacing(2)
  }
}))

type DialogTitleProps = {
  title: string
  onClose: () => void
}

const CustomDialogTitle = ({ title, onClose, ...rest }: DialogTitleProps) => {
  const classes = useStyles()

  return (
    <DialogTitle className={classes.dialogTitle} {...rest}>
      <Typography variant="h2" align="center">
        {title}
      </Typography>
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

export default CustomDialogTitle