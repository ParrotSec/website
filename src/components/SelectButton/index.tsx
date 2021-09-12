import React, { createContext, ReactNode, useContext, useRef, useState } from 'react'
import { ButtonProps, makeStyles, MenuItem, MenuItemProps } from '@material-ui/core'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import { ArrowDropDown } from '@material-ui/icons'
import cls from 'classnames'
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

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
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
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
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
