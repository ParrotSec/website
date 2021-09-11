import React, { Suspense } from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import './app.css'
import Header from 'containers/Header'
import Footer from 'containers/Footer'
import { CssBaseline, Container } from '@material-ui/core'
import LoadingScreen from 'containers/HomeContainers/LoadingScreen'
import ThemeProvider from 'containers/ThemeProvider'

const App = () => (
  <Root>
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
  </Root>
)

export default App
