import React, { useState, useMemo } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { NextPage } from 'next'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { Switch } from '@mui/material'
import { createTheme } from '../styles/theme'
import cache from '../styles/cache'
import { LayoutType } from '../components/layout'

export type MyPage<P = {}> = NextPage<P> & {
  Layout?: LayoutType
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  Component: MyPage
}

function MyApp({ Component: Page, pageProps, emotionCache }: MyAppProps) {
  const [isDarkMode, setDarkMode] = useState(false)
  const theme = useMemo(() => createTheme(isDarkMode ? 'dark' : 'light'), [isDarkMode])

  const themeSwitch = (
    <Switch
      checked={isDarkMode}
      onChange={(_, isDarkMode) => setDarkMode(isDarkMode)}
    />
  )

  const Layout = Page.Layout ?? React.Fragment // TODO replace fragment with default layout

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <CacheProvider value={emotionCache ?? cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout themeSwitch={themeSwitch}>
            <Page {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export type MyAppType = typeof MyApp
export default MyApp
