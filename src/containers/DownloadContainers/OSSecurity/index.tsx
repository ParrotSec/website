import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import parrotSecurity1 from './assets/parrot-security-1.png'
import parrotSecurity2 from './assets/parrot-security-2.png'
import parrotSecurity3 from './assets/parrot-security-3.png'
import parrotSecurity4 from './assets/parrot-security-4.png'

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
          version="5.0 LTS"
          releaseDate="Feb 16, 2022"
          architecture="amd64"
          size="3.8 GB"
          download="Download"
          url="http://download.parrot.sh/parrot/iso/5.0/Parrot-security-5.0_amd64.iso"
          torrentUrl="http://download.parrot.sh/parrot/iso/5.0/Parrot-security-5.0_amd64.iso.torrent"
          screenshots={[parrotSecurity1, parrotSecurity2, parrotSecurity3, parrotSecurity4]}
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
      </Grid>
    </>
  )
}

export default OSSecurity
