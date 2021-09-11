import React, { Children } from 'react'
import { Box, BoxProps, makeStyles } from '@material-ui/core'
import cls from 'classnames'

type InfiniteSliderProps = {
  className?: string
  height?: number
} & BoxProps

const useStyles = makeStyles({
  root: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%'
  },
  '@keyframes marquee': {
    '0%': { transform: 'translate(0, 0)' },
    '100%': { transform: 'translate(-100%, 0) translate(-64px, 0)' }
  },
  // Can't make it dynamic unfortunately :( https://github.com/mui-org/material-ui/issues/21011
  wrapper: {
    position: 'absolute',
    width: '100%',
    minWidth: 440,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    //width: 845,
    animation: `$marquee 8s linear infinite`
    /*[theme.breakpoints.down('sm')]: {
      width: 400
    }*/
  }
})

const InfiniteSlider = ({ className, height = 64, children, ...rest }: InfiniteSliderProps) => {
  const classes = useStyles()

  return (
    <Box className={cls(className, classes.root)} height={height} {...rest}>
      {Children.map(children, (el, i) => (
        <div
          className={classes.wrapper}
          key={`slider-wrapper-${i}`}
          style={{
            animationDelay: `-${(8 / Children.count(children)) * (Children.count(children) - i)}s`
          }}
        >
          <Box paddingLeft="100%" paddingRight={10}>
            {el}
          </Box>
        </div>
      ))}
    </Box>
  )
}

export default InfiniteSlider
