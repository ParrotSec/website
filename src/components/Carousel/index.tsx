/** https://github.com/Learus/react-material-ui-carousel but in TypeScript and without relative positioning
 * This would be nice to optimize but it's a low-priority task at the current stage of fast development
 **/

/* eslint-disable @typescript-eslint/no-empty-function */
import React, { AriaAttributes, Children, Component, ReactNode, SyntheticEvent } from 'react'
import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'
import IconButton from '@material-ui/core/IconButton'
import { alpha, createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import autoBind from 'auto-bind'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { useSwipeable } from 'react-swipeable'
import { Box } from '@material-ui/core'

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    indicators: {
      textAlign: 'center',
      display: 'flex',
      gap: '12px',
      height: 'min-content',
      alignSelf: 'center',
      justifyContent: 'center'
    },
    indicator: {
      cursor: 'pointer',
      transition: '200ms',
      padding: 3,
      '&:hover': {
        color: theme.palette.text.primary
      },
      '&:active': {
        color: theme.palette.text.primary
      },
      color: alpha(theme.palette.text.primary, 0.5)
    },
    indicatorIcon: {
      fontSize: 10
    },
    active: {
      color: theme.palette.text.primary,
      backgroundColor: alpha(theme.palette.text.primary, 0.2)
    },
    buttonWrapper: {
      backgroundColor: 'transparent',
      '&:hover': {
        '& $button': {
          filter: 'brightness(120%)',
          opacity: '0.4'
        }
      }
    },
    fullHeightHoverWrapper: {
      height: '100%', // This is 100% - indicator height - indicator margin
      top: 0
    },
    buttonVisible: {
      opacity: 1
    },
    buttonHidden: {
      opacity: 0
    },
    button: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      width: 40,
      height: 40,
      fontSize: '30px',
      transition: '200ms',
      cursor: 'pointer',
      '&:hover': {
        opacity: '0.6 !important'
      }
    },
    next: {},
    prev: {}
  })

interface CarouselNavProps extends AriaAttributes {
  className?: string
  style?: React.CSSProperties
}

type CarouselProps = {
  children?: ReactNode

  /** Defines custom class name(s), that will be added to Carousel element **/
  className?: string

  /** Defines which child (assuming there are more than 1 children) will be displayed. Next and Previous Buttons as well as Indicators will work normally after the first render. When this prop is updated the carousel will display the chosen child. Use this prop to programmatically set the active child. If (index > children.length) then if (strictIndexing) index = last element. index */
  index?: number

  /** Defines whether index can be bigger than children length */
  strictIndexing?: boolean

  /** Defines if the component will auto scroll between children */
  autoPlay?: boolean

  /** Defines if auto scrolling will continue while mousing over carousel */
  stopAutoPlayOnHover?: boolean

  /** Defines the interval in ms between active child changes (autoPlay) */
  interval?: number

  /** Defines the animation style of the Carousel  */
  animation?: 'fade' | 'slide'

  /** Defines whether the animation from the last child towards the first will be reverse. Same for the animation from the first child towards the last */
  reverseEdgeAnimationDirection?: boolean

  /** Defines the duration of the animations. For more information refer to the [Material UI Documentation for Transitions](https://material-ui.com/components/transitions/) */
  timeout?: { appear?: number; enter?: number; exit?: number } | number

  /** Defines if swiping left and right (in touch devices) triggers `next` and `prev` behaviour */
  swipe?: boolean

  /** Defines the existence of bullet indicators */
  indicators?: boolean

  /** Defines if the next/previous buttons will always be visible or not */
  navButtonsAlwaysVisible?: boolean

  /**	Defines if the next/previous buttons will always be invisible or not */
  navButtonsAlwaysInvisible?: boolean

  /** Defines if the next button will be visible on the last slide, and the previous button on the first slide. Auto-play also stops on the last slide. Indicators continue to work normally. */
  cycleNavigation?: boolean

  /** Defines if the the next/previous button wrappers will cover the full height of the Item element and show buttons on full height hover */
  fullHeightHover?: boolean

  /** Used to customize the div surrounding the nav `IconButtons`. Use this to position the buttons onto, below, outside, e.t.c. the carousel. */
  navButtonsWrapperProps?: CarouselNavProps

  /** Used to customize the actual nav `IconButton`s */
  navButtonsProps?: CarouselNavProps

  /** Defines the element inside the nav "next" `IconButton`. Refer to [MaterialUI Button Documentation](https://material-ui.com/components/buttons/) for more examples.
   * It is advised to use Material UI Icons, but you could use any element (`<img/>`, `<div/>`, ...) you like. */
  NextIcon?: ReactNode

  /** Defines the element inside the nav "prev" `IconButton`. Refer to [MaterialUI Button Documentation](https://material-ui.com/components/buttons/) for more examples.
   * It is advised to use Material UI Icons, but you could use any element (`<img/>`, `<div/>`, ...) you like. */
  PrevIcon?: ReactNode

  /** Gives full control of the nav buttons. Should return a button that uses the given `onClick`.
   * Works in tandem with all other customization options (`navButtonsProps`, `navButtonsWrapperProps`, `navButtonsAlwaysVisible`, `navButtonsAlwaysInvisible`, `fullHeightHover` ...).
   * Refer to the [example section](README.md) for more information */
  NavButton?: ({
    onClick,
    next,
    className,
    style,
    prev
  }: {
    onClick: (e: SyntheticEvent) => unknown
    className: string
    style: React.CSSProperties
    next: boolean
    prev: boolean
  }) => ReactNode

  /** Used to customize the indicators container/wrapper.
   * Type: `{className: string, style: React.CSSProperties}` */
  indicatorContainerProps?: CarouselNavProps

  /** Used to customize the **non-active** indicator `IconButton`s.
   * Type: `{className: string, style: React.CSSProperties}` */
  indicatorIconButtonProps?: CarouselNavProps

  /** Used to customize the **active** indicator `IconButton`.
   * Type: `{className: string, style: React.CSSProperties}` */
  activeIndicatorIconButtonProps?: CarouselNavProps

  /** Function that is called **after** internal `setActive()` method. The `setActive()` method is called when the next and previous buttons are pressed, when an indicator is pressed, or when the `index` prop changes. First argument is the child **we are going to display**, while the second argument is the child **that was previously displayed**.*/
  onChange?: (active?: number, prevActive?: number) => unknown

  /** Defines if `onChange` prop will be called when the carousel renders for the first time. In `componentDidMount` */
  changeOnFirstRender?: boolean

  /** Function that is called **after** internal `next()` method. First argument is the child **we are going to display**, while the second argument is the child **that was previously displayed** */
  next?: (active?: number, prevActive?: number) => unknown

  /** Function that is called **after** internal `prev()` method. First argument is the child **we are going to display**, while the second argument is the child **that was previously displayed** */
  prev?: (active?: number, prevActive?: number) => unknown

  /** Defines the element inside the indicator `IconButton`s Refer to [MaterialUI Button Documentation](https://material-ui.com/components/buttons/) for more examples.
   * It is advised to use Material UI Icons, but you could use any element (`<img/>`, `<div/>`, ...) you like.*/
  IndicatorIcon?: ReactNode
} & WithStyles<typeof styles>

const sanitizeNavProps = (props: CarouselNavProps) => {
  const { className, style, ...rest } = props || {}

  return props !== undefined
    ? {
        style: props.style !== undefined ? props.style : {},
        className: props.className !== undefined ? props.className : '',
        ...rest
      }
    : { style: {}, className: '', ...rest }
}

const sanitizeProps = (props: CarouselProps) => {
  const animation = props.animation ?? 'fade'
  const timeout = props.timeout ? props.timeout : animation === 'fade' ? 500 : 200
  return {
    className: props.className ?? '',
    children: props.children ?? [],

    index: props.index ?? 0,
    strictIndexing: props.strictIndexing ?? true,

    autoPlay: props.autoPlay ?? true,
    stopAutoPlayOnHover: props.stopAutoPlayOnHover ?? true,
    interval: props.interval ?? 4000,

    animation: animation,
    reverseEdgeAnimationDirection: props.reverseEdgeAnimationDirection ?? true,
    timeout: timeout,

    swipe: props.swipe ?? true,

    navButtonsAlwaysInvisible: props.navButtonsAlwaysInvisible ?? false,
    navButtonsAlwaysVisible: props.navButtonsAlwaysVisible ?? true,
    cycleNavigation: props.cycleNavigation ?? true,
    fullHeightHover: props.fullHeightHover ?? false,
    navButtonsWrapperProps: sanitizeNavProps(props.navButtonsWrapperProps),
    navButtonsProps: sanitizeNavProps(props.navButtonsProps),
    NavButton: props.NavButton,

    NextIcon: props.NextIcon ?? <NavigateNextIcon style={{ fontSize: 16, opacity: 0.5 }} />,
    PrevIcon: props.PrevIcon ?? <NavigateBeforeIcon style={{ fontSize: 16, opacity: 0.5 }} />,

    indicators: props.indicators ?? true,
    indicatorContainerProps: sanitizeNavProps(props.indicatorContainerProps),
    indicatorIconButtonProps: sanitizeNavProps(props.indicatorIconButtonProps),
    activeIndicatorIconButtonProps: sanitizeNavProps(props.activeIndicatorIconButtonProps),
    IndicatorIcon: props.IndicatorIcon,

    onChange: props.onChange ?? (() => {}),
    changeOnFirstRender: props.changeOnFirstRender ?? false,
    next: props.next ?? (() => {}),
    prev: props.prev ?? (() => {}),
    ...props
  }
}

type CarouselState = {
  active: number
  prevActive: number
  displayed: number
  timer: ReturnType<typeof setTimeout>
}

class Carousel extends Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props)
    autoBind(this)

    this.state = {
      active: 0,
      prevActive: 0,
      displayed: 0,
      timer: null
    }
  }

  componentDidMount() {
    const { index, changeOnFirstRender } = sanitizeProps(this.props)
    this.setActive(index, undefined, changeOnFirstRender)

    this.start()
  }

  componentWillUnmount() {
    this.stop()
  }

  componentDidUpdate(prevProps: CarouselProps) {
    prevProps = sanitizeProps(prevProps)
    const { autoPlay, interval, children, index } = sanitizeProps(this.props)

    if (autoPlay !== prevProps.autoPlay || interval !== prevProps.interval) {
      this.reset()
    }

    if (Children.count(children) !== Children.count(prevProps.children)) {
      this.setActive(index)
    }

    if (prevProps.index !== index) {
      this.setActive(index)
    }
  }

  stop() {
    if (this.state.timer) {
      clearInterval(this.state.timer)
      this.setState({ timer: null })
    }
  }

  start() {
    const { autoPlay, interval } = sanitizeProps(this.props)
    if (autoPlay) {
      this.setState({ timer: setInterval(this.next, interval) })
    }
  }

  reset() {
    const { autoPlay } = sanitizeProps(this.props)
    this.stop()

    if (autoPlay) {
      this.start()
    }
  }

  setActive(
    index: number,
    callback = (_index: number, _prevActive: number) => {},
    runCallbacks = true
  ) {
    const { onChange, timeout, children, strictIndexing } = sanitizeProps(this.props)

    if (Array.isArray(children)) {
      if (strictIndexing && index > children.length - 1) index = children.length - 1
      if (strictIndexing && index < 0) index = 0
    } else {
      index = 0
    }

    const prevActive = this.state.active

    this.setState(
      {
        active: index,
        prevActive: prevActive,
        displayed: prevActive
      },
      this.reset
    )

    setTimeout(
      () => {
        this.setState(
          {
            displayed: index
          },
          () => {
            if (runCallbacks) {
              // Call user defined callbacks
              callback(index, prevActive)
              onChange(index, prevActive)
            }
          }
        )
      },
      typeof timeout === 'object' ? timeout.exit : timeout
    )
  }

  next(event: SyntheticEvent) {
    const { children, next, cycleNavigation } = sanitizeProps(this.props)

    const nextActive =
      this.state.active + 1 > Children.count(children) - 1
        ? cycleNavigation
          ? 0
          : this.state.active
        : this.state.active + 1

    this.setActive(nextActive, next)

    if (event) event.stopPropagation()
  }

  prev(event: SyntheticEvent) {
    const { children, prev, cycleNavigation } = sanitizeProps(this.props)

    const nextActive =
      this.state.active - 1 < 0
        ? cycleNavigation
          ? Children.count(children) - 1
          : this.state.active
        : this.state.active - 1

    this.setActive(nextActive, prev)

    if (event) event.stopPropagation()
  }

  render() {
    const {
      children,
      className,

      stopAutoPlayOnHover,
      animation,
      reverseEdgeAnimationDirection,
      timeout,
      swipe,

      navButtonsAlwaysInvisible,
      navButtonsAlwaysVisible,
      cycleNavigation,
      fullHeightHover,
      navButtonsProps,
      navButtonsWrapperProps,
      NavButton,

      NextIcon,
      PrevIcon,

      indicators,
      indicatorContainerProps,
      indicatorIconButtonProps,
      activeIndicatorIconButtonProps,
      IndicatorIcon
    } = sanitizeProps(this.props)

    const classes = this.props.classes
    const { className: buttonsClass, style: buttonsStyle, ...buttonsProps } = navButtonsProps
    const {
      className: buttonsWrapperClass,
      style: buttonsWrapperStyle,
      ...buttonsWrapperProps
    } = navButtonsWrapperProps

    const buttonVisibilityClassValue = `${
      navButtonsAlwaysVisible ? classes.buttonVisible : classes.buttonHidden
    }`
    const buttonCssClassValue = `${classes.button} ${buttonVisibilityClassValue} ${buttonsClass}`
    const buttonWrapperCssClassValue = `${classes.buttonWrapper} ${
      fullHeightHover ? classes.fullHeightHoverWrapper : ''
    } ${buttonsWrapperClass}`

    const compareActiveDisplayed = () => {
      if (this.state.active === 0 && this.state.prevActive === Children.count(children) - 1) {
        return !reverseEdgeAnimationDirection
      }

      if (this.state.active === Children.count(children) - 1 && this.state.prevActive === 0) {
        return reverseEdgeAnimationDirection
      }

      if (this.state.active > this.state.prevActive) {
        return true
      }

      return false
    }

    const showButton = (next = true) => {
      if (cycleNavigation) return true

      if (next && this.state.active + 1 > Children.count(children) - 1) return false
      if (!next && this.state.active - 1 < 0) return false

      return true
    }

    return (
      <div
        className={`${classes.root} ${className ? className : ''}`}
        onMouseOver={() => {
          stopAutoPlayOnHover && this.stop()
        }}
        onMouseOut={() => {
          stopAutoPlayOnHover && this.reset()
        }}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => {
            return (
              <CarouselItem
                key={`carousel-item${index}`}
                display={index === this.state.displayed}
                active={index === this.state.active}
                isNext={compareActiveDisplayed()}
                child={child}
                animation={animation}
                timeout={timeout}
                swipe={swipe}
                next={this.next}
                prev={this.prev}
              />
            )
          })
        ) : (
          <CarouselItem
            key={`carousel-item0`}
            display={true}
            active={true}
            child={children}
            animation={animation}
            timeout={timeout}
          />
        )}
        <Box display="flex" style={{ gap: 20 }} marginTop="15px" justifyContent="center">
          {!navButtonsAlwaysInvisible && showButton(false) && (
            <div
              className={`${buttonWrapperCssClassValue} ${classes.prev}`}
              style={buttonsWrapperStyle}
              {...buttonsWrapperProps}
            >
              {NavButton !== undefined ? (
                NavButton({
                  onClick: this.prev,
                  className: buttonCssClassValue,
                  style: navButtonsProps.style,
                  next: false,
                  prev: true,
                  ...buttonsProps
                })
              ) : (
                <IconButton
                  className={`${buttonCssClassValue}`}
                  onClick={this.prev}
                  aria-label="Previous"
                  style={navButtonsProps.style}
                  {...buttonsProps}
                >
                  {PrevIcon}
                </IconButton>
              )}
            </div>
          )}
          {indicators ? (
            <Indicators
              classes={classes}
              length={Children.count(children)}
              active={this.state.active}
              press={this.setActive}
              indicatorContainerProps={indicatorContainerProps}
              indicatorIconButtonProps={indicatorIconButtonProps}
              activeIndicatorIconButtonProps={activeIndicatorIconButtonProps}
              IndicatorIcon={IndicatorIcon}
            />
          ) : null}
          {!navButtonsAlwaysInvisible && showButton(true) && (
            <div
              className={`${buttonWrapperCssClassValue} ${classes.next}`}
              style={buttonsWrapperStyle}
              {...buttonsWrapperProps}
            >
              {NavButton !== undefined ? (
                NavButton({
                  onClick: this.next,
                  className: buttonCssClassValue,
                  style: buttonsStyle,
                  next: true,
                  prev: false,
                  ...buttonsProps
                })
              ) : (
                <IconButton
                  className={`${buttonCssClassValue}`}
                  onClick={this.next}
                  aria-label="Next"
                  style={buttonsStyle}
                  {...buttonsProps}
                >
                  {NextIcon}
                </IconButton>
              )}
            </div>
          )}
        </Box>
      </div>
    )
  }
}

type CarouselItemProps = {
  active: boolean
  isNext?: boolean
  display: boolean
  child: ReactNode
  next?: (event?: SyntheticEvent) => unknown
  prev?: (event?: SyntheticEvent) => unknown
} & Pick<CarouselProps, 'swipe' | 'animation' | 'timeout'>

function CarouselItem(props: CarouselItemProps) {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => props.next(),
    onSwipedRight: () => props.prev()
  })

  return props.display ? (
    <div {...(props.swipe ? swipeHandlers : {})} className="CarouselItem">
      {props.animation === 'slide' ? (
        <Slide
          direction={
            props.active ? (props.isNext ? 'left' : 'right') : props.isNext ? 'right' : 'left'
          }
          in={props.active}
          timeout={props.timeout}
        >
          <div>{props.child}</div>
        </Slide>
      ) : (
        <Fade in={props.active} timeout={props.timeout}>
          <div>{props.child}</div>
        </Fade>
      )}
    </div>
  ) : null
}

type IndicatorsProps = {
  active: number
  press: (active: number, callback?: CallableFunction, runCallbacks?: boolean) => unknown
  length: number
} & Pick<
  CarouselProps,
  | 'IndicatorIcon'
  | 'indicatorIconButtonProps'
  | 'activeIndicatorIconButtonProps'
  | 'indicatorContainerProps'
> &
  WithStyles<typeof styles>

function Indicators(props: IndicatorsProps) {
  const classes = props.classes
  const IndicatorIcon =
    props.IndicatorIcon !== undefined ? (
      props.IndicatorIcon
    ) : (
      <FiberManualRecordIcon className={classes.indicatorIcon} />
    )
  const {
    className: indicatorIconButtonClass,
    style: indicatorIconButtonStyle,
    ...indicatorIconButtonProps
  } = props.indicatorIconButtonProps
  const {
    className: activeIndicatorIconButtonClass,
    style: activeIndicatorIconButtonStyle,
    ...activeIndicatorIconButtonProps
  } = props.activeIndicatorIconButtonProps

  const indicators = []
  for (let i = 0; i < props.length; i++) {
    const className =
      i === props.active
        ? `${classes.indicator} ${indicatorIconButtonClass} ${classes.active} ${activeIndicatorIconButtonClass}`
        : `${classes.indicator} ${indicatorIconButtonClass}`

    const style =
      i === props.active
        ? Object.assign({}, indicatorIconButtonStyle, activeIndicatorIconButtonStyle)
        : indicatorIconButtonStyle

    const restProps =
      i === props.active
        ? Object.assign({}, indicatorIconButtonProps, activeIndicatorIconButtonProps)
        : indicatorIconButtonProps

    if (restProps['aria-label'] === undefined) restProps['aria-label'] = 'carousel indicator'

    const item = (
      <IconButton
        key={i}
        className={className}
        style={style}
        onClick={() => {
          props.press(i)
        }}
        size="small"
        {...restProps}
        // Always add the index to any given aria label
        aria-label={`${restProps['aria-label']} ${i + 1}`}
      >
        {IndicatorIcon}
      </IconButton>
    )

    indicators.push(item)
  }

  const {
    className: indicatorContainerClass,
    style: indicatorContainerStyle,
    ...indicatorContainerProps
  } = props.indicatorContainerProps

  return (
    <div
      className={`${classes.indicators} ${indicatorContainerClass}`}
      style={indicatorContainerStyle}
      {...indicatorContainerProps}
    >
      {indicators}
    </div>
  )
}

export default withStyles(styles)(Carousel)
