import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import DESection from 'containers/DownloadContainers/DESection'
import parrotDesktop from 'containers/DownloadContainers/OSHome/assets/parrot-home-1.png'

const useStyles = makeStyles(theme => ({
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  }
}))

const OSRaspberry = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container justifyContent="center">
        <DESection
          name="Raspberry Pi Images"
          description={
            <>
              From release 5.0, Parrot is also available for Raspberry Pi 4. Without DE, you can
              install whatever you like.
            </>
          }
          className={classes.desktopEnvironment}
          version="5.0 Electro Ara"
          releaseDate="Mar 24, 2022"
          architecture="armhf, arm64"
          size="100-150 MB"
          screenshots={[parrotDesktop]}
          requirements={[
            { heading: 'Processor', description: 'ARM quad core' },
            { heading: 'Graphics', description: 'No Graphical Acceleration Required' },
            { heading: 'Memory', description: '2 GB RAM' },
            { heading: 'Storage', description: '8 GB available space' }
          ]}
          features={[
            {
              hero: 'ParrotOS on Raspberry Pi 4',
              content: [
                {
                  heading: 'Ready for any context.',
                  description: <>Use the full potential of Parrot on your Raspberry Pi.</>
                },
                {
                  heading: 'Customizable.',
                  description: <>You can customize it as you prefer, with any DE and any tool.</>
                }
              ]
            }
          ]}
          architectEdition={{
            armhf: 'https://download.parrot.sh/parrot/iso/5.0/Parrot-core-rpi-5.0_armhf.img.xz',
            arm64: 'https://download.parrot.sh/parrot/iso/5.0/Parrot-core-rpi-5.0_arm64.img.xz'
          }}
          torrent={{
            armhf: '',
            arm64: ''
          }}
          hashes={{
            md5: '0b18b14c1eb313604b238fd0ad846f7a',
            sha1: '3d64804487cb2865f662735422de0184742d2e8e',
            sha224: '63c569776cebb1c1a74a3d704c4dacf02cc4b78c5a02ea9805043c70',
            sha256: 'e45841a7118a6602714e2dbb61c950e379f036692a73384251eff38a0a5103d7',
            sha384:
              '808ab642285a9deff51d52037342802839867703464f7adfb888fadda7a10b9838e147677eeba91fc9b511244cfb1dfe',
            sha512:
              'b51dc3c7588d3261cd9fc52dd86fdd135f0bf8296aa8775f9aa0a3d1b5e187c5615e7219be479dc5208fad302a614bcd4030561bd5162311a35b5ef7dac6de68'
          }}
        />
      </Grid>
    </>
  )
}

export default OSRaspberry
