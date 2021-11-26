import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import DESection from 'containers/DownloadContainers/DESection'
import homeMate1 from 'containers/DownloadContainers/OSHome/assets/home-mate-1.png'

const useStyles = makeStyles(theme => ({
  cloud: {
    background: 'linear-gradient(146.41deg, #00D1FF 8.11%, #020DFF 94.7%)'
  },
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  }
}))

const OSCloud = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container justifyContent="center">
        <DESection
          className={classes.desktopEnvironment}
          name="MATE OVA Home"
          description={
            <>Parrot Home Edition packed in a handful OVA file for VirtualBox and VMWare</>
          }
          version="4.11.2"
          releaseDate="Jun 23, 2021"
          architecture="OVA"
          size="3 GB"
          screenshots={[homeMate1, homeMate1, homeMate1, homeMate1, homeMate1]}
          requirements={[
            { heading: 'Processor', description: 'Intel Core i5 or equivalent' },
            { heading: 'Graphics', description: 'No Graphical Acceleration Required' },
            { heading: 'Memory', description: '8 GB RAM' },
            { heading: 'Storage', description: '16 GB available space' }
          ]}
          features={[
            {
              hero: 'Workspace',
              content: [
                {
                  heading: 'iCloud Private Relay',
                  description: (
                    <>
                      iCloud Private Relay is a service that lets you connect to virtually any
                      network and browse with Safari in an even more secure and private way.
                    </>
                  )
                },
                {
                  heading: 'Hide My Email',
                  description: (
                    <>
                      Hide My Email allows you to create unique, random email addresses that forward
                      to your personal inbox.{' '}
                    </>
                  )
                }
              ]
            },
            {
              hero: 'Accessibility',
              content: [
                {
                  heading: 'iCloud Private Relay',
                  description: (
                    <>
                      iCloud Private Relay is a service that lets you connect to virtually any
                      network and browse with Safari in an even more secure and private way.
                    </>
                  )
                },
                {
                  heading: 'Hide My Email',
                  description: (
                    <>
                      Hide My Email allows you to create unique, random email addresses that forward
                      to your personal inbox.
                    </>
                  )
                }
              ]
            }
          ]}
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

export default OSCloud
