import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import cls from 'classnames'
import Home from 'containers/HomeContainers/OSSection/assets/Home.svg'
import DESection from 'containers/DownloadContainers/DESection'
import homeMate1 from './assets/home-mate-1.png'

const useStyles = makeStyles(theme => ({
  home: {
    background: 'linear-gradient(153.43deg, #03F0FF 16.67%, #03FF77 100%)'
  },
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  }
}))

type OSHomeProps = { classesGeneral: Record<'headerIcon' | 'iconHolder' | 'gridHeader', string> }

const OSHome = ({ classesGeneral }: OSHomeProps) => {
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
            <div className={cls(classesGeneral.iconHolder, classes.home)}>
              <Home className={classesGeneral.headerIcon} />
            </div>
            <Typography variant="h2" align="center">
              Home Edition
            </Typography>
          </Box>
          <Box marginTop="12px">
            <Typography variant="subtitle2" align="center">
              Home edition is designed for <b>daily use</b>, <b>privacy</b> and{' '}
              <b>software development</b>. Parrot Tools can be manually installed to assemble a
              custom and lightweight pentesting environment.
            </Typography>
          </Box>
        </Grid>
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
          size="2.04 GB"
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
                      to your personal inbox.
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
            md5: '013127eef0fe0c6797cd59d21d23a389',
            sha1: '88051711b5fc82e709478052995dc8e94866fda7',
            sha224: '6b11ed4bc1084d8bc2d54f32c92740a27b2b89abffd9ffec612ec290',
            sha256: 'ea0c1def77e37ffd8d3042725af6f5413a000f9a8d92af04bd64da0a5b070ea1',
            sha384:
              'd6b6cf399518ff1d2b58c89244539798093cc7302b307ae866c20bd676dd0a201a9d97341bc1874c9c2a07bd99c7c3d3',
            sha512:
              'f292c23c050be6d2dad18eb57198d70b92de6c650022047f7deeafbbbced70fd73a98494df9ecc7d6cb0461958d7c0fa398f996c68665ccf64fc1cb579cacfa8'
          }}
        />
        <DESection
          className={classes.desktopEnvironment}
          name="KDE Desktop"
          description={
            <>
              KDE Plasma is a modern desktop environment with advanced features and high
              customizability. It uses more resources compared to MATE and gives its best on
              powerful and modern hardware.
            </>
          }
          version="4.11.2"
          releaseDate="May 27, 2021"
          architecture="AMD64"
          size="2.15 GB"
          screenshots={[homeMate1, homeMate1, homeMate1, homeMate1, homeMate1]}
          hashes={{
            md5: 'ddcf66c3e37e20bbaa4bca92d4492955',
            sha1: '07b705de64f37b53b986d23ef839bb0eb7ae45fb',
            sha224: '815bd5461bde72d61fd0fe6feb6a45b115e63577d69e746bcd1f6813',
            sha256: '04028238a34b09a44547526fdfc2816aae13a387136423393736e1eb01649bce',
            sha384:
              '5b224b1615aa9ba86b2ef609a5148d6e7c18c30ccdc70897d4996d1572efc7deeaf5e8dcbe09dd8f59d5cfbf2b1d442f',
            sha512:
              '4df2ab91fc4ab7a80ad65e0dbe3b99f5c22dd55cce6a356d59056938fbdc9639e948dda8936abf9534ba0ea6cea54644f984f4bb7943ee8334658614a311f06b'
          }}
        />
        <DESection
          className={classes.desktopEnvironment}
          name="XFCE Desktop"
          description={
            <>
              XFCE is a very lightweight desktop environment similar to MATE configured to offer an
              alternative look and feel.
            </>
          }
          version="4.11.2"
          releaseDate="May 27, 2021"
          architecture="AMD64"
          size="1.93 GB"
          screenshots={[homeMate1, homeMate1, homeMate1, homeMate1, homeMate1]}
          hashes={{
            md5: '011a9d98197d88323cd4a8529a7e159b',
            sha1: '96cade7ec5e7f12c8ff0de15fec0a55e77c3b4e3',
            sha224: 'fec4b62912559868847d799321b11cd1aae32948489e3273fb2205ad',
            sha256: '016d937e5e837905d5481aca19c6c865b69249e90b554a6f312be63b30b0deb3',
            sha384:
              '84f15386c9c2c1aeb4590b7aba0e025c730972ca474ab2a8313f510d0c8ba360a83ff555a9d60e4736309912cd935a79',
            sha512:
              '0b6fc36bfb5ee2fed2e43b8967c7af83534491f1b444b955d0758e56d6fda55551e00928b473626040f68b6f7be0c1f5ad40489084bbcec96eed95575e4b6ac3'
          }}
        />
      </Grid>
    </>
  )
}

export default OSHome
