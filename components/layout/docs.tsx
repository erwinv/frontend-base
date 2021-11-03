import React from 'react'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import AppDrawer, { useDrawer } from '../drawer'
import { NextLinkComposed } from '../link'
import { LayoutType } from './'
import { LINKS as TOPNAV_PAGE_LINKS } from '../nav'

const DocsLayout: LayoutType = ({ themeSwitch, children }) => {
  const drawerProps = useDrawer()

  const topNavLinks = TOPNAV_PAGE_LINKS.map(([pathname, label]) => (
    <Button key={label}
      color='inherit'
      component={NextLinkComposed}
      to={{ pathname }}
    >{label}</Button>
  ))

  // TODO get from Page
  const sideNavMenu = [
    { title: 'foo' },
    { title: 'bar' },
    { title: 'baz' },
  ]

  return (
    <>
      <AppBar
        position='sticky'
        sx={{
          width: { sm: `calc(100% - ${drawerProps.width}px)` },
          ml: { sm: `${drawerProps.width}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            onClick={() => drawerProps.setOpen(true)}
            edge='start'
            sx={{
              display: { sm: 'none' },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          {topNavLinks}
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          width: { sm: `calc(100% - ${drawerProps.width}px)` },
          ml: { sm: `${drawerProps.width}px` },
          display: 'flex',
        }}
      >
        <AppDrawer menu={sideNavMenu} {...drawerProps}>
          {themeSwitch}
        </AppDrawer>
        <Box
          component='main'
          sx={{ flexGrow: 1 }}
        >
          {children}
        </Box>
      </Box>
    </>
  )
}

export default DocsLayout
