import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import './app.css'
import Header from 'components/Header'
import { createTheme, MuiThemeProvider, CssBaseline, Container } from '@material-ui/core'
import LoadingScreen from 'containers/LoadingScreen'
import { SlowSuspense } from 'containers/SlowSuspense'

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
        },
        overrides: {
          MuiTypography: {
            h2: {
              fontWeight: 700,
              fontSize: 48
            },
            h3: {
              fontWeight: 700,
              fontSize: 28
            },
            body1: {
              fontWeight: 'normal',
              fontSize: 16,
              opacity: 0.5
            },
            body2: {
              fontWeight: 'normal',
              fontSize: 14
            }
          },
          MuiPaper: {
            rounded: {
              borderRadius: 24
            }
          }
        }
      })}
    >
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        <SlowSuspense fallback={isReady => <LoadingScreen finished={isReady} />}>
          <Router>
            <Routes path="*" />
          </Router>
        </SlowSuspense>
      </Container>
    </MuiThemeProvider>
  </Root>
)

export default App
