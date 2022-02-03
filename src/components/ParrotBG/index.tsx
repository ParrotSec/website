import { makeStyles, useTheme } from '@mui/styles'

import Wallpaper from 'assets/parrot-wallpaper.webp'

const useStyles = makeStyles({
  wallpaper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.1,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #06043E), url('${Wallpaper.src}')`
  }
})

const ParrotBG = () => {
  const classes = useStyles()
  const {
    palette: { mode }
  } = useTheme()
  return mode === 'dark' ? <div className={classes.wallpaper} /> : null
}

export default ParrotBG
