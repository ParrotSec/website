import { emphasize, makeStyles, Tooltip, TooltipProps } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  tooltip: {
    backgroundColor: emphasize(theme.palette.background.paper, 0.1),
    color: theme.palette.text.primary
  },
  arrow: {
    color: emphasize(theme.palette.background.paper, 0.1)
  }
}))

export type PTooltipProps = TooltipProps

const PTooltip = (props: PTooltipProps) => {
  const classes = useStyles()
  return (
    <Tooltip
      {...props}
      arrow
      classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
    ></Tooltip>
  )
}

export default PTooltip
