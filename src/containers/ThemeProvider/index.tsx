import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
  alpha
} from '@mui/material'
import { ThemeProviderProps } from '@mui/styles'
import { createContext, useContext, useEffect, useState } from 'react'
import { useCookie } from 'react-use'

export const ThemeContext = createContext({
  switchTheme: () => {}
})

export const useThemeSwitch = () => useContext(ThemeContext)

const SwitchThemeProvider = ({ children, ...rest }: Omit<ThemeProviderProps, 'theme'>) => {
  const [themeCookie, setCookie] = useCookie('theme')
  const [themeType, _setThemeType] = useState<'light' | 'dark'>('dark')
  const initialTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      }
    },
    palette: {
      mode: themeType,
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
              primary: '#03232E'
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
        fontFamily: 'nimbus-sans'
      },
      subtitle2: {
        fontSize: 18,
        fontFamily: 'nimbus-sans'
      }
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: 24
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          paragraph: {
            marginBottom: 20
          }
        }
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            fontWeight: 700
          }
        }
      },
      MuiLink: {
        styleOverrides: {
          root: {
            fontWeight: 400
          }
        }
      }
    }
  })
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
          createTheme(initialTheme, {
            palette: {
              text: {
                secondary: alpha(initialTheme.palette.text.primary, 0.5)
              }
            },
            typography: {
              body1Semi: {
                ...initialTheme.typography.body1,
                color: alpha(initialTheme.palette.text.secondary, 0.5)
              },
              body2Semi: {
                ...initialTheme.typography.body2,
                color: alpha(initialTheme.palette.text.secondary, 0.5)
              },
              subtitle1Semi: {
                ...initialTheme.typography.subtitle1,
                color: alpha(initialTheme.palette.text.primary, 0.5)
              },
              subtitle2Semi: {
                ...initialTheme.typography.subtitle2,
                color: alpha(initialTheme.palette.text.primary, 0.5)
              }
            },
            components: {
              MuiLink: {
                ...(themeType === 'light'
                  ? {
                      styleOverrides: {
                        root: {
                          color: initialTheme.palette.text.primary,
                          textDecorationColor: initialTheme.palette.text.primary,
                          transition: initialTheme.transitions.create([
                            'color',
                            'text-decoration-color'
                          ]),
                          '&:hover': {
                            color: initialTheme.palette.primary.main,
                            textDecorationColor: initialTheme.palette.primary.main
                          }
                        }
                      }
                    }
                  : {})
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
