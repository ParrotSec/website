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
import { Fragment, useState } from 'react'

import PButton from 'components/PButton'
import SelectButton, { SelectButtonItem } from 'components/SelectButton'

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: theme.spacing(8)
  },
  root: {
    width: '100%',
    padding: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4)
    }
  },
  gridHrMarginTop: {
    marginTop: 30,
    marginBottom: 30
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
  alert: {}
}))

const OSRaspberry = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(true)
  return (
    <>
      <Grid className={classes.section} container justifyContent="center">
        <Paper className={classes.root} elevation={0}>
          <Typography variant="h4" paragraph>
            Raspberry Pi Images
          </Typography>
          <Typography variant="subtitle2Semi" paragraph>
            From release 5.0, Parrot is also available for Raspberry Pi 4. Without DE, you can
            install whatever you like.
          </Typography>
          <Grid container spacing={8} justifyContent="center" alignItems="center">
            <Grid container item xs={12} md={8} direction="column">
              <Alert severity="warning" sx={{ my: 2, fontSize: 18 }}>
                These images may run on older Raspberry Pi versions, but Raspberry pi 4 or greater
                with at least 4gb of RAM is recommended. They are a product preview, and may suffer
                performance issues.
              </Alert>
              <Alert severity="info" sx={{ fontSize: 18 }}>
                Currently it is only available in the core version, the Home and Security versions
                will come later.
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
                  <Typography variant="body2">5.0 Electro Ara</Typography>
                </Box>
                <Divider variant="fullWidth" />
                <Box
                  display="flex"
                  justifyContent="space-between"
                  paddingTop="10px"
                  paddingBottom="10px"
                >
                  <Typography variant="body2Semi">Release Date</Typography>
                  <Typography variant="body2">Mar 24, 2022</Typography>
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
                  <Typography variant="body2">100-150 MB</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <Box display="flex" flexDirection="column" style={{ gap: 10 }}>
                  <SelectButton label="Download" variant="contained">
                    <SelectButtonItem>
                      <Link href="https://download.parrot.sh/parrot/iso/5.0/Parrot-core-rpi-5.0_armhf.img.xz">
                        armhf
                      </Link>
                    </SelectButtonItem>
                    <SelectButtonItem>
                      <Link href="https://download.parrot.sh/parrot/iso/5.0/Parrot-core-rpi-5.0_arm64.img.xz">
                        arm64
                      </Link>
                    </SelectButtonItem>
                  </SelectButton>
                  <SelectButton label="Torrent" variant="outlined">
                    <SelectButtonItem>
                      <Link href="#">armhf</Link>
                    </SelectButtonItem>
                    <SelectButtonItem>
                      <Link href="#">arm64</Link>
                    </SelectButtonItem>
                  </SelectButton>
                  <PButton
                    variant="outlined"
                    to="https://download.parrot.sh/parrot/iso/5.0/signed-hashes.txt"
                  >
                    Check Hashes
                  </PButton>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider variant="fullWidth" />
            </Grid>
          </Grid>
          <Accordion
            expanded={expanded}
            onChange={(_event, xp) => setExpanded(xp)}
            elevation={0}
            style={{ width: '100%' }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              style={{ padding: 0 }}
            >
              <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                <Typography className={classes.subBlockHeading} variant="subtitle2">
                  Features
                </Typography>
                <Typography color="primary" variant="body1">
                  {expanded ? 'Hide Features' : 'Show Features'}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0 }}>
              <Grid container>
                <Fragment>
                  <Grid item xs={12} container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <Typography variant="body1">ParrotOS on Raspberry Pi 4</Typography>
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
                        Customizable.
                      </Typography>
                      <Typography variant="body2Semi">
                        You can customize it as you prefer, with any DE and any tool.
                      </Typography>
                    </Grid>
                  </Grid>
                </Fragment>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Grid className={classes.gridHrMarginTop} item xs={12}>
            <Divider variant="fullWidth" />
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
                <Typography variant="body1">2 GB RAM</Typography>
              </Grid>
              <Grid container direction="column" item xs={12} sm={6} lg={3}>
                <Typography variant="body2Semi">Storage</Typography>
                <Typography variant="body1">8 GB available space</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  )
}

export default OSRaspberry
