import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import DESection from 'containers/DownloadContainers/DESection'
import homeMate1 from 'containers/DownloadContainers/OSHome/assets/home-mate-1.png'

const useStyles = makeStyles(theme => ({
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  }
}))

const OSSecurity = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container justifyContent="center">
        <DESection
          className={classes.desktopEnvironment}
          name="MATE Desktop"
          description={
            <>
              MATE is a lightweight desktop environment with a classical GNU/Linux layout. It is the
              default desktop environment of Parrot OS and represents the iconical look and feel of
              the system.
            </>
          }
          version="4.11.2"
          releaseDate="May 28, 2021"
          architecture="AMD64"
          size="4.4 GB"
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
            md5: 'e6fe3ae3a1c964dabde41e3e1b63ef79',
            sha1: 'e0f82cea1aa4767c9f0c4755c48d43d8315ac80c',
            sha224: 'af172769f96b658ecf9eedea848709fb214fdd30cc1534353ffdb92f',
            sha256: 'd7b2b0cf1d82d3cb831cc8044248faff1a51e06f78a26974c8758f84101d1fd4',
            sha384:
              'a36f996e76d362ca29f6600ef3ac4cc2326b92be718c7ba58e313de0528125b53d92441ab3237d976bb4d9e228c2b630',
            sha512:
              'dda3ea9f2a703c8d1307d8ba40f9e487a8bd4c0eea04d9cd06bc1acb9d2bd35e5889dfa429f27bf56cf5df89ad0dc328bafca305f40cea0db733f6f7bf404fde'
          }}
        />
      </Grid>
    </>
  )
}

export default OSSecurity
