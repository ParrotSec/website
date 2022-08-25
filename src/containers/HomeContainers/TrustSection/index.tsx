import { Grid, GridProps, Link, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import HTB from '../HTBSection/assets/htbLogo.svg'

import Bunnycdn from './assets/bunnycdn.svg'
import Linode from './assets/linode.svg'

const useStyles = makeStyles(theme => ({
  trustLogosBlock: {
    marginTop: theme.spacing(2)
  },
  img: {
    width: '100%',
    height: '100%',
    maxHeight: theme.spacing(6),
    margin: 'auto',
    fill: theme.palette.mode === 'dark' ? 'white' : 'inherit',
    '& #linode-block': {
      fill: '#03232E'
    },
    '& #linode-text': {
      fill: theme.palette.mode === 'light' ? '#03232E' : '#FFF'
    },
    '& #bunny-text': {
      fill: theme.palette.mode === 'light' ? '#03232E' : '#FFF'
    }
  }
}))

const TrustSection = (props: GridProps) => {
  const classes = useStyles()
  return (
    <Grid {...props} container justifyContent="center" alignItems="center" item xs={10}>
      <Grid item xs={10}>
        <Typography variant="body1" align="center" style={{ opacity: 1 }}>
          In partnership with
        </Typography>
      </Grid>
      <Grid
        className={classes.trustLogosBlock}
        container
        item
        xs={10}
        md={8}
        spacing={4}
        justifyContent="center"
      >
        <Grid item xs={12} md={8} lg={4}>
          <Link href="https://www.linode.com/?r=2b6d749d3cb301e41bdbec5fc40e50c4316f7c66">
            <Linode className={classes.img} />
          </Link>
        </Grid>
        <Grid item xs={12} md={8} lg={4}>
          <Link href="https://www.hackthebox.com/?ref=parrotsec">
            <HTB className={classes.img} />
          </Link>
        </Grid>
        <Grid item xs={12} md={8} lg={4}>
          <Link href="https://bunny.net?ref=ppalfbefw3">
            <Bunnycdn className={classes.img} />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TrustSection
