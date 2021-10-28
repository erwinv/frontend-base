import { kebabCase } from 'lodash'
import { useState } from 'react'
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

interface MenuItem {
  title: string
  subMenu?: SubMenu
}

export type Menu = MenuItem[]
type SubMenu = Omit<MenuItem, 'subMenu'>[]

interface NavMenuProps {
  mainMenu: Menu
}

export const NavMenu: React.FC<NavMenuProps> = ({ mainMenu }) => {
  return (
    <List component='nav'>
      {mainMenu.map(menuItem => <NavMenuItem key={kebabCase(menuItem.title)} menuItem={menuItem} />)}
    </List>
  )
}

interface NavSubMenuProps {
  menuItem: MenuItem
}

const NavMenuItem: React.FC<NavSubMenuProps> = ({ menuItem }) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(open => !open)

  const hasSubMenu = !!menuItem.subMenu

  return (
    <>
      <ListItemButton onClick={toggleOpen}>
        <ListItemText primary={menuItem.title} />
        {hasSubMenu && (
          open ? <ExpandLess /> : <ExpandMore />
        )}
      </ListItemButton>
      {hasSubMenu && (
        <Collapse in={open} unmountOnExit>
          <List component='div' disablePadding>
            {menuItem.subMenu.map(menuItem => (
              <ListItemButton key={kebabCase(menuItem.title)} sx={{ pl: 4 }}>
                <ListItemText primary={menuItem.title} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  )
}
