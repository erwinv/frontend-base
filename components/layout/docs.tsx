import React from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
} from '@mui/material'
import {
  Menu as MenuIcon,
} from '@mui/icons-material'
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

  const contentWidth = 'xl'

  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          width: { lg: `calc(100% - ${drawerProps.width}px)` },
          ml: { lg: `${drawerProps.width}px` },
        }}
      >
        <Container maxWidth={contentWidth}>
          <Toolbar variant='dense'>
            <IconButton
              color='inherit'
              onClick={() => drawerProps.setOpen(true)}
              edge='start'
              sx={{
                display: { lg: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            {topNavLinks}
          </Toolbar>
        </Container>
      </AppBar>
      <AppDrawer menu={sideNavMenu} variant='dense' {...drawerProps}>
        {themeSwitch}
      </AppDrawer>
      <Box
        sx={{
          width: { lg: `calc(100% - ${drawerProps.width}px)` },
          ml: { lg: `${drawerProps.width}px` },
        }}
      >
        <Container maxWidth={contentWidth}>
          <Toolbar variant='dense' />
          <Box component='main'>
            {children}
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default DocsLayout
