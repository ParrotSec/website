import React from 'react'
import { Box, CircularProgress, useTheme } from '@material-ui/core'

const LoadingScreen = () => {
  const {
    palette: {
      background: { default: background }
    }
  } = useTheme()
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      bgcolor={background}
      width="100%"
      height="100%"
      zIndex={99}
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <CircularProgress size={64} />
      <Box marginLeft="1rem" fontSize={64}>
        Loading
      </Box>
    </Box>
  )
}

export default LoadingScreen
