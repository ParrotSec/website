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
          releaseDate="May 04, 2022"
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
            md5: 'fa0446b3f705a2dfd6c26d847a1af60e',
            sha1: '82dce21ee263e3a6c3f46eb0635f5649c6ef5067',
            sha224: '33958cfbe1e0ffffc6016251d12ef2078cac151e1622e9af3cc621f8',
            sha256: '64c583e33c16581c4894e9c9d67a2cc7a23fdc8698a476ccff30727c3e63eb3a',
            sha384:
              'c3de7d31c807159a3f0ccbf4c58bd9379f78ed7f14af0fcc987089e2ba533a9bb16455194ea3e7af7fad4fff347b2d2b',
            sha512:
              '97cbe45fbfb1487df8c010d4d890eb8864873e95ad63ad496f8a983d71f251cfc96b053f6a9ef927ac2b590f9405db4a471fc32f9b96df6fa9417d4b3981aa0d'
          }}
        />
      </Grid>
    </>
  )
}

export default OSHome
