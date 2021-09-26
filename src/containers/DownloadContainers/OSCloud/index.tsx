import { Box, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import cls from 'classnames'

import DESection from 'containers/DownloadContainers/DESection'
import homeMate1 from 'containers/DownloadContainers/OSHome/assets/home-mate-1.png'
import Cloud from 'containers/HomeContainers/OSSection/assets/Cloud.svg'

const useStyles = makeStyles(theme => ({
  cloud: {
    background: 'linear-gradient(146.41deg, #00D1FF 8.11%, #020DFF 94.7%)'
  },
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  }
}))

type OSCloudProps = {
  classesGeneral: Record<'headerIcon' | 'iconHolder' | 'gridHeader', string>
}

const OSCloud = ({ classesGeneral }: OSCloudProps) => {
  const classes = useStyles()
  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          className={classesGeneral.gridHeader}
          container
          item
          xs={10}
          sm={8}
          lg={6}
          justifyContent="center"
        >
          <Box display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
            <div className={cls(classesGeneral.iconHolder, classes.cloud)}>
              <Cloud className={classesGeneral.headerIcon} />
            </div>
            <Typography variant="h3">Cloud Edition</Typography>
          </Box>
          <Box marginTop="12px">
            <Typography variant="subtitle2Semi" align="center">
              IoT & Cloud Appliances are special editions of Parrot Security made for{' '}
              <b>embedded devices</b>,<b>cloud environments</b>, <b>virtual machines</b> and other
              special deployments.
            </Typography>
          </Box>
        </Grid>
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
        <DESection
          className={classes.desktopEnvironment}
          name="MATE OVA Home"
          description={
            <>Parrot Security Edition packed in a handful OVA file for VirtualBox and VMWare</>
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
            md5: '1dfa86541f6f9027cac02e13b9e51605',
            sha1: 'e7a277944957fde8121eb44e58d7f6bde84d7618',
            sha224: '46a514e31772d19c43cacef0f7610e478784b45ebb0060cd2b279cc1',
            sha256: 'c7eea5b243d8b3f9361e5d961d0925254bd794177ae915173d10a9845f9e57e7',
            sha384:
              'e7f5433b4ea0484ff076eed80957c81d6c5ceb4b8bfb7ca070aa930555802ad10e41535930311d54f12f0b8ae8fc8fea',
            sha512:
              'd53b6367842ca9f0fa2e30c689d93c0d6e49d25d257f5d9a18d348287032a176e17c523fb7345f150d2a420d9a2db6c47acb5a8ee6cb80c7185c83bf7427c68a'
          }}
        />
      </Grid>
    </>
  )
}

export default OSCloud
