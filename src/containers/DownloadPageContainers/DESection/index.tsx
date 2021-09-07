import React, { ReactNode, useState } from 'react'
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
import Carousel from 'components/Carousel'
import PButton from 'components/PButton'
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
    marginTop: 30,
    marginBottom: 30
  },
  buttons: {}
}))

type FixedLengthArray<T, L extends number, TObj = [T, ...Array<T>]> = Pick<
  TObj,
  Exclude<keyof TObj, 'splice' | 'push' | 'pop' | 'shift' | 'unshift'>
> & {
  readonly length: L
  [I: number]: T
  [Symbol.iterator]: () => IterableIterator<T>
}

type DESectionProps = {
  requirements?: FixedLengthArray<{ heading: string; description: string }, 4>
  features?: Array<{
    hero: string
    content: FixedLengthArray<{ heading: ReactNode; description: ReactNode }, 2>
  }>
} & GridProps

const DESection = ({ className, requirements, features, ...rest }: DESectionProps) => {
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
            <Carousel>
              {/*TODO: for responsiveness width should be changed to 100% and a popup needed to check the screens in fq*/}
              <Box width="100%">
                <img src={homeMate1} alt="" style={{ display: 'block', margin: 'auto' }} />
              </Box>
              <Box width="100%">
                <img src={homeMate1} alt="" style={{ display: 'block', margin: 'auto' }} />
              </Box>
              <Box width="100%">
                <img src={homeMate1} alt="" style={{ display: 'block', margin: 'auto' }} />
              </Box>
              <Box width="100%">
                <img src={homeMate1} alt="" style={{ display: 'block', margin: 'auto' }} />
              </Box>
              <Box width="100%">
                <img src={homeMate1} alt="" style={{ display: 'block', margin: 'auto' }} />
              </Box>
            </Carousel>
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
        {(features || requirements) && (
          <Grid className={classes.gridHrMarginTop} item xs={12}>
            <Divider variant="fullWidth" />
          </Grid>
        )}
        <Grid className={classes.gridHrMarginTop} item xs={12}>
          {features && (
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
                  {features.map(({ hero, content }, i, arr) => (
                    <>
                      <Grid item xs={12} container spacing={2} key={`features-${i}`}>
                        <Grid item xs={4}>
                          <Typography className={classes.highOpacity} variant="body1">
                            {hero}
                          </Typography>
                        </Grid>
                        {content.map(({ heading, description }, j) => (
                          <Grid item xs={4} key={`features-inner-${i}-${j}`}>
                            <Typography className={classes.highOpacity} variant="body1" paragraph>
                              {heading}
                            </Typography>
                            <Typography className={classes.lowOpacity} variant="body2">
                              {description}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                      {arr.length - 1 !== i && (
                        <Grid
                          className={classes.gridHrMarginTop}
                          item
                          xs={12}
                          key={`features-hr-${i}`}
                        >
                          <Divider variant="fullWidth" />
                        </Grid>
                      )}
                    </>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          )}
          {requirements && (
            <>
              <Grid className={classes.gridHrMarginTop} item xs={12}>
                <Divider variant="fullWidth" />
              </Grid>
              <Grid className={classes.gridHrMarginTop} item xs={12}>
                <Typography className={classes.highOpacity} variant="subtitle2">
                  Requirements
                </Typography>
                <Box display="flex" width="100%" justifyContent="space-between" marginTop={2}>
                  {requirements.map(({ heading, description }, i) => (
                    <div key={`requirements-${i}`}>
                      <Typography className={classes.lowOpacity} variant="body2">
                        {heading}
                      </Typography>
                      <Typography className={classes.highOpacity} variant="body1">
                        {description}
                      </Typography>
                    </div>
                  ))}
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </Paper>
    </Grid>
  )
}

export default DESection
