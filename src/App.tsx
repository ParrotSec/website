import React, { Suspense } from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import './app.css'
import Header from 'containers/Header'
import Footer from 'containers/Footer'
import { CssBaseline, Container } from '@material-ui/core'
import LoadingScreen from 'containers/HomePageContainers/LoadingScreen'
import ThemeProvider from 'containers/HomePageContainers/ThemeProvider'
import { CookiesProvider } from 'react-cookie'

// Any routes that start with 'dynamic' will be treated as non-static routes

const App = () => (
  <Root>
    <CookiesProvider>
      <ThemeProvider>
        <CssBaseline />
        <Container maxWidth="xl">
          <Header />
          <Suspense fallback={<LoadingScreen />}>
            <Router>
              <Routes path="*" />
            </Router>
          </Suspense>
          <Footer />
        </Container>
      </ThemeProvider>
    </CookiesProvider>
  </Root>
)

export default App
