import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import parrotHome1 from './assets/parrot-home-1.png'
import parrotHome2 from './assets/parrot-home-2.png'
import parrotHome3 from './assets/parrot-home-3.png'
import parrotHome4 from './assets/parrot-home-4.png'
import parrotHome5 from './assets/parrot-home-5.png'

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
          version="5.1 Electro Ara"
          releaseDate="Sept 24, 2022"
          architecture="amd64"
          size="2.3 GB"
          download="Download"
          url="https://download.parrot.sh/parrot/iso/5.1/Parrot-home-5.1_amd64.iso"
          torrentUrl="https://download.parrot.sh/parrot/iso/5.1/Parrot-home-5.1_amd64.iso.torrent"
          torrentButton="Download Torrent"
          screenshots={[parrotHome1, parrotHome2, parrotHome3, parrotHome4, parrotHome5]}
          requirements={[
            { heading: 'Processor', description: 'Dual Core CPU' },
            { heading: 'Graphics', description: 'No Graphical Acceleration Required' },
            { heading: 'Memory', description: '1 GB RAM' },
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
            md5: 'a80094b466a199c603353305e292d360',
            sha1: '7f5b543c753e90bdbd017f22643549401c60526a',
            sha224: '0f1cda7184ec18fac5f83e86c0603d65493946f4f2519a6723006b30',
            sha256: '8dd34a2503685535326f448720d093c00f3f7e490765cb74e8afc76bbafbe8ca',
            sha384:
              '0ce027c6921a0cce793a91041d2963b736af49f5b57e02017cfc7d805576d4d69aa3d4ec120fa172b44d5f925857388b',
            sha512:
              '800b080363ae57116927d33d3e345839be78b1f67a75aca1c0151cc9a323ffbc2aab0584c1fc652bcda6a84547747ed2cbe6b69bea12f24e75fbd00bae2244d1'
          }}
        />
      </Grid>
    </>
  )
}

export default OSHome
