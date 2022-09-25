import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Divider,
  Grid,
  Paper,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import PButton from 'components/PButton'
import SelectButton, { SelectButtonItem } from 'components/SelectButton'

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: theme.spacing(8)
  },
  root: {
    width: '100%',
    marginTop: theme.spacing(4),
    padding: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4)
    }
  },
  gridHrMarginTop: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  subtitleMargined: {
    marginBottom: theme.spacing(4)
  },
  subBlockHeading: {
    fontFamily: 'museo-sans',
    fontWeight: 900
  },
  accordionSummary: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rpiTitle: {
    width: '100%',
    padding: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4)
    }
  }
}))

type EditionSelectionProps = {
  initialVersion?: 'core' | 'home' | 'security'
}

type EditionTypes = '' | 'core' | 'home' | 'security'

const OSRaspberry = ({ initialVersion }: EditionSelectionProps) => {
  const classes = useStyles()

  const [edition, setEdition] = useState<EditionTypes>(initialVersion ?? '')

  useEffect(() => setEdition(initialVersion ?? ''), [initialVersion])

  return (
    <>
      <Grid className={classes.section} container justifyContent="center">
        <Paper className={classes.rpiTitle} elevation={0}>
          <Typography variant="h4" paragraph>
            Raspberry Pi Images
          </Typography>
          <Typography variant="subtitle2Semi" paragraph>
            From release 5.0, ParrotOS is also available for Raspberry Pi 2, 3 and 4. This version
            is available in Core, Home and Security editions. The use of a Raspberry Pi 4 is
            strongly recommended, especially for the Security edition.
          </Typography>
          <Grid container>
            <Grid item xs={12} container spacing={4} style={{ paddingTop: 30 }}>
              <Grid item xs={12} sm={4}>
                <Typography variant="body1" paragraph>
                  Available in the main editions.
                </Typography>
                <Typography variant="body2Semi">Core, Home and Security.</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body1" paragraph>
                  Ready for any context.
                </Typography>
                <Typography variant="body2Semi">
                  Use the full potential of Parrot on your Raspberry Pi.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body1" paragraph>
                  Fully customizable.
                </Typography>
                <Typography variant="body2Semi">
                  You can customize it as you prefer, with any tool.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider variant="fullWidth" className={classes.gridHrMarginTop} />
          </Grid>
          <Grid className={classes.gridHrMarginTop} item xs={12}>
            <Typography className={classes.subBlockHeading} variant="subtitle2" paragraph>
              Requirements
            </Typography>
            <Grid container item xs={12} justifyContent="space-between" spacing={3}>
              <Grid container direction="column" item xs={12} sm={6} lg={3}>
                <Typography variant="body2Semi">Processor</Typography>
                <Typography variant="body1">ARM quad core</Typography>
              </Grid>
              <Grid container direction="column" item xs={12} sm={6} lg={3}>
                <Typography variant="body2Semi">Graphics</Typography>
                <Typography variant="body1">No Graphical Acceleration Required</Typography>
              </Grid>
              <Grid container direction="column" item xs={12} sm={6} lg={3}>
                <Typography variant="body2Semi">Memory</Typography>
                <Typography variant="body1">512 MB RAM</Typography>
              </Grid>
              <Grid container direction="column" item xs={12} sm={6} lg={3}>
                <Typography variant="body2Semi">Storage</Typography>
                <Typography variant="body1">8 GB available space</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.root} elevation={0}>
          <Accordion
            expanded={edition === 'core'}
            onChange={() => setEdition('core')}
            elevation={0}
            style={{ width: '100%', borderRadius: 24 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              style={{ padding: 0 }}
            >
              <Grid container direction="row">
                <Typography variant="h5" paragraph>
                  Core Edition
                </Typography>
                <Typography variant="subtitle2Semi" paragraph>
                  Without DE, you can install whatever you like. Only the base packages are
                  installed in this edition. This makes it the lightest edition of ParrotOS, it
                  should guarantee compatibility with all models of the Raspberry Pi.
                </Typography>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={8} justifyContent="center" alignItems="center">
                <Grid container item xs={12} md={8} direction="column">
                  <Alert severity="info" sx={{ fontSize: 18 }}>
                    Default credentials:
                    <Divider sx={{ my: 1 }} />
                    user: <strong>pi</strong>
                    <br />
                    password: <strong>parrot</strong>
                  </Alert>
                </Grid>
                <Grid container item xs={12} md={4} spacing={3} wrap="wrap-reverse">
                  <Grid item xs={12} sm={6} md={12}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      paddingTop="10px"
                      paddingBottom="10px"
                    >
                      <Typography variant="body2Semi">Version</Typography>
                      <Typography variant="body2">5.1 Electro Ara</Typography>
                    </Box>
                    <Divider variant="fullWidth" />
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      paddingTop="10px"
                      paddingBottom="10px"
                    >
                      <Typography variant="body2Semi">Release Date</Typography>
                      <Typography variant="body2">Sept 26, 2022</Typography>
                    </Box>
                    <Divider variant="fullWidth" />
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      paddingTop="10px"
                      paddingBottom="10px"
                    >
                      <Typography variant="body2Semi">Architecture</Typography>
                      <Typography variant="body2">armhf, arm64</Typography>
                    </Box>
                    <Divider variant="fullWidth" />
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      paddingTop="10px"
                      paddingBottom="10px"
                    >
                      <Typography variant="body2Semi">Size</Typography>
                      <Typography variant="body2">292-432 MB</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={12}>
                    <Box display="flex" flexDirection="column" style={{ gap: 10 }}>
                      <SelectButton label="Download" variant="contained">
                        <SelectButtonItem>
                          <Link href="https://download.parrot.sh/parrot/iso/5.1/Parrot-core-rpi-5.1_armhf.img.xz">
                            armhf
                          </Link>
                        </SelectButtonItem>
                        <SelectButtonItem>
                          <Link href="https://download.parrot.sh/parrot/iso/5.1/Parrot-core-rpi-5.1_arm64.img.xz">
                            arm64
                          </Link>
                        </SelectButtonItem>
                      </SelectButton>
                      <SelectButton label="Torrent" variant="outlined">
                        <SelectButtonItem>
                          <Link href="https://download.parrot.sh/parrot/iso/5.1/Parrot-core-rpi-5.1_armhf.img.xz.torrent">
                            armhf
                          </Link>
                        </SelectButtonItem>
                        <SelectButtonItem>
                          <Link href="https://download.parrot.sh/parrot/iso/5.1/Parrot-core-rpi-5.1_arm64.img.xz.torrent">
                            arm64
                          </Link>
                        </SelectButtonItem>
                      </SelectButton>
                      <PButton
                        variant="outlined"
                        to="https://download.parrot.sh/parrot/iso/5.1/signed-hashes.txt"
                      >
                        Check Hashes
                      </PButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Paper>

        <Paper className={classes.root} elevation={0}>
          <Accordion
            expanded={edition === 'home'}
            onChange={() => setEdition('home')}
            elevation={0}
            style={{ width: '100%', borderRadius: 24 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              style={{ padding: 0, marginTop: 0 }}
            >
              <Grid container direction="row">
                <Typography variant="h5" paragraph>
                  Home Edition
                </Typography>
                <Typography variant="subtitle2Semi" paragraph>
                  This version of Parrot is a lightweight installation which provides the essential
                  tools needed to start working. It relies on the same repositories as the Security
                  Edition, letting you choose most of the programs you want to install later on.
                </Typography>
              </Grid>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0 }}>
              <Grid container spacing={8} justifyContent="center" alignItems="center">
                <Grid container item xs={12} md={8} direction="column">
                  <Alert severity="warning" sx={{ my: 2, fontSize: 18 }}>
                    This image may run on older Raspberry Pi versions, but Raspberry pi 4 or greater
                    with at least 4gb of RAM is recommended. This is a product preview, and may
                    suffer performance issues.
                  </Alert>
                  <Alert severity="info" sx={{ fontSize: 18 }}>
                    Default credentials:
                    <Divider sx={{ my: 1 }} />
                    user: <strong>pi</strong>
                    <br />
                    password: <strong>parrot</strong>
                  </Alert>
                </Grid>
                <Grid container item xs={12} md={4} spacing={3} wrap="wrap-reverse">
                  <Grid item xs={12} sm={6} md={12}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      paddingTop="10px"
                      paddingBottom="10px"
                    >
                      <Typography variant="body2Semi">Version</Typography>
                      <Typography variant="body2">5.1 Electro Ara</Typography>
                    </Box>
                    <Divider variant="fullWidth" />
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      paddingTop="10px"
                      paddingBottom="10px"
                    >
                      <Typography variant="body2Semi">Release Date</Typography>
                      <Typography variant="body2">Sept 26, 2022</Typography>
                    </Box>
                    <Divider variant="fullWidth" />
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      paddingTop="10px"
                      paddingBottom="10px"
                    >
                      <Typography variant="body2Semi">Architecture</Typography>
                      <Typography variant="body2">armhf, arm64</Typography>
                    </Box>
                    <Divider variant="fullWidth" />
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      paddingTop="10px"
                      paddingBottom="10px"
                    >
                      <Typography variant="body2Semi">Size</Typography>
                      <Typography variant="body2">897 MB - 1 GB</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={12}>
                    <Box display="flex" flexDirection="column" style={{ gap: 10 }}>
                      <SelectButton label="Download" variant="contained">
                        <SelectButtonItem>
                          <Link href="https://download.parrot.sh/parrot/iso/5.1/Parrot-home-rpi-5.1_armhf.img.xz">
                            armhf
                          </Link>
                        </SelectButtonItem>
                        <SelectButtonItem>
                          <Link href="https://download.parrot.sh/parrot/iso/5.1/Parrot-home-rpi-5.1_arm64.img.xz">
                            arm64
                          </Link>
                        </SelectButtonItem>
                      </SelectButton>
                      <SelectButton label="Torrent" variant="outlined">
                        <SelectButtonItem>
                          <Link href="https://download.parrot.sh/parrot/iso/5.0.1/Parrot-home-rpi-5.0.1_armhf.img.xz.torrent">
                            armhf
                          </Link>
                        </SelectButtonItem>
                        <SelectButtonItem>
                          <Link href="https://download.parrot.sh/parrot/iso/5.1/Parrot-home-rpi-5.1_arm64.img.xz.torrent">
                            arm64
                          </Link>
                        </SelectButtonItem>
                      </SelectButton>
                      <PButton
                        variant="outlined"
                        to="https://download.parrot.sh/parrot/iso/5.1/signed-hashes.txt"
                      >
                        Check Hashes
                      </PButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Paper>

        <Paper className={classes.root} elevation={0}>
          <Accordion
            expanded={edition === 'security'}
            onChange={() => setEdition('security')}
            elevation={0}
            style={{ width: '100%', borderRadius: 24 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              style={{ padding: 0, marginTop: 0 }}
            >
              <Grid container direction="row">
                <Typography variant="h5" paragraph>
                  Security Edition
                </Typography>
                <Typography variant="subtitle2Semi" paragraph>
                  As the name suggests, this is the full edition. After the installation you have a
                  complete out of the box pentesting workstation loaded with a large variety of
                  tools ready to use.
                </Typography>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={8} justifyContent="center" alignItems="center">
                <Grid container item xs={12} md={8} direction="column">
                  <Alert severity="warning" sx={{ my: 2, fontSize: 18 }}>
                    This image may run on older Raspberry Pi versions, but Raspberry pi 4 or greater
                    with at least 4gb of RAM is recommended. This is a product preview, and may
                    suffer performance issues.
                  </Alert>
                  <Alert severity="info" sx={{ fontSize: 18 }}>
                    Default credentials:
                    <Divider sx={{ my: 1 }} />
                    user: <strong>pi</strong>
                    <br />
                    password: <strong>parrot</strong>
                  </Alert>
                </Grid>
                <Grid container item xs={12} md={4} spacing={3} wrap="wrap-reverse">
                  <Grid item xs={12} sm={6} md={12}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      paddingTop="10px"
                      paddingBottom="10px"
                    >
                      <Typography variant="body2Semi">Version</Typography>
                      <Typography variant="body2">5.1 Electro Ara</Typography>
                    </Box>
                    <Divider variant="fullWidth" />
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      paddingTop="10px"
                      paddingBottom="10px"
                    >
                      <Typography variant="body2Semi">Release Date</Typography>
                      <Typography variant="body2">Sept 26, 2022</Typography>
                    </Box>
                    <Divider variant="fullWidth" />
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      paddingTop="10px"
                      paddingBottom="10px"
                    >
                      <Typography variant="body2Semi">Architecture</Typography>
                      <Typography variant="body2">armhf, arm64</Typography>
                    </Box>
                    <Divider variant="fullWidth" />
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      paddingTop="10px"
                      paddingBottom="10px"
                    >
                      <Typography variant="body2Semi">Size</Typography>
                      <Typography variant="body2">2.4 - 2.7 GB</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={12}>
                    <Box display="flex" flexDirection="column" style={{ gap: 10 }}>
                      <SelectButton label="Download" variant="contained">
                        <SelectButtonItem>
                          <Link href="https://download.parrot.sh/parrot/iso/5.1/Parrot-security-rpi-5.0.1_armhf.img.xz">
                            armhf
                          </Link>
                        </SelectButtonItem>
                        <SelectButtonItem>
                          <Link href="https://download.parrot.sh/parrot/iso/5.1/Parrot-security-rpi-5.1_arm64.img.xz">
                            arm64
                          </Link>
                        </SelectButtonItem>
                      </SelectButton>
                      <SelectButton label="Torrent" variant="outlined">
                        <SelectButtonItem>
                          <Link href="https://download.parrot.sh/parrot/iso/5.1/Parrot-security-rpi-5.1_armhf.img.xz.torrent">
                            armhf
                          </Link>
                        </SelectButtonItem>
                        <SelectButtonItem>
                          <Link href="https://download.parrot.sh/parrot/iso/5.1/Parrot-security-rpi-5.1_arm64.img.xz.torrent">
                            arm64
                          </Link>
                        </SelectButtonItem>
                      </SelectButton>
                      <PButton
                        variant="outlined"
                        to="https://download.parrot.sh/parrot/iso/5.1/signed-hashes.txt"
                      >
                        Check Hashes
                      </PButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Grid>
    </>
  )
}

export default OSRaspberry
