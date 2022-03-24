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
          version="5.0 Electro Ara"
          releaseDate="Mar 24, 2022"
          architecture="amd64"
          size="4.2 GB"
          download="Download"
          url="https://download.parrot.sh/parrot/iso/5.0/Parrot-security-5.0_amd64.iso"
          torrentUrl="https://download.parrot.sh/parrot/iso/5.0/Parrot-security-5.0_amd64.iso.torrent"
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
            { heading: 'Memory', description: '8 GB RAM' },
            { heading: 'Storage', description: '40 GB available space' }
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
            md5: '26b3762051e774349a8a7cd3443991e3',
            sha1: 'dd0f53582042ddac9fdf2b844249773eb8ac25b1',
            sha224: 'c9683499ed924438d2df30374abc77f846306f08dcaaf801bf4b1edd',
            sha256: '42d4c49429ae63b517c2f441c0e1d2aa35177db1dc418d9ee23c1de12ab8549d',
            sha384:
              'aa1cc6ad2ea8266b38482eabaea54a82363651df3317c9d784d1c022bb2d3981f566df5c4e9756ef2eddbb14296ea040',
            sha512:
              '4d53834dcc2097221e8bc336573599ee4ef29fcf7f9a5f961bf53fc852a7d5f2f5f8034215f96ffb1a56c26fc1b6d29e918c892a3eb2c4e0f18e0cdaa9184858'
          }}
        />
      </Grid>
    </>
  )
}

export default OSSecurity
