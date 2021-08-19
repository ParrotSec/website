import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'

const LoadingScreen = () => {
  return (
    <Box width="100vw" height="100vh" justifyContent="center" alignItems="center" display="flex">
      <CircularProgress size={64} />
      <Box marginLeft="1rem" fontSize={64}>
        Loading
      </Box>
    </Box>
  )
}

export default LoadingScreen
