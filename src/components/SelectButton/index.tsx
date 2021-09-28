import { ArrowDropDown } from '@mui/icons-material'
import {
  ButtonProps,
  MenuItem,
  MenuItemProps,
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import cls from 'classnames'
import { createContext, ReactNode, useContext, useRef, useState } from 'react'

import PButton from 'components/PButton'

type SelectButtonProps = {
  label: string
  children: ReactNode
} & ButtonProps

const SelectButtonContext = createContext(() => {
  console.log('yikes')
})

const useStyles = makeStyles(theme => ({
  icon: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.short
    })
  },
  expanded: {
    transform: 'rotate(180deg)'
  },
  menuItem: {},
  popper: {
    '& li:first-child': {
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2)
    },
    '& li:last-child': {
      borderBottomLeftRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2)
    },
    '& li:first-child > .MuiTouchRipple-root': {
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2)
    },
    '& li:last-child > .MuiTouchRipple-root': {
      borderBottomLeftRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2)
    }
  }
}))

export const SelectButtonItem = ({ onClick, children, ...rest }: Omit<MenuItemProps, 'button'>) => {
  const handleClose = useContext(SelectButtonContext)
  return (
    <MenuItem
      onClick={e => {
        if (onClick) onClick(e)
        handleClose()
      }}
      {...rest}
    >
      {children}
    </MenuItem>
  )
}

const SelectButton = ({ children, label, ...buttonProps }: SelectButtonProps) => {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<SVGSVGElement>(null)
  const classes = useStyles()

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  const handleMenuItemClick = () => {
    setOpen(false)
  }

  return (
    <>
      <div>
        <PButton
          onClick={handleToggle}
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          fullWidth
          endIcon={
            <ArrowDropDown
              className={cls(classes.icon, { [classes.expanded]: open })}
              ref={anchorRef}
            />
          }
          {...buttonProps}
        >
          {label}
        </PButton>
      </div>
      <Popper
        className={classes.popper}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 2000 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  <SelectButtonContext.Provider value={handleMenuItemClick}>
                    {children}
                  </SelectButtonContext.Provider>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default SelectButton
