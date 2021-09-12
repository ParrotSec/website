// pages/_app.tsx
/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useEffect } from 'react'
import { Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from 'containers/Footer'
import Header from 'containers/Header'
import ThemeProvider from 'containers/ThemeProvider'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
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
        <title>My App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://use.typekit.net/adk3ies.css" />
      </Head>
      <ThemeProvider>
        <CssBaseline />
        <Container maxWidth="xl">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default MyApp