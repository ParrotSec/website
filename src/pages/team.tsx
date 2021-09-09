import React from 'react'
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
  Paper,
  IconButton
} from '@material-ui/core'
import Wallpaper from 'assets/wallpaper.png'
import Github from '../assets/Github.svg'
import Twitter from '../assets/Twitter.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import Email from '../assets/Email.svg'
import PButton from 'components/PButton'
import ContributeSection from 'containers/HomeContainers/ContributeSection'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  title: {
    marginTop: 10,
    paddingBottom: 20
  },
  card: {
    margin: theme.spacing(2)
  },
  iconLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: 15
  },
  communityTitle: {
    margin: theme.spacing(4)
  },
  specialThanks: {
    marginTop: theme.spacing(20)
  },
  headingSubTitle: {
    marginTop: 27,
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 15.3
    },
    marginBottom: theme.spacing(6.5)
  },
  wallpaper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.1,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #06043E), url('${Wallpaper}')`
  },
  headingTitle: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: theme.spacing(9),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(8)
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(7)
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(5)
    }
  },
  team: {
    margin: theme.spacing(3)
  },
  nicknameTextColor: {
    color: '#05EEFF'
  },
  role: {
    marginTop: 20,
    marginBottom: 50
  },
  icons: {
    display: 'block',
    margin: 'auto'
  },
  activeContrib: {
    marginTop: theme.spacing(10)
  },
  contribHeader: {
    textTransform: 'uppercase',
    marginBottom: 20
  },
  contribTitle: {
    marginTop: 0,
    marginBottom: 5
  },
  contribSubtitle: {
    marginTop: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(5),
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20)
  },
  contribRole: {
    marginTop: 10,
    marginBottom: 20
  },
  contribSection: {
    marginTop: theme.spacing(7)
  },
  contribCard: {
    backgroundColor: theme.palette.type === 'light' ? '#FFFFFF' : '#06043E'
  },
  wideButton: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2, 10),
    border: `1px solid ${
      theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(3, 35, 46, 0.5)'
    }`,
    borderRadius: 24
  },
  specialThanksTitle: {
    marginBottom: theme.spacing(5)
  },
  specialThanksCard: {
    margin: theme.spacing(1)
  },
  specialThanksRole: {
    marginTop: theme.spacing(2)
  },
  developBlock: {
    marginTop: 154
  }
}))

const Team = () => {
  const classes = useStyles()

  return (
    <Grid container xs={12} className={classes.root} justifyContent="center">
      {<div className={classes.wallpaper} />}
      <Grid className={classes.title} item xs={12} justifyContent="center">
        <Typography className={classes.headingTitle} variant="h1" align="center">
          The Team <br /> behind Parrot<span style={{ fontWeight: 300 }}>OS</span>
        </Typography>
        <Typography className={classes.headingSubTitle} variant="body1" align="center">
          A GNU/Linux distribution based on Debian and designed with Security and Privacy in mind.
        </Typography>
      </Grid>
      <Grid className={classes.team} item xs={3} justifyContent="center">
        <Card>
          <CardContent className={classes.card}>
            <Avatar className={classes.iconLarge} src="" />
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography className={classes.nicknameTextColor}>nickname</Typography>
            <Typography className={classes.role}>Role</Typography>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item>
                <IconButton size="small">
                  <Github className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Twitter className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <LinkedIn className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Email className={classes.icons} />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.team} item xs={3} justifyContent="center">
        <Card>
          <CardContent className={classes.card}>
            <Avatar className={classes.iconLarge} src="" />
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography className={classes.nicknameTextColor}>nickname</Typography>
            <Typography className={classes.role}>Role</Typography>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item>
                <IconButton size="small">
                  <Github className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Twitter className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <LinkedIn className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Email className={classes.icons} />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.team} item xs={3} justifyContent="center">
        <Card>
          <CardContent className={classes.card}>
            <Avatar className={classes.iconLarge} src="" />
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography className={classes.nicknameTextColor}>nickname</Typography>
            <Typography className={classes.role}>Role</Typography>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item>
                <IconButton size="small">
                  <Github className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Twitter className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <LinkedIn className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Email className={classes.icons} />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.team} item xs={3} justifyContent="center">
        <Card>
          <CardContent className={classes.card}>
            <Avatar className={classes.iconLarge} src="" />
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography className={classes.nicknameTextColor}>nickname</Typography>
            <Typography className={classes.role}>Role</Typography>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item>
                <IconButton size="small">
                  <Github className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Twitter className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <LinkedIn className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Email className={classes.icons} />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.team} item xs={3} justifyContent="center">
        <Card>
          <CardContent className={classes.card}>
            <Avatar className={classes.iconLarge} src="" />
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography className={classes.nicknameTextColor}>nickname</Typography>
            <Typography className={classes.role}>Role</Typography>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item>
                <IconButton size="small">
                  <Github className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Twitter className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <LinkedIn className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Email className={classes.icons} />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.team} item xs={3} justifyContent="center">
        <Card>
          <CardContent className={classes.card}>
            <Avatar className={classes.iconLarge} src="" />
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography className={classes.nicknameTextColor}>nickname</Typography>
            <Typography className={classes.role}>Role</Typography>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item>
                <IconButton size="small">
                  <Github className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Twitter className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <LinkedIn className={classes.icons} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <Email className={classes.icons} />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.activeContrib} item xs={12} justifyContent="center">
        <Box
          className={classes.contribHeader}
          fontWeight={700}
          color="#05EEFF"
          letterSpacing="0.1em"
          textAlign="center"
        >
          <span style={{ fontWeight: 'bold' }}>active contributors</span>
        </Box>
        <Typography className={classes.contribTitle} variant="h1" align="center">
          Community Contributors
        </Typography>
        <Typography className={classes.contribSubtitle} variant="subtitle2" align="center">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          ParrotOS doesn't exist only thanks to the core team, but is also the result of the help of
          many <br /> contributors who improve the OS every day.
        </Typography>
        <Grid
          className={classes.contribSection}
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Paper className={classes.paper} elevation={0}>
            <Grid container justifyContent="center">
              <Grid className={classes.team} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.contribRole}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={1}>
                      <Grid item>
                        <IconButton size="small">
                          <Github className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Twitter className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <LinkedIn className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Email className={classes.icons} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.team} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.contribRole}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <IconButton size="small">
                          <Github className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Twitter className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <LinkedIn className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Email className={classes.icons} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.team} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.contribRole}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <IconButton size="small">
                          <Github className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Twitter className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <LinkedIn className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Email className={classes.icons} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.team} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.contribRole}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <IconButton size="small">
                          <Github className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Twitter className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <LinkedIn className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Email className={classes.icons} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.team} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.contribRole}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <IconButton size="small">
                          <Github className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Twitter className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <LinkedIn className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Email className={classes.icons} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.team} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.contribRole}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <IconButton size="small">
                          <Github className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Twitter className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <LinkedIn className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Email className={classes.icons} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid container xs={12} justifyContent="center">
              <PButton className={classes.wideButton} variant="outlined" to="">
                View All Contributors
              </PButton>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        className={classes.specialThanks}
        container
        xs={9}
        justifyContent="space-around"
        spacing={5}
      >
        <Grid item xs={4}>
          <Typography variant="h1" className={classes.specialThanksTitle}>
            Special <br /> Thanks
          </Typography>
          <Typography variant="subtitle2">
            Compilers, interpreters and intelligent editors. All you need to start programming comes
            out of the box, with the most secure Linux environment.
          </Typography>
        </Grid>
        <Grid container item xs={8} direction="row" spacing={3}>
          <Grid item xs={6}>
            <Card>
              <CardContent className={classes.specialThanksCard}>
                <Typography variant="h5" component="h2">
                  Name
                </Typography>
                <Typography className={classes.nicknameTextColor}>nickname</Typography>
                <Typography className={classes.specialThanksRole}>Role</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent className={classes.specialThanksCard}>
                <Typography variant="h5" component="h2">
                  Name
                </Typography>
                <Typography className={classes.nicknameTextColor}>nickname</Typography>
                <Typography className={classes.specialThanksRole}>Role</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent className={classes.specialThanksCard}>
                <Typography variant="h5" component="h2">
                  Name
                </Typography>
                <Typography className={classes.nicknameTextColor}>nickname</Typography>
                <Typography className={classes.specialThanksRole}>Role</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent className={classes.specialThanksCard}>
                <Typography variant="h5" component="h2">
                  Name
                </Typography>
                <Typography className={classes.nicknameTextColor}>nickname</Typography>
                <Typography className={classes.specialThanksRole}>Role</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent className={classes.specialThanksCard}>
                <Typography variant="h5" component="h2">
                  Name
                </Typography>
                <Typography className={classes.nicknameTextColor}>nickname</Typography>
                <Typography className={classes.specialThanksRole}>Role</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent className={classes.specialThanksCard}>
                <Typography variant="h5" component="h2">
                  Name
                </Typography>
                <Typography className={classes.nicknameTextColor}>nickname</Typography>
                <Typography className={classes.specialThanksRole}>Role</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.activeContrib} item xs={12} justifyContent="center">
        <Box
          className={classes.contribHeader}
          fontWeight={700}
          color="#05EEFF"
          letterSpacing="0.1em"
          textAlign="center"
        >
          <span style={{ fontWeight: 'bold' }}>past contributors</span>
        </Box>
        <Typography className={classes.contribTitle} variant="h1" align="center">
          Legacy Contributors
        </Typography>
        <Typography className={classes.contribSubtitle} variant="subtitle2" align="center">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          ParrotOS doesn't exist only thanks to the core team, but is also the result of the help of
          many <br /> contributors who improve the OS every day.
        </Typography>
        <Grid
          className={classes.contribSection}
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Paper className={classes.paper} elevation={0}>
            <Grid container justifyContent="center">
              <Grid className={classes.team} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.contribRole}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <IconButton size="small">
                          <Github className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Twitter className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <LinkedIn className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Email className={classes.icons} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.team} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.contribRole}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <IconButton size="small">
                          <Github className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Twitter className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <LinkedIn className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Email className={classes.icons} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.team} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.contribRole}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <IconButton size="small">
                          <Github className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Twitter className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <LinkedIn className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Email className={classes.icons} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.team} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.contribRole}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <IconButton size="small">
                          <Github className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Twitter className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <LinkedIn className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Email className={classes.icons} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.team} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.contribRole}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <IconButton size="small">
                          <Github className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Twitter className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <LinkedIn className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Email className={classes.icons} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.team} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.contribRole}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <IconButton size="small">
                          <Github className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Twitter className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <LinkedIn className={classes.icons} />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small">
                          <Email className={classes.icons} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid container xs={12} justifyContent="center">
              <PButton className={classes.wideButton} variant="outlined" to="">
                View All Contributors
              </PButton>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Team
