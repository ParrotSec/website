import { Breadcrumbs, Button, Grid, Tab, Tabs } from '@mui/material'
import { makeStyles, styled } from '@mui/styles'
import RouterLink from 'next/link'
import { SyntheticEvent, useEffect, useState } from 'react'

import Left from 'assets/Left.svg'
import Carousel from 'components/Carousel'
import OSArchitect from 'containers/DownloadContainers/OSArchitect'
import OSCloud from 'containers/DownloadContainers/OSCloud'
import OSHome from 'containers/DownloadContainers/OSHome'
import OSSecurity from 'containers/DownloadContainers/OSSecurity'

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
    margin: 'auto'
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

const OSSelection = ({ initialVersion }: OSSelectionProps) => {
  const classes = useStyles()
  const [os, setOS] = useState<'home' | 'security' | 'cloud' | 'architect'>(
    initialVersion ?? 'home'
  )

  useEffect(() => setOS(initialVersion ?? 'home'), [initialVersion])

  const osIndexes = {
    home: 0,
    security: 1,
    cloud: 2,
    architect: 3
  }

  const [value, setValue] = useState('home')

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
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
            value={value}
            onChange={handleChange}
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
      </Grid>
      <Carousel
        indicators={false}
        autoPlay={false}
        swipe={false}
        navButtonsAlwaysInvisible
        animation="fade"
        index={osIndexes[os]}
      >
        <OSHome classesGeneral={classes} />
        <OSSecurity classesGeneral={classes} />
        <OSCloud classesGeneral={classes} />
        <OSArchitect classesGeneral={classes} />
      </Carousel>
    </>
  )
}

export default OSSelection
