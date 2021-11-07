import { useState } from 'react'
import {
  Drawer as MuiDrawer,
  Box,
  Divider,
  Toolbar,
  SwipeableDrawer,
  ToolbarProps,
} from '@mui/material'
import { NavMenu, Menu } from './menu'

export const drawerWidth = 240

const useBool = (b: boolean) => useState(b)

interface DrawerProps {
  menu: Menu
  open: ReturnType<typeof useBool>[0]
  setOpen: ReturnType<typeof useBool>[1]
  width: number
  variant?: ToolbarProps['variant']
}

export function useDrawer(width = drawerWidth): Omit<DrawerProps, 'menu'> {
  const [open, setOpen] = useBool(false)
  return { open, setOpen, width }
}

const Drawer: React.FC<DrawerProps> = ({ menu, open, setOpen, width, variant, children }) => {
  const drawer = (
    <>
      <Toolbar variant={variant}>
        <Box sx={{ flexGrow: 1}} />
        {children}
      </Toolbar>
      <Divider />
      <NavMenu mainMenu={menu} dense={variant === 'dense'} />
    </>
  )

  return (
    <>
      <MuiDrawer
        variant='permanent'
        sx={{
          display: { xs: 'none', lg: 'block' },
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
          display: { xs: 'block', lg: 'none' },
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
