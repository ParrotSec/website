import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import parrotSecurity1 from './assets/parrot-security-1.png'
import parrotSecurity2 from './assets/parrot-security-2.png'
import parrotSecurity3 from './assets/parrot-security-3.png'
import parrotSecurity4 from './assets/parrot-security-4.png'
import parrotSecurity5 from './assets/parrot-security-5.png'

import DESection from 'containers/DownloadContainers/DESection'

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
          name="Security Edition"
          description={
            <>
              Parrot Security Edition is a special purpose operating system designed for Penetration
              Test and Red Team operations. It contains a full arsenal of ready to use pentesting
              tools.
            </>
          }
          version="5.1 Electro Ara"
          releaseDate="Sept 26, 2022"
          architecture="amd64"
          size="4.6 GB"
          download="Download"
          url="https://download.parrot.sh/parrot/iso/5.1/Parrot-security-5.1_amd64.iso"
          torrentUrl="https://download.parrot.sh/parrot/iso/5.1/Parrot-security-5.1_amd64.iso.torrent"
          torrentButton="Download Torrent"
          screenshots={[
            parrotSecurity1,
            parrotSecurity2,
            parrotSecurity3,
            parrotSecurity4,
            parrotSecurity5
          ]}
          requirements={[
            { heading: 'Processor', description: 'Dual Core CPU' },
            { heading: 'Graphics', description: 'No Graphical Acceleration Required' },
            { heading: 'Memory', description: '1 GB RAM' },
            { heading: 'Storage', description: '20 GB available space' }
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
                      Pre-installed VLC, GIMP and a whole repository from which to install other
                      software such as OBS, Blender, Kdenlive, Krita and more!
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
                  heading: 'Pentest-ready',
                  description: (
                    <>
                      Lots of penetration testing tools, all already installed, including
                      Powersploit, Scapy, Rizin and more!
                    </>
                  )
                },
                {
                  heading: 'Development Tools',
                  description: <>VSCodium and Geany. You can start developing what you want.</>
                }
              ]
            }
          ]}
          hashes={{
            md5: '21a0a15e3f13951e6d0430a8ad3d3d7e',
            sha1: '5c529ca83a85081df6c03887859a5ade3b6b27c3',
            sha224: 'fe4bee5ac90cba5ee38884c2374c4537231b8fb37b49ffd3f0264284',
            sha256: '08f247a0143051715d0df2854b5e20ea45fc35e0945e174b7b2703287f1dd661',
            sha384:
              '85c29f1dccc8fde152450884e3c19ecd1e1f7af2c2eb09146208ec9a5a1394bb2bb425a4923d4b7ca8d2376d71cb5443',
            sha512:
              'd351da6fdd44de88f0a588b688203b303871d57d6fbc8fd27e7d17b234b736d230d2e80f79de73b1a18f5abc4f3bba9b5e96d86349e54e4a97237198af86e272'
          }}
        />
      </Grid>
    </>
  )
}

export default OSSecurity
