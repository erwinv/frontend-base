import React, { useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { Box, AppBar, Toolbar, Button, Switch } from '@mui/material'
import { createTheme } from '../styles/theme'
import cache from '../styles/cache'
import Drawer, { drawerWidth } from '../components/drawer'
import { NextLinkComposed } from '../components/link'

const lightTheme = createTheme('light')
const darkTheme = createTheme('dark')

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({ Component: Page, pageProps, emotionCache }: MyAppProps) {
  const [isDarkMode, setDarkMode] = useState(false)

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
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <AppBar
            position='fixed'
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
          >
            <Toolbar>
              <Box sx={{ flexGrow: 1 }} />
              {buttonLinks}
            </Toolbar>
          </AppBar>
          <Drawer menu={drawerMenu}>
            <Switch
              checked={isDarkMode}
              onChange={(_, isDarkMode) => setDarkMode(isDarkMode)}
            />
          </Drawer>
          <Box
            component='main'
            sx={{ flexGrow: 1 }}
          >
            <Toolbar />
            <Page {...pageProps} />
          </Box>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
