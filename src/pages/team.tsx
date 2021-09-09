import React from 'react'
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
  Paper
} from '@material-ui/core'
import Wallpaper from 'assets/wallpaper.png'
import Github from '../assets/Github.svg'
import Twitter from '../assets/Twitter.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import Email from '../assets/Email.svg'
import PButton from 'components/PButton'
{
  /*import { DataGrid, GridColDef } from '@mui/x-data-grid'*/
}

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
  gridAlign: {
    margin: theme.spacing(0, 'auto'),
    height: 400,
    width: '100%'
  },
  dataGrid: {
    borderRadius: 3
  },
  specialThanks: {
    padding: theme.spacing(7)
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
  coreTeam: {
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
  contribSection: {
    marginTop: theme.spacing(7)
  },
  contribCard: {
    backgroundColor: '#06043E'
  },
  wideButton: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2, 10),
    border: `1px solid ${
      theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(3, 35, 46, 0.5)'
    }`,
    borderRadius: 24
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
      <Grid className={classes.coreTeam} item xs={3} justifyContent="center">
        <Card>
          <CardContent className={classes.card}>
            <Avatar className={classes.iconLarge} src="" />
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography className={classes.nicknameTextColor}>nickname</Typography>
            <Typography className={classes.role}>Role</Typography>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item>
                <Github className={classes.icons} />
              </Grid>
              <Grid item>
                <Twitter className={classes.icons} />
              </Grid>
              <Grid item>
                <LinkedIn className={classes.icons} />
              </Grid>
              <Grid item>
                <Email className={classes.icons} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.coreTeam} item xs={3} justifyContent="center">
        <Card>
          <CardContent className={classes.card}>
            <Avatar className={classes.iconLarge} src="" />
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography className={classes.nicknameTextColor}>nickname</Typography>
            <Typography className={classes.role}>Role</Typography>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item>
                <Github className={classes.icons} />
              </Grid>
              <Grid item>
                <Twitter className={classes.icons} />
              </Grid>
              <Grid item>
                <LinkedIn className={classes.icons} />
              </Grid>
              <Grid item>
                <Email className={classes.icons} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.coreTeam} item xs={3} justifyContent="center">
        <Card>
          <CardContent className={classes.card}>
            <Avatar className={classes.iconLarge} src="" />
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography className={classes.nicknameTextColor}>nickname</Typography>
            <Typography className={classes.role}>Role</Typography>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item>
                <Github className={classes.icons} />
              </Grid>
              <Grid item>
                <Twitter className={classes.icons} />
              </Grid>
              <Grid item>
                <LinkedIn className={classes.icons} />
              </Grid>
              <Grid item>
                <Email className={classes.icons} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.coreTeam} item xs={3} justifyContent="center">
        <Card>
          <CardContent className={classes.card}>
            <Avatar className={classes.iconLarge} src="" />
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography className={classes.nicknameTextColor}>nickname</Typography>
            <Typography className={classes.role}>Role</Typography>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item>
                <Github className={classes.icons} />
              </Grid>
              <Grid item>
                <Twitter className={classes.icons} />
              </Grid>
              <Grid item>
                <LinkedIn className={classes.icons} />
              </Grid>
              <Grid item>
                <Email className={classes.icons} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.coreTeam} item xs={3} justifyContent="center">
        <Card>
          <CardContent className={classes.card}>
            <Avatar className={classes.iconLarge} src="" />
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography className={classes.nicknameTextColor}>nickname</Typography>
            <Typography className={classes.role}>Role</Typography>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item>
                <Github className={classes.icons} />
              </Grid>
              <Grid item>
                <Twitter className={classes.icons} />
              </Grid>
              <Grid item>
                <LinkedIn className={classes.icons} />
              </Grid>
              <Grid item>
                <Email className={classes.icons} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.coreTeam} item xs={3} justifyContent="center">
        <Card>
          <CardContent className={classes.card}>
            <Avatar className={classes.iconLarge} src="" />
            <Typography variant="h5" component="h2">
              Name
            </Typography>
            <Typography className={classes.nicknameTextColor}>nickname</Typography>
            <Typography className={classes.role}>Role</Typography>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item>
                <Github className={classes.icons} />
              </Grid>
              <Grid item>
                <Twitter className={classes.icons} />
              </Grid>
              <Grid item>
                <LinkedIn className={classes.icons} />
              </Grid>
              <Grid item>
                <Email className={classes.icons} />
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
              <Grid className={classes.coreTeam} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.role}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <Github className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <Twitter className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <LinkedIn className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <Email className={classes.icons} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.coreTeam} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.role}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <Github className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <Twitter className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <LinkedIn className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <Email className={classes.icons} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.coreTeam} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.role}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <Github className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <Twitter className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <LinkedIn className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <Email className={classes.icons} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.coreTeam} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.role}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <Github className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <Twitter className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <LinkedIn className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <Email className={classes.icons} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.coreTeam} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.role}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <Github className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <Twitter className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <LinkedIn className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <Email className={classes.icons} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid className={classes.coreTeam} item xs={3} justifyContent="center">
                <Card className={classes.contribCard}>
                  <CardContent className={classes.card}>
                    <Avatar className={classes.iconLarge} src="" />
                    <Typography variant="h5" component="h2">
                      Name
                    </Typography>
                    <Typography className={classes.role}>Role</Typography>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item>
                        <Github className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <Twitter className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <LinkedIn className={classes.icons} />
                      </Grid>
                      <Grid item>
                        <Email className={classes.icons} />
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
      {/*
      <Grid item xs={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar src="logo" className={classes.iconLarge} />}
            title={<Typography variant="h5">Name</Typography>}
            subheader="Role"
          />
          <CardContent>
            <Typography variant="body1" noWrap>
              Short description
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar src="../containers/Header/assets/logo.svg" className={classes.iconLarge} />
            }
            title={<Typography variant="h5">Name</Typography>}
            subheader="Role"
          />
          <CardContent>
            <Typography variant="body1" noWrap>
              Short description
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar src="../containers/Header/assets/logo.svg" className={classes.iconLarge} />
            }
            title={<Typography variant="h5">Name</Typography>}
            subheader="Role"
          />
          <CardContent>
            <Typography variant="body1" noWrap>
              Short description
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar src="../containers/Header/assets/logo.svg" className={classes.iconLarge} />
            }
            title={<Typography variant="h5">Name</Typography>}
            subheader="Role"
          />
          <CardContent>
            <Typography variant="body1" noWrap>
              Short description
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar src="../containers/Header/assets/logo.svg" className={classes.iconLarge} />
            }
            title={<Typography variant="h5">Name</Typography>}
            subheader="Role"
          />
          <CardContent>
            <Typography variant="body1" noWrap>
              Short description
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar src="../containers/Header/assets/logo.svg" className={classes.iconLarge} />
            }
            title={<Typography variant="h5">Name</Typography>}
            subheader="Role"
          />
          <CardContent>
            <Typography variant="body1" noWrap>
              Short description
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1" align="center">
          eslint-disable-next-line react/no-unescaped-entities
          ParrotOS doesn't exist only thanks to the <span style={{ color: '#00FFF0' }}>core </span>
          team, but is also the result of the help of many contributors who improve the OS every
          day.
        </Typography>
        <Typography variant="h4" align="center" className={classes.communityTitle}>
          Community Contributors
        </Typography>
      </Grid>
      <Grid item xs={6} justifyContent="center" className={classes.gridAlign}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight={false}
          autoPageSize={false}
          className={classes.dataGrid}
          disableExtendRowFullWidth={false}
          disableColumnFilter
          disableColumnMenu
          disableColumnSelector
          disableDensitySelector
          disableSelectionOnClick
          hideFooter
        />
      </Grid>
      <Grid container justifyContent="center" spacing={2} className={classes.specialThanks}>
        <Grid item xs={2}>
          <Typography variant="h1" align="right" className={classes.communityTitle}>
            Special Thanks
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle1" align="left" className={classes.communityTitle}>
            Nanni Bassetti (Caine)
          </Typography>
          <Typography variant="subtitle1" align="left" className={classes.communityTitle}>
            Albano Battistella (Zorin OS)
          </Typography>
          <Typography variant="subtitle1" align="left" className={classes.communityTitle}>
            Darix Deros (KNXSecurity)
          </Typography>
          <Typography variant="subtitle1" align="left" className={classes.communityTitle}>
            Giancarlo Niccolai
          </Typography>
          <Typography variant="subtitle1" align="left" className={classes.communityTitle}>
            Nathaniel Jones
          </Typography>
          <Typography variant="subtitle1" align="left" className={classes.communityTitle}>
            John Draper (cap'n crunch)
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" className={classes.communityTitle}>
          Past Contributors
        </Typography>
      </Grid>
      <Grid item xs={6} justifyContent="center" className={classes.gridAlign}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight={false}
          autoPageSize={false}
          className={classes.dataGrid}
          disableExtendRowFullWidth={false}
          disableColumnFilter
          disableColumnMenu
          disableColumnSelector
          disableDensitySelector
          disableSelectionOnClick
          hideFooter
        />
      </Grid>*/}
    </Grid>
  )
}

export default Team
