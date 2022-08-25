import { Box, ButtonBase, Grid, GridProps, Link, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useSnackbar } from 'notistack'

import Bitcoin from './assets/bitcoin.svg'
import bunny from './assets/bunny.png'
import linode from './assets/linode.png'
import Patreon from './assets/patreon.svg'
import Paypal from './assets/paypal.svg'
import Referral from './assets/referral.svg'

import PFeatureBlock from 'components/PFeatureBlock'
import Arrow from 'components/PFeatureBlock/assets/arrow.svg'

const useStyles = makeStyles(theme => ({
  roundedIconHolder: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    borderRadius: theme.spacing(8),
    backgroundColor: theme.palette.background.default,
    marginRight: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  button: {
    textTransform: 'none',
    color: theme.palette.mode === 'light' ? '#03232E' : '#05EEFF',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginLeft: -theme.spacing(2),
    borderRadius: 10
  },
  arrow: {
    fill: theme.palette.mode === 'light' ? '#03232E' : '#05EEFF',
    marginLeft: 8
  },
  paper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    wordBreak: 'break-word',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
    transition: theme.transitions.create('color'),
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  highOpacity: {
    opacity: 1
  }
}))

const useIconStyles = makeStyles(theme => ({
  btcWrapper: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderRadius: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  btc: {
    fill: theme.palette.mode === 'light' ? '#06043E' : '#FFFFFF'
  }
}))

const RoundedBitcoinIcon = () => {
  const classes = useIconStyles()
  return (
    <Box className={classes.btcWrapper} width={32} height={32}>
      <Bitcoin className={classes.btc} />
    </Box>
  )
}

const DonateSection = (props: GridProps) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  return (
    <Grid container item xs={12} md={9} spacing={4} justifyContent="center" {...props}>
      <Grid container item xs={12} lg={4} spacing={4} direction="column">
        <Grid item>
          <PFeatureBlock
            Icon={Patreon}
            title="Patreon"
            buttonText="Adopt us"
            buttonLink="https://patreon.com/parrot"
            outLink
          >
            Adopt us and become a recurring contributor
          </PFeatureBlock>
        </Grid>
        <Grid item>
          <PFeatureBlock
            Icon={Paypal}
            title="Paypal"
            buttonText="Send us a tip"
            buttonLink="https://www.paypal.me/palinuro"
            outLink
          >
            Send us a tip on PayPal
          </PFeatureBlock>
        </Grid>
        <Grid item>
          <PFeatureBlock
            Icon={Referral}
            title="Referral Links"
            CustomFooter={
              <Box marginTop={2}>
                <Box display="flex" alignItems="center">
                  <div className={classes.roundedIconHolder}>
                    <img
                      src={linode.src}
                      alt="Linode"
                      style={{ display: 'block', margin: 'auto' }}
                    />
                  </div>
                  <Link
                    className={classes.button}
                    href="https://www.linode.com/?r=2b6d749d3cb301e41bdbec5fc40e50c4316f7c66"
                  >
                    Linode <Arrow className={classes.arrow} />
                  </Link>
                </Box>
                <Box marginTop={2} display="flex" alignItems="center">
                  <div className={classes.roundedIconHolder}>
                    <img
                      src={bunny.src}
                      alt="BunnyCDN"
                      style={{ display: 'block', margin: 'auto' }}
                    />
                  </div>
                  <Link className={classes.button} href="https://bunny.net?ref=ppalfbefw3">
                    BunnyCDN <Arrow className={classes.arrow} />
                  </Link>
                </Box>
              </Box>
            }
          >
            Even if we host most of our infrastructure on bare metal servers, some of our servers
            are hosted on popular cloud providers that have referral programs.
          </PFeatureBlock>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={8}>
        <PFeatureBlock
          Icon={RoundedBitcoinIcon}
          title="Cryptocurrencies"
          style={{ height: '100%' }}
          CustomFooter={
            <Box marginTop={4}>
              <Grid container direction="column" spacing={1}>
                {Array<{ crypto: string; address: string }>(
                  { crypto: 'BTC', address: '1PaRrotouWgDVeiGTaoGRdXYQdFcjoo7fw' },
                  { crypto: 'BTC BECH32', address: 'bc1qsuqck5xl5su02cyh92gyv3v2rl9k5yq49rs939' },
                  { crypto: 'LTC', address: 'MH4HAW2ZwDGde7USi8XS41YGcfPpczSKqt' },
                  { crypto: 'LTC BECH32', address: 'ltc1q9jcsve8cfjxlaygtz2ts49ydgksrz8d96hus6y' },
                  {
                    crypto: 'XLM',
                    address: 'GA7OVMQNTET4ZDUZSUFADOQUFENNMB3PNJCQFWQDBNW5Q2VI4FW2WYXE'
                  },
                  { crypto: 'ETH', address: '0xbb40037943af35B40bf6cDBFda6063982d466e95' },
                  { crypto: 'DOGE', address: 'D8fDCq1nAPBN1AfLC2mzLfgL95uz2S3DDh' },
                  { crypto: 'DASH', address: 'Xx8o5x7tarm37g1tAtPgGRExLhYLPgRpG4' },
                  { crypto: 'ZCASH', address: 't1daB37ZGJWki6JovW341Sr8uzx1UebxKWM' }
                ).map(({ crypto, address }, i) => (
                  <Grid item key={`crypto-button-${i}`}>
                    <ButtonBase
                      focusRipple
                      onClick={async () => {
                        await navigator.clipboard.writeText(address)
                        enqueueSnackbar(`${crypto} address copied!`, { variant: 'success' })
                      }}
                      style={{ width: '100%', borderRadius: 24 }}
                    >
                      <Paper className={classes.paper} elevation={0}>
                        <Typography
                          className={classes.highOpacity}
                          variant="subtitle2"
                          style={{ fontWeight: 700, marginRight: '1rem', whiteSpace: 'nowrap' }}
                        >
                          {crypto}
                        </Typography>
                        <Typography
                          className={classes.highOpacity}
                          variant="body2"
                          style={{ wordWrap: 'break-word' }}
                        >
                          {address}
                        </Typography>
                      </Paper>
                    </ButtonBase>
                  </Grid>
                ))}
              </Grid>
              <Box marginTop={4}>
                <Typography variant="body1">
                  ETH ERC20: We support USDT, USDC, PAXG, BAT, DAI, MKR, Link, WBTC, ZRX, KNC and
                  more.
                </Typography>
              </Box>
            </Box>
          }
        >
          We believe in cryptocurrencies and we accept donations on several chains.
        </PFeatureBlock>
      </Grid>
    </Grid>
  )
}

export default DonateSection
