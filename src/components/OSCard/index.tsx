import { Grid, GridProps, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import cls from 'classnames'
import { ElementType } from 'react'

import PButton from 'components/PButton'

type OSCardProps = {
  Icon: ElementType
  iconClassName?: string
  title: string
  link: string
} & GridProps

const useStyles = makeStyles({
  versionsPaper: {
    padding: 32,
    height: '100%',
    display: 'flex',
    flexFlow: 'column'
  },
  iconHolder: {
    width: 64,
    height: 64,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 21
  },
  icon: {
    width: 32,
    height: 32,
    margin: 'auto'
  }
})

const OSCard = ({ Icon, iconClassName, title, link, children, ...rest }: OSCardProps) => {
  const classes = useStyles()
  return (
    <Grid {...rest} item xs={12} md={4}>
      <Paper className={classes.versionsPaper} elevation={0}>
        <div className={cls(classes.iconHolder, iconClassName)}>
          <Icon className={classes.icon} />
        </div>
        <Typography variant="h5" paragraph>
          {title}
        </Typography>
        <Typography variant="body1Semi" paragraph>
          {children}
        </Typography>
        <PButton variant="contained" to={link} style={{ maxWidth: 177 }}>
          Download
        </PButton>
      </Paper>
    </Grid>
  )
}

export default OSCard
