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
          allHashes={{
            url: 'https://download.parrot.sh/parrot/iso/5.0/signed-hashes.txt'
          }}
        />
      </Grid>
    </>
  )
}

export default OSRaspberry
