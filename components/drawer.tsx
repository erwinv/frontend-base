import { Drawer as MuiDrawer, Divider, Toolbar } from '@mui/material'
import { NavMenu, Menu } from './menu'

export const drawerWidth = 240

interface DrawerProps {
  menu: Menu
}

const Drawer: React.FC<DrawerProps> = ({ menu }) => {
  return (
    <MuiDrawer
      variant='permanent'
      sx={{
        display: { sm: 'none', md: 'block' },
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      anchor='left'
    >
      <Toolbar />
      <Divider />
      <NavMenu mainMenu={menu} />
    </MuiDrawer>
  )
}

export default Drawer
