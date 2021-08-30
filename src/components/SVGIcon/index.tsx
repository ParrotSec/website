import React, { ElementType } from 'react'
import { makeStyles, SvgIcon, SvgIconProps } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: 'auto',
    height: 'auto'
  }
})

const SVGIcon = (props: SvgIconProps & { component: ElementType }) => {
  const classes = useStyles()
  return (
    <SvgIcon
      {...props}
      classes={{
        root: classes.root
      }}
    />
  )
}

export default SVGIcon
