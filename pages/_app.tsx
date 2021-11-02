import React, { useState, useMemo } from 'react'
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

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({ Component: Page, pageProps, emotionCache }: MyAppProps) {
  const [isDarkMode, setDarkMode] = useState(false)
  const theme = useMemo(() => createTheme(isDarkMode ? 'dark' : 'light'), [isDarkMode])

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
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            {buttonLinks}
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            display: 'flex',
          }}
        >
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
            <Page {...pageProps} />
          </Box>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
