import { useState } from 'react'
import {
  Drawer as MuiDrawer,
  Box,
  Divider,
  Toolbar,
  SwipeableDrawer,
} from '@mui/material'
import { NavMenu, Menu } from './menu'

export const drawerWidth = 240

interface DrawerProps {
  menu: Menu
}

const Drawer: React.FC<DrawerProps> = ({ menu, children }) => {
  const [open, setOpen] = useState(false)

  const drawer = (
    <>
      <Toolbar>
        <Box sx={{ flexGrow: 1}} />
        {children}
      </Toolbar>
      <Divider />
      <NavMenu mainMenu={menu} />
    </>
  )

  return (
    <>
      <MuiDrawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </MuiDrawer>
      <SwipeableDrawer
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        {drawer}
      </SwipeableDrawer>
    </>
  )
}

export default Drawer
