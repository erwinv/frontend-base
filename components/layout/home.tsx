import React from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
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

  const contentWidth = 'lg'

  return (
    <>
      <AppBar position='sticky'>
        <Container maxWidth={contentWidth}>
          <Toolbar>
            {themeSwitch}
            <Box sx={{ flexGrow: 1 }} />
            {topNavLinks}
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth={contentWidth}>
        <Box component='main'>
          {children}
        </Box>
      </Container>
    </>
  )
}

export default HomeLayout
