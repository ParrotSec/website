import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  GridProps,
  Paper,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'
import { useSnackbar } from 'notistack'
import { ReactNode, useState, Fragment } from 'react'
import Lightbox from 'react-image-lightbox'

import Carousel from 'components/Carousel'
import PButton from 'components/PButton'
import SelectButton, { SelectButtonItem } from 'components/SelectButton'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4)
    }
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
  name?: string
  description?: ReactNode
  version: string
  releaseDate: string
  architecture: string
  size: string
  download?: string
  url?: string
  torrent?: {
    arm64?: string
    amd64?: string
    i386?: string
    armhf?: string
  }
  torrentButton?: string
  torrentUrl?: string
  architectEdition?: {
    arm64?: string
    amd64?: string
    i386?: string
    armhf?: string
  }
  screenshots: StaticImageData[]
  requirements?: FixedLengthArray<{ heading: string; description: string }, 4>
  features?: {
    hero: string
    content: FixedLengthArray<{ heading: ReactNode; description: ReactNode }, 2>
  }[]
  hashes?: {
    md5?: string
    sha1?: string
    sha224?: string
    sha256?: string
    sha384?: string
    sha512?: string
  }
  allHashes?: {
    url: string
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
  download,
  url,
  torrent,
  torrentUrl,
  torrentButton,
  architectEdition,
  screenshots,
  requirements,
  features,
  hashes,
  allHashes,
  ...rest
}: DESectionProps) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(true)
  const [lightBoxOpened, setLightBoxOpened] = useState(false)
  const [lightBoxIndex, setLightBoxIndex] = useState(0)
  const { enqueueSnackbar } = useSnackbar()

  return (
    <Grid className={className} container item xs={12} {...rest}>
      <Paper className={classes.root} elevation={0}>
        <Typography variant="h4" paragraph>
          {name}
        </Typography>
        <Typography variant="subtitle2Semi" paragraph>
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
                <Typography variant="body2Semi">Version</Typography>
                <Typography variant="body2">{version}</Typography>
              </Box>
              <Divider variant="fullWidth" />
              <Box
                display="flex"
                justifyContent="space-between"
                paddingTop="10px"
                paddingBottom="10px"
              >
                <Typography variant="body2Semi">Release Date</Typography>
                <Typography variant="body2">{releaseDate}</Typography>
              </Box>
              <Divider variant="fullWidth" />
              <Box
                display="flex"
                justifyContent="space-between"
                paddingTop="10px"
                paddingBottom="10px"
              >
                <Typography variant="body2Semi">Architecture</Typography>
                <Typography variant="body2">{architecture}</Typography>
              </Box>
              <Divider variant="fullWidth" />
              <Box
                display="flex"
                justifyContent="space-between"
                paddingTop="10px"
                paddingBottom="10px"
              >
                <Typography variant="body2Semi">Size</Typography>
                <Typography variant="body2">{size}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <Box display="flex" flexDirection="column" style={{ gap: 10 }}>
                {download && (
                  <PButton gradient variant="contained" to={url}>
                    Download
                  </PButton>
                )}
                {architectEdition && (
                  <SelectButton label="Download" variant="contained">
                    {Object.entries(architectEdition).map(([key, value]) => (
                      <SelectButtonItem key={key}>
                        <Link href={value}>{key}</Link>
                      </SelectButtonItem>
                    ))}
                  </SelectButton>
                )}
                {torrent && (
                  <SelectButton label="Torrent" variant="outlined">
                    {Object.entries(torrent).map(([key, value]) => (
                      <SelectButtonItem key={key}>
                        <Link href={value}>{key}</Link>
                      </SelectButtonItem>
                    ))}
                  </SelectButton>
                )}
                {torrentButton && (
                  <PButton variant="outlined" to={torrentUrl}>
                    Torrent
                  </PButton>
                )}
                {/*<PButton variant="outlined">Virtual Appliance</PButton>*/}
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
                {allHashes && (
                  <PButton
                    variant="outlined"
                    to="https://download.parrot.sh/parrot/iso/5.1/signed-hashes.txt"
                  >
                    Check Hashes
                  </PButton>
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
                  {features.map(({ hero, content }, i, arr) => (
                    <Fragment key={`features-fragment-${i}`}>
                      <Grid item xs={12} container spacing={2} key={`features-${i}`}>
                        <Grid item xs={12} sm={4} key={`features-hero-grid-${i}`}>
                          <Typography variant="body1" key={`features-hero-${i}`}>
                            {hero}
                          </Typography>
                        </Grid>
                        {content.map(({ heading, description }, j) => (
                          <Grid item xs={12} sm={4} key={`features-inner-${i}-${j}`}>
                            <Typography
                              variant="body1"
                              paragraph
                              key={`features-inner-${i}-${j}-heading`}
                            >
                              {heading}
                            </Typography>
                            <Typography
                              variant="body2Semi"
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
                <Typography className={classes.subBlockHeading} variant="subtitle2" paragraph>
                  Requirements
                </Typography>
                <Grid container item xs={12} justifyContent="space-between" spacing={3}>
                  {requirements.map(({ heading, description }, i) => (
                    <Grid
                      container
                      direction="column"
                      item
                      xs={12}
                      sm={6}
                      lg={3}
                      key={`requirements-${i}`}
                    >
                      <Typography variant="body2Semi" key={`requirements-${i}-heading`}>
                        {heading}
                      </Typography>
                      <Typography variant="body1" key={`requirements-${i}-description`}>
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
