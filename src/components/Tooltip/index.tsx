import { emphasize, Tooltip, TooltipProps } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  tooltip: {
    backgroundColor: emphasize(theme.palette.background.paper, 0.1),
    color: theme.palette.text.primary,
    fontSize: 14,
    boxShadow:
      '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)'
  },
  arrow: {
    color: emphasize(theme.palette.background.paper, 0.1)
  }
}))

export type PTooltipProps = TooltipProps

const PTooltip = (props: PTooltipProps) => {
  const classes = useStyles()
  return <Tooltip {...props} arrow classes={{ tooltip: classes.tooltip, arrow: classes.arrow }} />
}

export default PTooltip
