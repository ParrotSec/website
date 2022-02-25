import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import parrotHome1 from './assets/parrot-home-1.png'
import parrotHome2 from './assets/parrot-home-2.png'
import parrotHome3 from './assets/parrot-home-3.png'
import parrotHome4 from './assets/parrot-home-4.png'

import DESection from 'containers/DownloadContainers/DESection'

const useStyles = makeStyles(theme => ({
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  }
}))

const OSHome = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container justifyContent="center">
        <DESection
          className={classes.desktopEnvironment}
          name="Home Edition"
          description={
            <>
              Parrot Home Edition is a general purpose operating system with the typical Parrot look
              and feel. This edition is designed for daily use, privacy and software development.
              Parrot Tools can be manually installed to assemble a custom and lightweight pentesting
              environment.
            </>
          }
          version="5.0 LTS"
          releaseDate="Feb 16, 2022"
          architecture="amd64"
          size="1.9 GB"
          download="Download"
          url="http://download.parrot.sh/parrot/iso/5.0/Parrot-home-5.0_amd64.iso"
          torrentUrl="http://download.parrot.sh/parrot/iso/5.0/Parrot-home-5.0_amd64.iso.torrent"
          torrentButton="Download Torrent"
          screenshots={[parrotHome1, parrotHome2, parrotHome3, parrotHome4]}
          requirements={[
            { heading: 'Processor', description: 'Dual Core CPU' },
            { heading: 'Graphics', description: 'No Graphical Acceleration Required' },
            { heading: 'Memory', description: '2 GB RAM' },
            { heading: 'Storage', description: '16 GB available space' }
          ]}
          features={[
            {
              hero: 'Workstation',
              content: [
                {
                  heading: 'Full Office Suite',
                  description: (
                    <>
                      Pre-installed LibreOffice, and possibility to install other softwares via the
                      Synaptic package manager.
                    </>
                  )
                },
                {
                  heading: 'Multimedia Production',
                  description: (
                    <>
                      VLC, GIMP and a whole repository from which to install other software such as
                      OBS, Blender, Kdenlive, Krita and more!
                    </>
                  )
                }
              ]
            },
            {
              hero: 'Privacy',
              content: [
                {
                  heading: 'Anonymity tools',
                  description: <>AnonSurf, TOR, Firefox pre-installed Ad-blockers.</>
                },
                {
                  heading: 'Cryptography',
                  description: (
                    <>
                      Full disk encryption and all encryption tools including zulucrypt, sirikali...
                      at your fingertips!
                    </>
                  )
                }
              ]
            },
            {
              hero: 'Development',
              content: [
                {
                  heading: 'Development Tools',
                  description: <>VSCodium and Geany. You can start developing what you want.</>
                },
                {
                  heading: 'Advanced Framework Support',
                  description: (
                    <>
                      Fully support for a lot of programming languages/frameworks like Go, Rust,
                      Python and more.
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
      </Grid>
    </>
  )
}

export default OSHome
