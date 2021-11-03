import React, { useState, useMemo } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider, EmotionCache } from '@emotion/react'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Switch,
  Toolbar,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { createTheme } from '../styles/theme'
import cache from '../styles/cache'
import AppDrawer, { useDrawer } from '../components/drawer'
import { NextLinkComposed } from '../components/link'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({ Component: Page, pageProps, emotionCache }: MyAppProps) {
  const [isDarkMode, setDarkMode] = useState(false)
  const theme = useMemo(() => createTheme(isDarkMode ? 'dark' : 'light'), [isDarkMode])
  
  const drawerProps = useDrawer()

  const buttonLinks = [
    ['/', 'Home'],
    ['/howto', 'Guides'],
    ['/docs', 'Docs'],
  ].map(([pathname, label]) => (
    <Button key={label}
      color='inherit'
      component={NextLinkComposed}
      to={{ pathname }}
    >{label}</Button>
  ))

  const drawerMenu = [
    { title: 'foo' },
    { title: 'bar' },
    { title: 'baz' },
  ]

  return (
    <CacheProvider value={emotionCache ?? cache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
                mr: 2,
                display: { sm: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            {buttonLinks}
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            width: { sm: `calc(100% - ${drawerProps.width}px)` },
            ml: { sm: `${drawerProps.width}px` },
            display: 'flex',
          }}
        >
          <AppDrawer menu={drawerMenu} {...drawerProps}>
            <Switch
              checked={isDarkMode}
              onChange={(_, isDarkMode) => setDarkMode(isDarkMode)}
            />
          </AppDrawer>
          <Box
            component='main'
            sx={{ flexGrow: 1 }}
          >
            <Page {...pageProps} />
          </Box>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  )
}

export type MyAppType = typeof MyApp
export default MyApp
