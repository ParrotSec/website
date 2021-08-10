import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'
import FancyDiv from 'components/FancyDiv'
import Dynamic from 'containers/Dynamic'
import './app.css'
import Header from 'components/Header'
import { createTheme, MuiThemeProvider } from '@material-ui/core'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const App = () => (
  <Root>
    <MuiThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200
          }
        }
      })}
    >
      <Header></Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
        <Link to="/other">Other</Link>
      </nav>
      <div className="content">
        <FancyDiv>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </FancyDiv>
      </div>
    </MuiThemeProvider>
  </Root>
)

export default App
