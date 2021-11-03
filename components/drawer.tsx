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

const useBool = (b: boolean) => useState(b)

interface DrawerProps {
  menu: Menu
  open: ReturnType<typeof useBool>[0]
  setOpen: ReturnType<typeof useBool>[1]
  width: number
}

export function useDrawer(width = drawerWidth): Omit<DrawerProps, 'menu'> {
  const [open, setOpen] = useBool(false)
  return { open, setOpen, width }
}

const Drawer: React.FC<DrawerProps> = ({ menu, open, setOpen, width, children }) => {
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
            width,
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
            width,
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
