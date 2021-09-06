import React, { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  GridProps,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core'
import homeMate1 from './assets/home-mate-1.png'
import Carousel from 'react-material-ui-carousel'
import PButton from 'components/PButton'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: `${theme.spacing(4)}px ${theme.spacing(8)}px`
  },
  lowOpacity: {
    opacity: 0.5
  },
  highOpacity: {
    opacity: 1
  },
  accordionSummary: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  gridHrMarginTop: {
    marginTop: 30
  }
}))

const DESection = ({ className, ...rest }: GridProps) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(true)
  return (
    <Grid className={className} container item xs={12} lg={8} {...rest}>
      <Paper className={classes.root} elevation={0}>
        <Typography variant="h3" paragraph>
          MATE Desktop
        </Typography>
        <Typography variant="subtitle2" paragraph>
          MATE is a lightweight desktop environment with a classical GNU/Linux layout. It is the
          default desktop environment of Parrot OS and represents the iconical look and feel of the
          system.
        </Typography>
        <Grid container spacing={8}>
          <Grid container item xs={12} lg={8} direction="column">
            <div>
              <Carousel
                /* fullHeightHover={false}*/
                navButtonsAlwaysVisible
                indicators
                autoPlay={false}
                /* navButtonsWrapperProps={{
                  // Move the buttons to the bottom. Unsetting top here to override default style.
                  style: {
                    bottom: 20,
                    top: 'unset',
                    margin: '0px calc(50% - 132px)',
                    height: 'auto'
                  }
                }}*/
                navButtonsProps={{
                  style: {
                    width: 40,
                    height: 40,
                    backgroundColor: '#06043E'
                  }
                }}
                indicatorContainerProps={{
                  style: {
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center'
                    /* padding: 32,
                    marginTop: 0*/
                  }
                }}
                indicatorIconButtonProps={{
                  style: {
                    padding: 3,
                    color: 'rgba(255,255,255,0.5)'
                  }
                }}
                activeIndicatorIconButtonProps={{
                  style: {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    padding: 3,
                    color: '#fff'
                  }
                }}
                IndicatorIcon={
                  <FiberManualRecordIcon
                    style={{
                      width: 9,
                      height: 9
                    }}
                  />
                }
              >
                {/*TODO: for responsiveness width should be changed to 100% and a popup needed to check the screens in fq*/}
                <Box width="100%">
                  <img src={homeMate1} alt="" style={{ width: '100%' }} />
                </Box>
                <Box width="100%">
                  <img src={homeMate1} alt="" style={{ width: '100%' }} />
                </Box>
                <Box width="100%">
                  <img src={homeMate1} alt="" style={{ width: '100%' }} />
                </Box>
                <Box width="100%">
                  <img src={homeMate1} alt="" style={{ width: '100%' }} />
                </Box>
                <Box width="100%">
                  <img src={homeMate1} alt="" style={{ width: '100%' }} />
                </Box>
              </Carousel>
            </div>
          </Grid>
          <Grid container item xs={12} lg={4} direction="column">
            <Box display="flex" flexDirection="column" style={{ gap: 10 }}>
              <PButton gradient variant="contained">
                Download OS
              </PButton>
              <PButton variant="outlined">Torrent</PButton>
              <PButton variant="outlined">Virtual Appliance</PButton>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              paddingTop="20px"
              paddingBottom="10px"
            >
              <Typography className={classes.lowOpacity} variant="body2">
                Developer
              </Typography>
              <Typography variant="body2">Parrot OS</Typography>
            </Box>
            <Divider variant="fullWidth" />
            <Box
              display="flex"
              justifyContent="space-between"
              paddingTop="10px"
              paddingBottom="10px"
            >
              <Typography className={classes.lowOpacity} variant="body2">
                Release Date
              </Typography>
              <Typography variant="body2">Aug 17, 2021</Typography>
            </Box>
            <Divider variant="fullWidth" />
            <Box
              display="flex"
              justifyContent="space-between"
              paddingTop="10px"
              paddingBottom="10px"
            >
              <Typography className={classes.lowOpacity} variant="body2">
                Platform
              </Typography>
              <Typography variant="body2">Win, Mac</Typography>
            </Box>
            <Divider variant="fullWidth" />
            <Box
              display="flex"
              justifyContent="space-between"
              paddingTop="10px"
              paddingBottom="10px"
            >
              <Typography className={classes.lowOpacity} variant="body2">
                Size
              </Typography>
              <Typography variant="body2">12GB</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid className={classes.gridHrMarginTop} item xs={12}>
          <Divider variant="fullWidth" />
        </Grid>
        <Grid className={classes.gridHrMarginTop} item xs={12}>
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
                <Typography className={classes.highOpacity} variant="subtitle2">
                  Features
                </Typography>
                <Typography className={classes.highOpacity} color="primary" variant="body1">
                  {expanded ? 'Hide Features' : 'Show Features'}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0 }}>
              <Grid container>
                <Grid item xs={12} container>
                  <Grid item xs={4}>
                    <Typography className={classes.highOpacity} variant="body1">
                      Workspace
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.highOpacity} variant="body1" paragraph>
                      iCloud Private Relay
                    </Typography>
                    <Typography className={classes.lowOpacity} variant="body2">
                      iCloud Private Relay is a service that lets you connect to virtually any
                      network and browse with Safari in an even more secure and private way.
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.highOpacity} variant="body1" paragraph>
                      Hide My Email
                    </Typography>
                    <Typography className={classes.lowOpacity} variant="body2">
                      Hide My Email allows you to create unique, random email addresses that forward
                      to your personal inbox.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid className={classes.gridHrMarginTop} item xs={12}>
                  <Divider variant="fullWidth" />
                </Grid>
                <Grid className={classes.gridHrMarginTop} item container xs={12}>
                  <Grid item xs={4}>
                    <Typography className={classes.highOpacity} variant="body1">
                      Accessibility
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.highOpacity} variant="body1" paragraph>
                      iCloud Private Relay
                    </Typography>
                    <Typography className={classes.lowOpacity} variant="body2">
                      iCloud Private Relay is a service that lets you connect to virtually any
                      network and browse with Safari in an even more secure and private way.
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.highOpacity} variant="body1" paragraph>
                      Hide My Email
                    </Typography>
                    <Typography className={classes.lowOpacity} variant="body2">
                      Hide My Email allows you to create unique, random email addresses that forward
                      to your personal inbox.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Grid className={classes.gridHrMarginTop} item xs={12}>
            <Divider variant="fullWidth" />
          </Grid>
          <Grid className={classes.gridHrMarginTop} item xs={12}>
            <Typography className={classes.highOpacity} variant="subtitle2">
              Requirements
            </Typography>
            <Box display="flex" width="100%" justifyContent="space-between" marginTop={2}>
              <div>
                <Typography className={classes.lowOpacity} variant="body2">
                  Processor
                </Typography>
                <Typography className={classes.highOpacity} variant="body1">
                  Intel Core i5 or equivalent
                </Typography>
              </div>
              <div>
                <Typography className={classes.lowOpacity} variant="body2">
                  Graphics
                </Typography>
                <Typography className={classes.highOpacity} variant="body1">
                  No Graphical Acceleration Required
                </Typography>
              </div>
              <div>
                <Typography className={classes.lowOpacity} variant="body2">
                  Memory
                </Typography>
                <Typography className={classes.highOpacity} variant="body1">
                  8 GB RAM
                </Typography>
              </div>
              <div>
                <Typography className={classes.lowOpacity} variant="body2">
                  Storage
                </Typography>
                <Typography className={classes.highOpacity} variant="body1">
                  16 GB available space
                </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default DESection
