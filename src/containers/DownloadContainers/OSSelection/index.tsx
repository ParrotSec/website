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
import OSSecurity from 'containers/DownloadContainers/OSSecurity'
import Cloud from 'containers/HomeContainers/OSSection/assets/Cloud.svg'
import Home from 'containers/HomeContainers/OSSection/assets/Home.svg'
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
    background: 'linear-gradient(153.43deg, #03F0FF 16.67%, #03FF77 100%)'
  },
  cloud: {
    background: 'linear-gradient(146.41deg, #00D1FF 8.11%, #020DFF 94.7%)'
  },
  security: {
    background: 'linear-gradient(145.47deg, #FAFD50 21.97%, #FD50D7 96.3%)'
  },
  architect: {
    background: 'linear-gradient(125.42deg, #5182FF 23.96%, rgba(237, 123, 255, 0.54) 100%)'
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
  initialVersion?: 'home' | 'security' | 'cloud' | 'architect'
}

type EditionTabProps = {
  label: string
  value: string
  onClick: any
}

const EditionTab = styled((props: EditionTabProps) => <Tab {...props} />)(() => ({
  textTransform: 'none'
}))

type OSTypes = 'home' | 'security' | 'cloud' | 'architect'

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
    cloud: 2,
    architect: 3
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
        <Breadcrumbs separator="|" aria-label="breadrcumb">
          <RouterLink href="/">
            <Button
              className={classes.crumb}
              startIcon={<Left className={classes.arrow} fill="textSecondary" />}
            >
              ParrotOS
            </Button>
          </RouterLink>
          <Button className={classes.crumb}>Versions</Button>
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
            <EditionTab value="cloud" label="Cloud Edition" onClick={() => setOS('cloud')} />
            <EditionTab
              value="architect"
              label="Architect Edition"
              onClick={() => setOS('architect')}
            />
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
                    <Typography variant="h6" align="center">
                      Home Edition
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle2Semi" align="center" mt="12px">
                    Home edition is designed for <b>daily use</b>, <b>privacy</b> and{' '}
                    <b>software development</b>. Parrot Tools can be manually installed to assemble
                    a custom and lightweight pentesting environment.
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
                    <Typography variant="h6">Security Edition</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle2Semi" align="center" mt="12px">
                    Security Edition is a special purpose operating system designed for{' '}
                    <b>Penetration Testing</b> and <b>Red Team operations</b>. It contains a full
                    arsenal of ready-to use pentesting tools.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={os === 'cloud'} onChange={() => setOS('cloud')} gradient="cloud">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Box display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
                    <Cloud className={classes.headerIcon} />
                    <Typography variant="h6">Cloud Edition</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle2Semi" align="center" mt="12px">
                    IoT & Cloud Appliances are special editions of Parrot Security made for{' '}
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
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Box display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
                    <Home className={classes.headerIcon} />
                    <Typography variant="h6">Architect Edition</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="subtitle2Semi" align="center" mt="12px">
                    ParrotOS with nothing pre-installed. Install any software and DE with this
                    edition.
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
            <OSCloud />
            <OSArchitect />
          </Carousel>
        </Grid>
      </Grid>
    </>
  )
}

export default OSSelection
