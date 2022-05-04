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
          version="5.0.1 Electro Ara"
          releaseDate="May 04, 2022"
          architecture="amd64"
          size="4.5 GB"
          download="Download"
          url="https://download.parrot.sh/parrot/iso/5.0.1/Parrot-security-5.0.1_amd64.iso"
          torrentUrl="https://download.parrot.sh/parrot/iso/5.0.1/Parrot-security-5.0.1_amd64.iso.torrent"
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
            md5: '74ca72645896f83a65acd35ade46b0e0',
            sha1: '8c28f568aaa643ce12831c49ddc35032ee145731',
            sha224: '7508cd8c1cb7f7f235d74a625450cdf3217c8f02da0a655317905794',
            sha256: 'a63017b201ac799cb25cba6ded8e6cb1014b3917e765f387e723f984da86ab64',
            sha384:
              'ecd91c9b36b4189a2d93f6f014448ffa583449fec13a1297965ad43c742db79bfc09a717bd8972f987fa2532407ff502',
            sha512:
              'a3440b12b528e6e952291af443296352815f18e205cf7ae87f4312c2715eb07ee55bc0eab11544c1dcd28878b721c5317d3062b3e38591a83e9dbb9efa31c4eb'
          }}
        />
      </Grid>
    </>
  )
}

export default OSSecurity
