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
          releaseDate="Sept 26, 2022"
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
            md5: 'd1c4daef7c69db144f032ee6f0ee0026',
            sha1: '73a0bf3f136e57aed680167ccef1d0ee08ac45f9',
            sha224: '9e2420322352834866d2f367d904beba40617e7a06cfa0f1439a6ef1',
            sha256: '5ab15dd6230b84e3e63366c9f78d8fcb4981ee0e8dba45a00a248cad46f82d4f',
            sha384:
              'd2d5964df47b1112ce9d45b753676b13fe4fcee6be0c56ac8ecb3af9807c5c59fac5ef642d89754fe8b03d6843e2206f',
            sha512:
              '92a908c573c944f842bc2e409dc90f4678eed24115e6ee35470a1627097f7e06ba9f3ede30151a5021940dab9d001f437a0d2f3169fd48e0047ee631862022b1'
          }}
        />
      </Grid>
    </>
  )
}

export default OSHome
