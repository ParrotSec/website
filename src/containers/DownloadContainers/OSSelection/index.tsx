import MuiExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Hidden,
  Tabs,
  Tab,
  Typography as MuiTypography
} from '@mui/material'
import { makeStyles, styled } from '@mui/styles'
import cls from 'classnames'
import RouterLink from 'next/link'
import { useEffect, useState } from 'react'

import Left from 'assets/Left.svg'
import Carousel from 'components/Carousel'
import OSArchitect from 'containers/DownloadContainers/OSArchitect'
import OSCloud from 'containers/DownloadContainers/OSCloud'
import OSHome from 'containers/DownloadContainers/OSHome'
import OSPwnbox from 'containers/DownloadContainers/OSPwnbox'
import OSRaspberry from 'containers/DownloadContainers/OSRaspberry'
import OSSecurity from 'containers/DownloadContainers/OSSecurity'
import Architect from 'containers/HomeContainers/OSSection/assets/Architect.svg'
import Cloud from 'containers/HomeContainers/OSSection/assets/Cloud.svg'
import HackTheBox from 'containers/HomeContainers/OSSection/assets/hackthebox.svg'
import Home from 'containers/HomeContainers/OSSection/assets/Home.svg'
import Raspberry from 'containers/HomeContainers/OSSection/assets/Raspberry.svg'
import Security from 'containers/HomeContainers/OSSection/assets/Security.svg'

const useStyles = makeStyles(theme => ({
  arrow: {
    verticalAlign: 'middle',
    fill: theme.palette.text.secondary
  },
  gridHeader: {
    marginTop: 45
  },
  headerIcon: {
    width: 32,
    height: 32,
    marginRight: theme.spacing(1)
  },
  iconHolder: {
    width: 64,
    height: 64,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2)
    }
  },
  crumb: {
    textTransform: 'none',
    color: theme.palette.text.secondary
  },
  buttons: {
    gap: 24
  },
  osSelect: {
    textTransform: 'none',
    color: theme.palette.text.primary
  },
  selected: {
    color: theme.palette.primary.main
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  home: {
    background: 'linear-gradient(153.43deg, #00B2FF 16.67%, #0028FF 100%)'
  },
  cloud: {
    background: 'linear-gradient(180deg, #E806FF 10%, #B505CC 90%)'
  },
  hackthebox: {
    background: 'linear-gradient(180deg, #9FEF00 10%, #98D521 90%)'
  },
  security: {
    background: 'linear-gradient(153.43deg, #FF9800 16.67%, #EC4F00 100%)'
  },
  architect: {
    background: 'linear-gradient(180deg, #B0B0B0 18%, #999999 91%)'
  },
  raspberry: {
    background: 'linear-gradient(90deg, #960E32 58%, #BD0D3B 99%)'
  },
  rounded: {
    borderRadius: '24px !important'
  },
  accordionSpecific: {
    '&:first-child': {
      marginTop: `${theme.spacing(8)} !important`
    },
    '&:not(:last-child)': { marginBottom: theme.spacing(2) },
    '&::before': {
      backgroundColor: 'unset'
    }
  }
}))

type OSSelectionProps = {
  initialVersion?: 'home' | 'security' | 'cloud' | 'architect' | 'raspberry' | 'hackthebox'
}

type EditionTabProps = {
  label: string
  value: string
  onClick: any
}

const EditionTab = styled((props: EditionTabProps) => <Tab {...props} />)(() => ({
  textTransform: 'none'
}))

type OSTypes = 'home' | 'security' | 'cloud' | 'architect' | 'raspberry' | 'hackthebox'

const Accordion = ({ gradient, ...props }: AccordionProps & { gradient: OSTypes }) => {
  const classes = useStyles()
  return (
    <MuiAccordion
      classes={{
        root: cls(
          classes[gradient as keyof typeof classes],
          classes.rounded,
          classes.accordionSpecific
        )
      }}
      {...props}
    />
  )
}

const Typography = styled(MuiTypography)({ color: 'black' })

const ExpandMoreIcon = styled(MuiExpandMoreIcon)({ fill: 'black' })

const OSSelection = ({ initialVersion }: OSSelectionProps) => {
  const classes = useStyles()
  const [os, setOS] = useState<OSTypes>(initialVersion ?? 'home')

  useEffect(() => setOS(initialVersion ?? 'home'), [initialVersion])

  const osIndexes = {
    home: 0,
    security: 1,
    hackthebox: 2,
    cloud: 3,
    architect: 4,
    raspberry: 5
  }

  return (
    <>
      <Grid
        className={classes.divider}
        container
        item
        xs={12}
        lg={10}
        justifyContent="space-between"
      >
        <Breadcrumbs separator="|" aria-label="breadcrumb">
          <RouterLink href="/">
            <Button
              className={classes.crumb}
              startIcon={<Left className={classes.arrow} fill="textSecondary" />}
            >
              ParrotOS
            </Button>
          </RouterLink>
          <Button className={classes.crumb}>Editions</Button>
        </Breadcrumbs>
      </Grid>
      <Hidden lgUp>
        <Grid
          className={classes.buttons}
          container
          item
          xs={12}
          sm
          justifyContent="flex-end"
          wrap="nowrap"
        >
          <Tabs
            value={os}
            onChange={(_, value) => setOS(value as OSTypes)}
            variant="scrollable"
            aria-label="Parrot Editions"
          >
            <EditionTab value="home" label="Home Edition" onClick={() => setOS('home')} />
            <EditionTab
              value="security"
              label="Security Edition"
              onClick={() => setOS('security')}
            />
            <EditionTab value="hackthebox" label="Pwnbox" onClick={() => setOS('hackthebox')} />
            <EditionTab value="cloud" label="Cloud Edition" onClick={() => setOS('cloud')} />
            <EditionTab
              value="architect"
              label="Architect Edition"
              onClick={() => setOS('architect')}
            />
            <EditionTab value="raspberry" label="Raspberry Pi" onClick={() => setOS('raspberry')} />
          </Tabs>
        </Grid>
      </Hidden>
      <Grid container item xs={12} lg={9} spacing={4}>
        <Hidden lgDown>
          <Grid item xs={3}>
            <div>
              <Accordion expanded={os === 'home'} onChange={() => setOS('home')} gradient="home">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
                    <Home className={classes.headerIcon} />
                    <Typography variant="inherit" align="center">
                      Home Edition
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle2Semi" align="center" mt="12px">
                    Home edition is designed for <b>daily use</b>, <b>privacy</b> and{' '}
                    <b>software development</b>.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={os === 'security'}
                onChange={() => setOS('security')}
                gradient="security"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Box display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
                    <Security className={classes.headerIcon} />
                    <Typography variant="inherit">Security Edition</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle2Semi" align="center" mt="12px">
                    Security Edition is a special purpose operating system designed for{' '}
                    <b>Penetration Testing</b> and <b>Red Team operations</b>.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={os === 'hackthebox'}
                onChange={() => setOS('hackthebox')}
                gradient="hackthebox"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Box display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
                    <HackTheBox className={classes.headerIcon} />
                    <Typography variant="inherit">Hack The Box</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle2Semi" align="center" mt="12px">
                    Try the HTB&apos;s Pwnbox on your computer.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={os === 'cloud'} onChange={() => setOS('cloud')} gradient="cloud">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Box display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
                    <Cloud className={classes.headerIcon} />
                    <Typography variant="inherit">Cloud Edition</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle2Semi" align="center" mt="12px">
                    Cloud Appliances are special editions of Parrot Security made for{' '}
                    <b>embedded devices</b>, <b>cloud environments</b>, <b>virtual machines</b> and
                    other special deployments.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={os === 'architect'}
                onChange={() => setOS('architect')}
                gradient="architect"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Box display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
                    <Architect className={classes.headerIcon} />
                    <Typography variant="inherit">Architect</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle2Semi" align="center" mt="12px">
                    ParrotOS with nothing pre-installed. Install any software and DE with this
                    edition.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={os === 'raspberry'}
                onChange={() => setOS('raspberry')}
                gradient="raspberry"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5a-content"
                  id="panel5a-header"
                >
                  <Box display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
                    <Raspberry className={classes.headerIcon} />
                    <Typography variant="inherit">Raspberry Pi</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle2Semi" align="center" mt="12px">
                    At the moment Parrot is also available for Raspberry Pi, compatibility with
                    other IoT devices will be added in the future.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Hidden>
        <Grid item xs={12} lg={9}>
          <Carousel
            indicators={false}
            autoPlay={false}
            swipe={false}
            navButtonsAlwaysInvisible
            animation="fade"
            index={osIndexes[os]}
          >
            <OSHome />
            <OSSecurity />
            <OSPwnbox />
            <OSCloud />
            <OSArchitect />
            <OSRaspberry />
          </Carousel>
        </Grid>
      </Grid>
    </>
  )
}

export default OSSelection
