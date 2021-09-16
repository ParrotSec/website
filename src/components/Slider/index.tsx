import { Children, Fragment, PropsWithChildren, useMemo } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import cls from 'classnames'
import { alpha, Theme } from '@material-ui/core/styles'

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
    column: {
      flexDirection: 'column'
    },
    row: {
      flexDirection: 'row'
    },
    root: {
      position: 'relative',
      display: 'flex',
      overflow: 'hidden',
      '&:hover $slider': {
        animationPlayState: 'paused'
      },
      '&::before, &::after': {
        content: '""',
        boxSizing: 'border-box',
        height: '100%',
        pointerEvents: 'none',
        position: 'absolute'
      }
    },
    horizontalRoot: {
      width: '100%',
      '&::before, &::after': {
        content: '""',
        boxSizing: 'border-box',
        height: '100%',
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        width: '23%!important',
        zIndex: 3
      },
      '&::before': {
        background: `transparent linear-gradient(90deg,${
          theme.palette.background.paper
        } 2.52%,${alpha(theme.palette.background.paper, 0)}) repeat scroll 0 0`,
        left: 0
      },
      '&::after': {
        background: `transparent linear-gradient(270deg,${
          theme.palette.background.paper
        } 2.52%,${alpha(theme.palette.background.paper, 0)}) repeat scroll 0 0`,
        right: 0
      }
    },
    verticalRoot: {
      height: 1,
      minHeight: '100%',
      '&::before, &::after': {
        content: '""',
        boxSizing: 'border-box',
        width: '100%',
        pointerEvents: 'none',
        position: 'absolute',
        left: 0,
        height: '23%!important',
        zIndex: 3
      },
      '&::before': {
        background: `transparent linear-gradient(180deg,${
          theme.palette.background.paper
        } 2.52%,${alpha(theme.palette.background.paper, 0)}) repeat scroll 0 0`,
        top: 0
      },
      '&::after': {
        background: `transparent linear-gradient(0deg,${
          theme.palette.background.paper
        } 2.52%,${alpha(theme.palette.background.paper, 0)}) repeat scroll 0 0`,
        bottom: 0
      }
    },
    slider: {
      boxSizing: 'border-box',
      alignItems: 'center',
      display: 'flex'
    },
    sliderHorizontal: {
      animation: '$scrollX 12s linear infinite'
    },
    sliderVertical: {
      animation: '$scrollY 12s linear infinite'
    },
    reversed: {
      animationDirection: 'reverse !important'
    },
    '@keyframes scrollX': {
      '0%': {
        transform: 'translateX(0)'
      },
      to: {
        transform: 'translateX(-100%)'
      }
    },
    '@keyframes scrollY': {
      '0%': {
        transform: 'translateY(0)'
      },
      to: {
        transform: 'translateY(-100%)'
      }
    },
    element: ({ spacing, orientation }) => ({
      margin:
        orientation === 'horizontal'
          ? `0 ${theme.spacing(spacing)}px`
          : `${theme.spacing(spacing)}px 0`
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
      <div
        className={cls(classes.root, {
          [classes.horizontalRoot]: orientation === 'horizontal',
          [classes.row]: orientation === 'horizontal',
          [classes.verticalRoot]: orientation === 'vertical',
          [classes.column]: orientation === 'vertical',
          ...(className
            ? {
                [className]: orientation === 'horizontal'
              }
            : {})
        })}
        {...rest}
      >
        {Array.from(Array(cloneFactor + 1), (_, i) => (
          <div
            key={`slider-cloned-${i}`}
            className={cls(classes.slider, {
              [classes.reversed]: reversed,
              [classes.sliderHorizontal]: orientation === 'horizontal',
              [classes.row]: orientation === 'horizontal',
              [classes.sliderVertical]: orientation === 'vertical',
              [classes.column]: orientation === 'vertical'
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
