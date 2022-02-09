import { makeStyles } from '@mui/styles'
import { CSSProperties, ElementType } from 'react'

import PTooltip, { PTooltipProps } from 'components/Tooltip'

type PIconLinkProps = {
  href?: string
  style?: CSSProperties
  Icon: ElementType
  children: PTooltipProps['title']
  large?: boolean
} & Omit<PTooltipProps, 'title'>

const useStyles = makeStyles(theme => ({
  iconHolder: {
    display: 'flex',
    borderRadius: 6,
    boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.25)'
  },
  icon: {
    padding: 5,
    width: 64,
    height: 64,
    background: '#FFF',
    borderRadius: 6
  },
  bigIcon: {
    width: 84,
    height: 84,
    padding: 16,
    background: '#FFF',
    borderRadius: 6,
    boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.down('md')]: {
      width: 64,
      height: 64
    }
  }
}))

const PIconLink = ({ style, href, Icon, children, large, ...rest }: PIconLinkProps) => {
  const classes = useStyles()
  return (
    <PTooltip title={children} {...rest}>
      <a className={classes.iconHolder} href={href} style={style}>
        <Icon className={large ? classes.bigIcon : classes.icon} />
      </a>
    </PTooltip>
  )
}

export default PIconLink
