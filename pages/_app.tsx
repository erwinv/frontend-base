import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { Box, AppBar, Toolbar, Container } from '@mui/material'
import theme from '../styles/theme'
import cache from '../styles/cache'
import Drawer, { drawerWidth } from '../components/drawer'
import Link from '../components/link'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({ Component: Page, pageProps, emotionCache }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache ?? cache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <AppBar
            position='fixed'
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
          >
            <Toolbar>
              <Box sx={{ flexGrow: 1 }} />
              <Link
                href='/'
                underline='none'
              >Home</Link>
              <Link
                href='/howto'
                underline='none'
                sx={{ pl: 3 }}
              >Guides</Link>
              <Link
                href='/docs'
                underline='none'
                sx={{ pl: 3 }}
              >Docs</Link>
            </Toolbar>
          </AppBar>
          <Drawer menu={[
            { title: 'foo' },
            { title: 'bar' },
            { title: 'baz' },
          ]}/>
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
