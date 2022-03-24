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
          version="5.0 Electro Ara"
          releaseDate="Mar 24, 2022"
          architecture="amd64"
          size="2 GB"
          download="Download"
          url="https://download.parrot.sh/parrot/iso/5.0/Parrot-home-5.0_amd64.iso"
          torrentUrl="https://download.parrot.sh/parrot/iso/5.0/Parrot-home-5.0_amd64.iso.torrent"
          torrentButton="Download Torrent"
          screenshots={[parrotHome1, parrotHome2, parrotHome3, parrotHome4, parrotHome5]}
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
            md5: '7cb32e2a131ed2ac8d663aea359879fe',
            sha1: 'e911c7256f8bf436423272f2b6a9658126ffd691',
            sha224: 'f382d53b3c1ae004a64caaf25ab7a647036b27c5717cdfb44b3037ab',
            sha256: '52e902188a48f3470e0b3c3cd6b44a9741ffd8b3f0d82c6d5469b03c1e601cce',
            sha384:
              '9056786c34edd7421459f5b86d4cf3f1bfc5aece578a78f84ad7da5d4f5490830763f14d24ed5b7de3fec3ab7f3ed405',
            sha512:
              '388b2f1637f581df5ade308465db58702cfa301d2c30218ee9e9f55c5fb17d5e6491dae858de9d0dab174a18a89114bcc02ca5881465d12ffb74ced99586713b'
          }}
        />
      </Grid>
    </>
  )
}

export default OSHome
