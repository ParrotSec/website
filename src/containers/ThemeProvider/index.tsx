import React, { createContext, useContext, useState } from 'react'
import { createTheme, MuiThemeProvider, ThemeProviderProps } from '@material-ui/core'
import { useCookie } from 'react-use'

export const ThemeContext = createContext({
  switchTheme: () => {}
})

export const useThemeSwitch = () => useContext(ThemeContext)

const ThemeProvider = ({ children, ...rest }: Omit<ThemeProviderProps, 'theme'>) => {
  const [themeOption, setCookie] = useCookie('theme')
  const [themeType, _setThemeType] = useState(themeOption as 'light' | 'dark')
  const setThemeType = (theme: typeof themeType) => {
    _setThemeType(theme)
    setCookie(theme)
  }
  if (!themeType) {
    setThemeType('dark')
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
              main: '#05EEFF'
            },
            ...(themeType === 'light'
              ? {
                  background: {
                    default: '#FFFFFF',
                    paper: '#F8F9FA'
                  },
                  text: {
                    primary: '#03232E',
                    secondary: 'rgba(3, 35, 46, 0.5)'
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
            fontFamily: 'museo-sans',
            fontSize: 16,
            h1: {
              fontSize: 64,
              fontWeight: 900,
              '@media (max-width:1280px)': {
                fontSize: 52
              },
              '@media (max-width:960px)': {
                fontSize: 32
              }
            },
            h2: {
              fontWeight: 900,
              fontSize: 48,
              '@media (max-width:1280px)': {
                fontSize: 26
              }
            },
            h3: {
              fontWeight: 900,
              fontSize: 28,
              '@media (max-width:1280px)': {
                fontSize: 18
              }
            },
            body1: {
              fontWeight: 'normal',
              fontSize: 16,
              opacity: 0.5,
              fontFamily: 'nimbus-sans'
            },
            body2: {
              fontWeight: 'normal',
              fontSize: 14,
              fontFamily: 'nimbus-sans'
            },
            subtitle2: {
              fontSize: 18,
              opacity: 0.5,
              fontFamily: 'nimbus-sans'
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
