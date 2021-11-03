import React from 'react'
import {
  AppBar,
  Box,
  Button,
  Toolbar,
} from '@mui/material'
import { NextLinkComposed } from '../link'
import { LINKS as TOPNAV_PAGE_LINKS } from '../nav'

interface HomeLayoutProps {
  themeSwitch: React.ReactElement
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ themeSwitch, children }) => {
  const topNavLinks = TOPNAV_PAGE_LINKS.map(([pathname, label]) => (
    <Button key={label}
      color='inherit'
      component={NextLinkComposed}
      to={{ pathname }}
    >{label}</Button>
  ))

  return (
    <>
      <AppBar
        position='sticky'
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          {topNavLinks}
        </Toolbar>
      </AppBar>
      <Box
        component='main'
      >
        {children}
      </Box>
    </>
  )
}

export default HomeLayout
