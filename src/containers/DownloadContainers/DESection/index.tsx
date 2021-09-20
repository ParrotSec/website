import { ReactNode, useState, Fragment } from 'react'
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
import Carousel from 'components/Carousel'
import PButton from 'components/PButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import cls from 'classnames'
import SelectButton, { SelectButtonItem } from 'components/SelectButton'
import { useSnackbar } from 'notistack'
import Lightbox from 'react-image-lightbox'

const useStyles = makeStyles(theme => ({
  grid: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  root: {
    width: '100%',
    padding: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4)
    }
  },
  subtitleMargined: {
    marginBottom: theme.spacing(4)
  },
  lowOpacity: {
    opacity: 0.5
  },
  highOpacity: {
    opacity: 1
  },
  subBlockHeading: {
    fontFamily: 'museo-sans',
    fontWeight: 900
  },
  accordionSummary: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  gridHrMarginTop: {
    marginTop: 30,
    marginBottom: 30
  },
  carouselImg: {
    display: 'block',
    margin: 'auto',
    cursor: 'zoom-in'
  }
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
  name: string
  description: ReactNode
  version: string
  releaseDate: string
  architecture: string
  size: string
  screenshots: StaticImageData[]
  requirements?: FixedLengthArray<{ heading: string; description: string }, 4>
  features?: {
    hero: string
    content: FixedLengthArray<{ heading: ReactNode; description: ReactNode }, 2>
  }[]
  hashes?: {
    md5: string
    sha1: string
    sha224: string
    sha256: string
    sha384: string
    sha512: string
  }
} & GridProps

const DESection = ({
  className,
  name,
  description,
  version,
  releaseDate,
  architecture,
  size,
  screenshots,
  requirements,
  features,
  hashes,
  ...rest
}: DESectionProps) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(true)
  const [lightBoxOpened, setLightBoxOpened] = useState(false)
  const [lightBoxIndex, setLightBoxIndex] = useState(0)
  const { enqueueSnackbar } = useSnackbar()

  return (
    <Grid className={cls(classes.grid, className)} container item xs={12} lg={8} {...rest}>
      <Paper className={classes.root} elevation={0}>
        <Typography variant="h5" paragraph>
          {name}
        </Typography>
        <Typography variant="subtitle2" paragraph>
          {description}
        </Typography>
        <Grid container spacing={8} justifyContent="center" alignItems="center">
          <Grid container item xs={12} md={8} direction="column">
            {lightBoxOpened && (
              <Lightbox
                mainSrc={screenshots[lightBoxIndex].src}
                nextSrc={screenshots[(lightBoxIndex + 1) % screenshots.length].src}
                prevSrc={
                  screenshots[(lightBoxIndex + screenshots.length - 1) % screenshots.length].src
                }
                mainSrcThumbnail={screenshots[lightBoxIndex].src}
                nextSrcThumbnail={screenshots[(lightBoxIndex + 1) % screenshots.length].src}
                prevSrcThumbnail={
                  screenshots[(lightBoxIndex + screenshots.length - 1) % screenshots.length].src
                }
                onAfterOpen={() => (document.body.style.overflow = 'hidden')}
                onCloseRequest={() => {
                  setLightBoxOpened(false)
                  document.body.style.overflow = 'auto'
                }}
                onMoveNextRequest={() =>
                  setLightBoxIndex((lightBoxIndex + screenshots.length - 1) % screenshots.length)
                }
                onMovePrevRequest={() => setLightBoxIndex((lightBoxIndex + 1) % screenshots.length)}
                animationDisabled
              />
            )}
            <Carousel>
              {screenshots.map((image, i) => (
                <img
                  className={classes.carouselImg}
                  src={image.src}
                  onClick={() => setLightBoxOpened(true)}
                  key={`screenshot-${i}`}
                  alt={`screenshot-${i}`}
                />
              ))}
            </Carousel>
          </Grid>
          <Grid container item xs={12} md={4} spacing={3} wrap="wrap-reverse">
            <Grid item xs={12} sm={6} md={12}>
              <Box
                display="flex"
                justifyContent="space-between"
                paddingTop="10px"
                paddingBottom="10px"
              >
                <Typography className={classes.lowOpacity} variant="body2">
                  Version
                </Typography>
                <Typography variant="body2">{version}</Typography>
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
                <Typography variant="body2">{releaseDate}</Typography>
              </Box>
              <Divider variant="fullWidth" />
              <Box
                display="flex"
                justifyContent="space-between"
                paddingTop="10px"
                paddingBottom="10px"
              >
                <Typography className={classes.lowOpacity} variant="body2">
                  Architecture
                </Typography>
                <Typography variant="body2">{architecture}</Typography>
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
                <Typography variant="body2">{size}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <Box display="flex" flexDirection="column" style={{ gap: 10 }}>
                <PButton gradient variant="contained">
                  Download OS
                </PButton>
                <PButton variant="outlined">Torrent</PButton>
                <PButton variant="outlined">Virtual Appliance</PButton>
                {hashes && (
                  <SelectButton label="Compare Hashes" variant="outlined">
                    {Object.entries(hashes).map(([key, value]) => (
                      <SelectButtonItem
                        key={key}
                        onClick={async () => {
                          await navigator.clipboard.writeText(value)
                          enqueueSnackbar('Hash Copied!', { variant: 'success' })
                        }}
                      >
                        {key.toUpperCase()}
                      </SelectButtonItem>
                    ))}
                  </SelectButton>
                )}
              </Box>
            </Grid>
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
                  <Typography className={cls(classes.subBlockHeading, classes.highOpacity)} variant="subtitle2">
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
                    <Fragment key={`features-fragment-${i}`}>
                      <Grid item xs={12} container spacing={2} key={`features-${i}`}>
                        <Grid item xs={12} sm={4} key={`features-hero-grid-${i}`}>
                          <Typography
                            className={classes.highOpacity}
                            variant="body1"
                            key={`features-hero-${i}`}
                          >
                            {hero}
                          </Typography>
                        </Grid>
                        {content.map(({ heading, description }, j) => (
                          <Grid item xs={12} sm={4} key={`features-inner-${i}-${j}`}>
                            <Typography
                              className={classes.highOpacity}
                              variant="body1"
                              paragraph
                              key={`features-inner-${i}-${j}-heading`}
                            >
                              {heading}
                            </Typography>
                            <Typography
                              className={classes.lowOpacity}
                              variant="body2"
                              key={`features-inner-${i}-${j}-description`}
                            >
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
                    </Fragment>
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
                <Typography className={cls(classes.subBlockHeading, classes.highOpacity)} variant="subtitle2" paragraph>
                  Requirements
                </Typography>
                <Grid container item xs={12} justifyContent="space-between" spacing={3}>
                  {requirements.map(({ heading, description }, i) => (
                    <Grid item xs={12} sm={6} lg={3} key={`requirements-${i}`}>
                      <Typography
                        className={classes.lowOpacity}
                        variant="body2"
                        key={`requirements-${i}-heading`}
                      >
                        {heading}
                      </Typography>
                      <Typography
                        className={classes.highOpacity}
                        variant="body1"
                        key={`requirements-${i}-description`}
                      >
                        {description}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Paper>
    </Grid>
  )
}

export default DESection
