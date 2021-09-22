import { createContext, useContext, useEffect, useState } from 'react'
import {
  createTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  ThemeProviderProps
} from '@material-ui/core'
import { useCookie } from 'react-use'

export const ThemeContext = createContext({
  switchTheme: () => {}
})

export const useThemeSwitch = () => useContext(ThemeContext)

const SwitchThemeProvider = ({ children, ...rest }: Omit<ThemeProviderProps, 'theme'>) => {
  const [themeCookie, setCookie] = useCookie('theme')
  const [themeType, _setThemeType] = useState<'light' | 'dark'>('dark')
  const setThemeType = (theme: 'light' | 'dark') => {
    console.log('theme changed')
    _setThemeType(theme)
    setCookie(theme)
  }
  useEffect(() => {
    setThemeType((themeCookie as 'light' | 'dark') ?? 'dark')
  }, [themeCookie])
  return (
    <ThemeContext.Provider
      value={{ switchTheme: () => setThemeType(themeType === 'light' ? 'dark' : 'light') }}
    >
      <MuiThemeProvider
        {...rest}
        theme={responsiveFontSizes(
          createTheme({
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
                fontSize: 72, //theme.spacing(9)
                fontWeight: 900
              },
              h2: {
                fontSize: 64, //theme.spacing(8)
                fontWeight: 900
              },
              h3: {
                fontSize: 48, //theme.spacing(6)
                fontWeight: 900
              },
              h4: {
                fontSize: 40, //theme.spacing(5)
                fontWeight: 900
              },
              h5: {
                fontSize: 28, //theme.spacing(3.5)
                fontWeight: 900
              },
              h6: {
                fontSize: 24, //theme.spacing(3)
                fontWeight: 900
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
              subtitle1: {
                fontSize: 20,
                fontWeight: 400,
                opacity: 0.5,
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
              },
              MuiTypography: {
                paragraph: {
                  marginBottom: 20
                }
              },
              MuiButtonBase: {
                root: {
                  fontWeight: 700
                }
              }
            }
          })
        )}
      >
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default SwitchThemeProvider
