import React, { createContext, useContext, useState } from 'react'
import { createTheme, MuiThemeProvider, ThemeProviderProps } from '@material-ui/core'
import { useCookies } from 'react-cookie'

export const ThemeContext = createContext({
  switchTheme: null
})

export const useThemeSwitch = () => useContext(ThemeContext)

const ThemeProvider = ({ children, ...rest }: Omit<ThemeProviderProps, 'theme'>) => {
  const [cookies, setCookie] = useCookies()
  const [themeType, _setThemeType] = useState(cookies.theme)
  const setThemeType = (theme: 'light' | 'dark') => {
    _setThemeType(theme)
    setCookie('theme', theme)
  }
  if (!themeType) {
    setThemeType('light')
  }
  return (
    <ThemeContext.Provider
      value={{ switchTheme: () => setThemeType(themeType === 'light' ? 'dark' : 'light') }}
    >
      <MuiThemeProvider
        {...rest}
        theme={createTheme({
          palette: {
            type: themeType,
            primary: {
              main: '#55ddff'
            },
            ...(themeType === 'light'
              ? {
                  background: {
                    default: '#FFFFFF',
                    paper: '#F8F9FA'
                  },
                  text: {
                    primary: '#03232E',
                    secondary: 'rgba(3, 35, 46, 0.5)',
                  }
                }
              : {
                  background: {
                    default: '#06043E',
                    paper: '#19174B'
                  }
                })
          },
          typography: {
            fontFamily: 'Museo Sans',
            fontSize: 16,
            h1: {
              fontSize: 64,
              fontWeight: 700,
              '@media (max-width:1280px)': {
                fontSize: 52
              },
              '@media (max-width:960px)': {
                fontSize: 42
              }
            },
            h2: {
              fontWeight: 700,
              fontSize: 48,
              '@media (max-width:1280px)': {
                fontSize: 36
              }
            },
            h3: {
              fontWeight: 700,
              fontSize: 28,
              '@media (max-width:1280px)': {
                fontSize: 18
              }
            },
            body1: {
              fontWeight: 'normal',
              fontSize: 16,
              opacity: 0.5
            },
            body2: {
              fontWeight: 'normal',
              fontSize: 14,
            },
            subtitle2: {
              fontSize: 18,
              opacity: 0.5
            }
          },
          overrides: {
            MuiPaper: {
              rounded: {
                borderRadius: 24
              }
            }
          }
        })}
      >
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
