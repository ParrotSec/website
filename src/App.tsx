import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
import Dynamic from 'containers/Dynamic'
import './app.css'
import Header from 'components/Header'
import { createTheme, MuiThemeProvider, CssBaseline, Container } from '@material-ui/core'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

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
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Container>
    </MuiThemeProvider>
  </Root>
)

export default App
