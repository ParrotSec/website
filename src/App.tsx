import React, { Suspense } from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import './app.css'
import Header from 'components/Header'
import { createTheme, MuiThemeProvider, CssBaseline, Container } from '@material-ui/core'
import LoadingScreen from 'containers/LoadingScreen'

// Any routes that start with 'dynamic' will be treated as non-static routes
const App = () => (
  <Root>
    <MuiThemeProvider
      theme={createTheme({
        palette: {
          type: 'dark',
          primary: {
            main: '#55ddff'
          },
          background: {
            default: '#06043E',
            paper: '#19174B'
          }
        },
        typography: {
          fontFamily: 'Museo Sans',
          fontSize: 16
        }
      })}
    >
      <CssBaseline />
      <Container maxWidth="xl">
        <Header />
        <Suspense fallback={<LoadingScreen />}>
          <Router>
            <Routes path="*" />
          </Router>
        </Suspense>
      </Container>
    </MuiThemeProvider>
  </Root>
)

export default App
