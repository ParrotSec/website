// pages/_app.tsx
/* eslint-disable react/jsx-props-no-spreading */
import { Container, CssBaseline } from '@mui/material'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

import ParrotBG from 'components/ParrotBG'
import Footer from 'containers/Footer'
import Header from 'containers/Header'
import SwitchThemeProvider from 'containers/ThemeProvider'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Parrot Security</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://use.typekit.net/adk3ies.css" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <SwitchThemeProvider>
        <CssBaseline />
        <ParrotBG />
        <Container maxWidth="xl">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </SwitchThemeProvider>
    </>
  )
}

export default MyApp
