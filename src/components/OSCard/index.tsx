import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  GridProps,
  makeStyles,
  Typography
} from '@material-ui/core'
import logo from './assets/logo.svg'
import { useMeasure } from 'react-use'
import cls from 'classnames'

type OSCardProps = {
  type: 'home' | 'security' | 'cloud'
  disabled?: boolean
  glow?: boolean
} & GridProps

const useStyles = makeStyles(theme => ({
  img: {
    height: 150,
    width: 150,
    position: 'absolute',
    transform: 'rotateX(-75deg)'
  },
  title: {
    fontWeight: 'bold',
    paddingTop: theme.spacing(2)
  },
  home: {
    boxShadow: '0 0 60px 10px #fff, \n' + '0 0 100px 10px #55ddff,\n' + '0 0 140px 10px #55ddff'
  },
  security: {
    boxShadow: '0 0 60px 10px #fff, \n' + '0 0 100px 10px #55ddff, \n' + '0 0 20px 10px #9fef00'
  },
  cloud: {
    boxShadow: '0 0 60px 10px #fff, \n' + '0 0 100px 10px #55ddff,\n' + '0 0 140px 10px #55ddff'
  },
  buttons: {
    justifyContent: 'center'
  },
  view3d: {
    transformStyle: 'preserve-3d',
    transform: 'rotateX(75deg)',
    marginBottom: 150
  },
  card: {
    transition:
      'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',

    minHeight: 470
  },
  orbit: {
    transformStyle: 'preserve-3d',
    width: '56em',
    height: '56em',
    border: '3px solid rgba(252, 252, 252, 0.2)',
    animationDuration: '12s',
    transitionDuration: '.8s',
    transitionTimingFunction: 'ease-in-out',
    transitionProperty: 'webkit-transform',
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '50%',
    animationName: '$orbit',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  },
  text: {
    fontFamily: 'Roboto Mono',
    transform: 'rotateX(-90deg) rotateY(180deg)'
  },
  '@keyframes orbit': {
    '0%': {
      transform: 'rotateZ(0deg)'
    },
    '100%': {
      transform: 'rotateZ(-360deg)'
    }
  }
}))

const content = {
  home: {
    title: 'Parrot Home',
    body:
      'Parrot Home Edition is a general purpose operating system with the typical Parrot look and feel. ' +
      'This edition is designed for daily use, privacy and software development. ' +
      'Parrot Tools can be manually installed to assemble a custom and lightweight pentesting environment.'
  },
  security: {
    title: 'Parrot Security',
    body:
      'Parrot Security Edition is a special purpose operating system designed for Penetration Test and Red Team ' +
      'operations. It contains a full arsenal of ready to use pentest tools.'
  },
  cloud: {
    title: 'Parrot IoT',
    body:
      'Parrot IoT and Cloud Appliances are special editions of Parrot Security made for embedded devices, ' +
      'cloud environments, virtual machines and other special deployments.'
  }
}

const OSCard = ({ type, glow = true, disabled = false, ...rest }: OSCardProps) => {
  const classes = useStyles()
  const [ref, { width }] = useMeasure()
  return (
    <Grid item xs={3}>
      <Card ref={ref} className={cls(classes.card, ...(glow ? [classes[type]] : []))} {...rest}>
        <div className={classes.view3d}>
          {type === 'security' && (
            <div
              className={classes.orbit}
              style={{ width: width * 0.5, height: width * 0.5, left: width * 0.25, top: 250 }}
            >
              <div className={classes.text}>
                msf exploit(<span style={{ color: 'red' }}>psexec</span>) &gt;{' '}
                <span style={{ color: 'green' }}>exploit</span>
              </div>
            </div>
          )}
          <img
            className={classes.img}
            src={logo}
            alt={`Parrot OS ${type.toUpperCase()}`}
            style={{ left: width / 2 - 75, top: 350 }}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h2" className={classes.title}>
            {content[type].title}
          </Typography>
          <Typography variant="body1">{content[type].body}</Typography>
        </CardContent>
        <CardActions className={classes.buttons}>
          <Button size="large" color="primary" variant="contained" disabled={disabled}>
            Download
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default OSCard
