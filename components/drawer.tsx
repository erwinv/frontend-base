import { Drawer as MuiDrawer, Box, Divider, Toolbar } from '@mui/material'
import { NavMenu, Menu } from './menu'

export const drawerWidth = 240

interface DrawerProps {
  menu: Menu
}

const Drawer: React.FC<DrawerProps> = ({ menu, children }) => {
  return (
    <MuiDrawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      anchor='left'
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1}} />
        {children}
      </Toolbar>
      <Divider />
      <NavMenu mainMenu={menu} />
    </MuiDrawer>
  )
}

export default Drawer
