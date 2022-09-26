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
            md5: '942d9ddfa19c4fca92c69a0f30e450da',
            sha1: '8bf10b783611a4b17d490398ce35ecca3876ccb4',
            sha224: '320a8d62e4b9ce944129cd158c0995084fd1e7c4f054fbf041e35d64',
            sha256: '1d865054279249f4a27919f77c81cc2ee9c49922aa49ec55f2587eb4fd86c91a',
            sha384:
              'ceb0dab9b7813b66b718016ecbe7dced35c3c38c7570137b3952e9f81579b0a953dcf6e1e4f9c390b03e71e40891f034',
            sha512:
              'c5cb40d11bea47048ca7cda538761d035e83b2330ba4623b70895b71c908ef21f4d7fc97af0de8873f87c90687dd52782e67f3d145b4bdf73f8e8ea63901ace4'
          }}
        />
      </Grid>
    </>
  )
}

export default OSSecurity
