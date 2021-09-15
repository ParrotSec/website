import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import cls from 'classnames'
import Security from 'containers/HomeContainers/OSSection/assets/Security.svg'
import DESection from 'containers/DownloadContainers/DESection'
import homeMate1 from 'containers/DownloadContainers/OSHome/assets/home-mate-1.png'

const useStyles = makeStyles(theme => ({
  security: {
    background: 'linear-gradient(145.47deg, #FAFD50 21.97%, #FD50D7 96.3%)'
  },
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  }
}))

type OSSecurityProps = {
  classesGeneral: Record<'headerIcon' | 'iconHolder' | 'gridHeader', string>
}

const OSSecurity = ({ classesGeneral }: OSSecurityProps) => {
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
            <div className={cls(classesGeneral.iconHolder, classes.security)}>
              <Security className={classesGeneral.headerIcon} />
            </div>
            <Typography variant="h2">Security Edition</Typography>
          </Box>
          <Box marginTop="12px">
            <Typography variant="subtitle2" align="center">
              Security Edition is a special purpose operating system designed for{' '}
              <b>Penetration Testing</b> and
              <b>Red Team operations</b>. It contains a full arsenal of ready-to use pentesting
              tools.
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
          size="4.5 GB"
          screenshots={[homeMate1, homeMate1, homeMate1, homeMate1, homeMate1]}
          hashes={{
            md5: 'a0fc68757c285f456cacd67e317db2a0',
            sha1: '9aa4b25c36fa2abaeafce8255e5a41a8f66f7b4f',
            sha224: 'eefb72fbf0bab7dd9aefe08e9a442206398d1aa57af0634e97aa3c13',
            sha256: '84af69858a2f26f25b39bbafec3ecf7776350ef2abf4fb0f8458cd5452d0f410',
            sha384:
              '6ca27ab5665ad081bc0ef6ad15f70731fe125fd272a23acd9be0e662963e340ada1adcf10426fd3254202c1e0eb0a865',
            sha512:
              'd1b0ddabab3348c990fa87545561552ddf750a4e3282c5ddb27fe2bfe2c2f40151910c2c6f32ecf670e84c315e7b7e5bf4b372b58ec5d85fadab3acd60a27126'
          }}
        />
      </Grid>
    </>
  )
}

export default OSSecurity
