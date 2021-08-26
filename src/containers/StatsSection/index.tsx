import React from 'react'
import { Grid, GridProps, Typography } from '@material-ui/core'

const StatsSection = (props: GridProps) => (
  <Grid container {...props} item xs={9} justifyContent="center" spacing={4}>
    <Grid item xs={6} sm={4}>
      <Typography variant="h3" align="center">
        <Typography variant="h2" noWrap>
          +2
        </Typography>
        Million downloads
      </Typography>
    </Grid>
    <Grid item xs={6} sm={4}>
      <Typography variant="h3" align="center">
        <Typography variant="h2" noWrap>
          +8k
        </Typography>
        Forum users
      </Typography>
    </Grid>
    <Grid item xs={6} sm={4}>
      <Typography variant="h3" align="center">
        <Typography variant="h2" noWrap>
          17
        </Typography>
        Worldwide PoP
      </Typography>
    </Grid>
  </Grid>
)

export default StatsSection
