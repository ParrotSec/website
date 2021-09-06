import React from 'react'
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar
} from '@material-ui/core'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: 10,
    paddingBottom: 20
  },
  card: {
    margin: theme.spacing(4)
  },
  iconLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: theme.spacing(7)
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
  }
}))

const Team = () => {
  const classes = useStyles()

  const columns: GridColDef[] = [
    {
      field: 'nickname',
      headerName: 'Nickname',
      headerAlign: 'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'name',
      headerName: 'Name',
      headerAlign: 'center',
      flex: 1
    },
    {
      field: 'role',
      headerName: 'Role',
      headerAlign: 'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'email',
      headerName: 'Email',
      headerAlign: 'center',
      sortable: false,
      flex: 1
    },
    {
      field: 'team',
      headerName: 'Team',
      headerAlign: 'center',
      sortable: false,
      flex: 1
    }
  ]

  const rows = [
    {
      id: 1,
      nickname: 'userX',
      name: 'user',
      role: 'test',
      email: 'testing@parrotsec.org',
      team: 'security'
    },
    {
      id: 2,
      nickname: 'userX',
      name: 'user',
      role: 'test',
      email: 'testing@parrotsec.org',
      team: 'security'
    },
    {
      id: 3,
      nickname: 'userX',
      name: 'user',
      role: 'test',
      email: 'testing@parrotsec.org',
      team: 'security'
    },
    {
      id: 4,
      nickname: 'userX',
      name: 'user',
      role: 'test',
      email: 'testing@parrotsec.org',
      team: 'security'
    },
    {
      id: 5,
      nickname: 'userX',
      name: 'user',
      role: 'test',
      email: 'testing@parrotsec.org',
      team: 'security'
    },
    {
      id: 6,
      nickname: 'userX',
      name: 'user',
      role: null,
      email: 'testing@parrotsec.org',
      team: 'security'
    },
    {
      id: 7,
      nickname: 'userX',
      name: 'user',
      role: 'test',
      email: 'testing@parrotsec.org',
      team: 'security'
    },
    {
      id: 8,
      nickname: 'userX',
      name: 'user',
      role: 'test',
      email: null,
      team: 'security'
    },
    {
      id: 9,
      nickname: 'userX',
      name: 'user',
      role: 'test',
      email: 'testing@parrotsec.org',
      team: 'security'
    }
  ]

  return (
    <Grid container xs={12}>
      <Grid className={classes.title} item xs={12}>
        <Typography variant="h1" align="center">
          Meet the Team
        </Typography>
      </Grid>
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
          {/* eslint-disable-next-line react/no-unescaped-entities */}
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
      </Grid>
    </Grid>
  )
}

export default Team
