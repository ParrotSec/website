import { Box, Theme, alpha } from '@mui/material'
import { makeStyles } from '@mui/styles'
import cls from 'classnames'
import { Children, Fragment, PropsWithChildren, useMemo } from 'react'

type SliderProps = PropsWithChildren<{
  className?: string
  spacing?: number
  reversed?: boolean
  orientation?: 'horizontal' | 'vertical'
  cloneFactor?: number
}>

// Unfortunately passing props to classes is buggy and was solved only in Material v5
// So we have to go with cls approach
const useStyles = makeStyles<Theme, Required<Pick<SliderProps, 'spacing' | 'orientation'>>>(
  theme => ({
    root: ({ orientation }) => ({
      position: 'relative',
      display: 'flex',
      overflow: 'hidden',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      ...(orientation === 'horizontal'
        ? {
            width: '100%'
          }
        : {
            height: 1,
            minHeight: '100%'
          }),
      '&:hover $slider': {
        animationPlayState: 'paused'
      },
      '&::before, &::after': {
        content: '""',
        boxSizing: 'border-box',
        pointerEvents: 'none',
        position: 'absolute',
        zIndex: 3,
        ...(orientation === 'horizontal'
          ? {
              height: '100%',
              top: 0,
              width: '23%!important'
            }
          : {
              width: '100%',
              left: 0,
              height: '23%!important'
            })
      },
      '&::before': {
        background: `transparent linear-gradient(${orientation === 'horizontal' ? 90 : 180}deg,${
          theme.palette.background.paper
        } 2.52%,${alpha(theme.palette.background.paper, 0)}) repeat scroll 0 0`,
        ...(orientation === 'horizontal' ? { left: 0 } : { top: 0 })
      },
      '&::after': {
        background: `transparent linear-gradient(${orientation === 'horizontal' ? 270 : 0}deg,${
          theme.palette.background.paper
        } 2.52%,${alpha(theme.palette.background.paper, 0)}) repeat scroll 0 0`,
        ...(orientation === 'horizontal' ? { right: 0 } : { bottom: 0 })
      }
    }),
    slider: ({ orientation }) => ({
      boxSizing: 'border-box',
      alignItems: 'center',
      display: 'flex',
      animation: '$scroll 12s linear infinite',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column'
    }),
    reversed: {
      animationDirection: 'reverse !important'
    },
    '@keyframes scroll': {
      '0%': ({ orientation }) => ({
        transform: `translate${orientation === 'horizontal' ? 'X' : 'Y'}(0)`
      }),
      to: ({ orientation }) => ({
        transform: `translate${orientation === 'horizontal' ? 'X' : 'Y'}(-100%)`
      })
    },
    element: ({ spacing, orientation }) => ({
      margin: orientation === 'horizontal' ? theme.spacing(0, spacing) : theme.spacing(spacing, 0)
    })
  })
)

/* In order for slider to work properly, the content inside should fill the parent height by 100%.
 * First wrapper after fading out of the parent is placed back at the starting point meanwhile the
 * second wrapper enters the parent*/
const Slider = ({
  className,
  children,
  spacing = 4,
  reversed = false,
  orientation = 'horizontal',
  cloneFactor = 1,
  ...rest
}: SliderProps) => {
  const classes = useStyles({ spacing, orientation })
  const Wrapper = useMemo(() => (orientation === 'vertical' ? Box : Fragment), [])

  return (
    <Wrapper {...(orientation === 'vertical' ? { className } : {})}>
      <div className={cls(classes.root, className ?? '')} {...rest}>
        {Array.from(Array(cloneFactor + 1), (_, i) => (
          <div
            key={`slider-cloned-${i}`}
            className={cls(classes.slider, {
              [classes.reversed]: reversed
            })}
          >
            {Children.map(children, (el, j) => (
              <div key={`slider-child-${i}-${j}`} className={classes.element}>
                {el}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default Slider
