import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'

type LoadingScreenProps = {
  finished?: boolean
}

const LoadingScreen = ({ finished }: LoadingScreenProps) => {
  console.log(finished)
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
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
