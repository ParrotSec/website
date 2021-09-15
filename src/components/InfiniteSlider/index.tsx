import React, { Children, PropsWithChildren, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import cls from 'classnames'
import { Theme } from '@material-ui/core/styles'
import { useMeasure } from 'react-use'

type InfiniteSliderProps = PropsWithChildren<{
  className?: string
  spacing?: number
}>

const useStyles = makeStyles<Theme, Required<Pick<InfiniteSliderProps, 'spacing'>>>(theme => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    minHeight: 50,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    '&:hover $slider': {
      animationPlayState: 'paused'
    }
  },
  slider: {
    alignItems: 'center',
    animation: '$scroll 12s linear infinite',
    display: 'flex',
    flexDirection: 'row'
  },
  '@keyframes scroll': {
    '0%': {
      transform: 'translateX(0)'
    },
    to: {
      transform: 'translateX(-100%)'
    }
  },
  element: ({ spacing }) => ({
    margin: `0 ${theme.spacing(spacing)}px`
  })
}))

/* In order for slider to work properly, the content inside should fill the parent width by 100%.
 * First wrapper after fading out of the parent is placed back at the starting point meanwhile the
 * second wrapper enters the parent*/
const InfiniteSlider = ({ className, children, spacing = 4, ...rest }: InfiniteSliderProps) => {
  const classes = useStyles({ spacing })
  const [rootRef, { width: rootWidth }] = useMeasure<HTMLDivElement>()
  const [boxRef, { width: boxWidth }] = useMeasure<HTMLDivElement>()
  const [cloneFactor, setCloneFactor] = useState(0)

  // if childs do not fill the element we need to copy it over
  useEffect(() => {
    console.log(rootWidth, boxWidth, Math.ceil(rootWidth / boxWidth))
    if (rootWidth && boxWidth) setCloneFactor(Math.ceil(rootWidth / boxWidth))
  }, [rootWidth, boxWidth])

  return (
    <div className={cls(className, classes.root)} ref={rootRef} {...rest}>
      <div className={classes.slider} ref={boxRef}>
        {Children.map(children, (el, i) => (
          <div key={`slider-child-${i}`} className={classes.element}>
            {el}
          </div>
        ))}
      </div>
      {cloneFactor > 0 &&
        Array.from(Array(cloneFactor), (_, i) => (
          <div key={`slider-cloned-${i}`} className={classes.slider}>
            {Children.map(children, (el, j) => (
              <div key={`slider-child-${i}-${j}`} className={classes.element}>
                {el}
              </div>
            ))}
          </div>
        ))}
    </div>
  )
}

export default InfiniteSlider
