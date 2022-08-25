import { Grid, Hidden, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import cls from 'classnames'

import Docker from './assets/docker-logo.svg'
import Golang from './assets/golang-logo.svg'
import Java from './assets/java-logo.svg'
import Nodejs from './assets/nodejs-logo.svg'
import Python from './assets/python-logo.svg'
import React from './assets/react-logo.svg'
import Rust from './assets/rust-logo.svg'

import PIconLink from 'components/PIconLink'
import Slider from 'components/Slider'

const useStyles = makeStyles(theme => ({
  developerBlock: {
    marginTop: 115
  },
  papersBlock: {
    marginTop: 66
  },
  devPaper: {
    display: 'flex',
    [theme.breakpoints.down('lg')]: {
      flexFlow: 'column',
      paddingBottom: theme.spacing(8)
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: theme.spacing(4)
    }
  },
  devToolsBlock: {
    paddingLeft: theme.spacing(8),
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('lg')]: {
      paddingBottom: theme.spacing(2)
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(4),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    }
  },
  compilePaper: {
    padding: theme.spacing(9, 8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4)
    }
  },
  marginedSlider: {
    marginLeft: theme.spacing(2)
  },
  sliderHorizontal: {
    minHeight: 93
  },
  sliderBlock: {
    minWidth: 93,
    marginRight: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing(4)
    }
  }
}))

const items = [
  <PIconLink key="golang" href="https://golang.org" Icon={Golang}>
    <>
      <b>Golang</b>
      <br />
      The Go programming language is an open source project to make programmers more productive. Go
      is expressive, concise, clean, and efficient. Its concurrency mechanisms make it easy to write
      programs that get the most out of multicore and networked machines, while its novel type
      system enables flexible and modular program construction. Go compiles quickly to machine code
      yet has the convenience of garbage collection and the power of run-time reflection. It&apos;s
      a fast, statically typed, compiled language that feels like a dynamically typed, interpreted
      language.
    </>
  </PIconLink>,
  <PIconLink key="java" href="https://www.oracle.com/java/" Icon={Java}>
    <>
      <b>Java</b>
      <br />
      Java is the #1 programming language and development platform. It reduces costs, shortens
      development timeframes, drives innovation, and improves application services. With millions of
      developers running more than 51 billion Java Virtual Machines worldwide, Java continues to be
      the development platform of choice for enterprises and developers.
    </>
  </PIconLink>,
  <PIconLink key="python" href="https://www.python.org" Icon={Python}>
    <>
      <b>Python</b>
      <br />
      Python is an easy to learn, powerful programming language. It has efficient high-level data
      structures and a simple but effective approach to object-oriented programming. Python’s
      elegant syntax and dynamic typing, together with its interpreted nature, make it an ideal
      language for scripting and rapid application development in many areas on most platforms.
    </>
  </PIconLink>,
  <PIconLink key="docker" href="https://www.docker.com" Icon={Docker}>
    <>
      <b>Docker</b>
      <br />
      Docker is an open platform for developing, shipping, and running applications. Docker enables
      you to separate your applications from your infrastructure so you can deliver software
      quickly. With Docker, you can manage your infrastructure in the same ways you manage your
      applications. By taking advantage of Docker’s methodologies for shipping, testing, and
      deploying code quickly, you can significantly reduce the delay between writing code and
      running it in production.
    </>
  </PIconLink>,
  <PIconLink key="nodejs" href="https://nodejs.org/en/" Icon={Nodejs}>
    <>
      <b>Nodejs</b>
      <br />
      Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular
      tool for almost any kind of project! Node.js runs the V8 JavaScript engine, the core of Google
      Chrome, outside of the browser. This allows Node.js to be very performant. A Node.js app runs
      in a single process, without creating a new thread for every request. Node.js provides a set
      of asynchronous I/O primitives in its standard library that prevent JavaScript code from
      blocking and generally, libraries in Node.js are written using non-blocking paradigms, making
      blocking behavior the exception rather than the norm.
    </>
  </PIconLink>,
  <PIconLink key="rust" href="https://www.rust-lang.org" Icon={Rust}>
    <>
      <b>Rust</b>
      <br />
      The Rust programming language helps you write faster, more reliable software. High-level
      ergonomics and low-level control are often at odds in programming language design; Rust
      challenges that conflict. Through balancing powerful technical capacity and a great developer
      experience, Rust gives you the option to control low-level details (such as memory usage)
      without all the hassle traditionally associated with such control.
    </>
  </PIconLink>,
  <PIconLink key="react" href="https://www.reactjs.org" Icon={React}>
    <>
      <b>React</b>
      <br />
      React is a declarative, efficient, and flexible JavaScript library for building user
      interfaces. It lets you compose complex UIs from small and isolated pieces of code called
      “components”.
    </>
  </PIconLink>
]

const DevelopingSection = () => {
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.developerBlock} container item xs={12} md={7}>
        <Typography variant="h1" align="center" paragraph>
          A Developer Friendly environment
        </Typography>
        <Typography variant="subtitle2Semi" align="center">
          Whether you are an IT or security professional who needs to write your custom scripts, or
          a software developer in search for the best environment to work with your favorite
          languages and frameworks, Parrot is made for you.
          <br />
        </Typography>
      </Grid>
      <Grid className={classes.papersBlock} container item xs={12} md={9} spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.devPaper} elevation={0}>
            <div className={classes.devToolsBlock}>
              <Typography variant="h5" paragraph>
                Programming languages & Frameworks
              </Typography>
              <Typography variant="body1Semi" paragraph>
                Parrot integrates popular programming languages, compilers, interpreters, libraries
                and development frameworks either pre-installed or one command away through our
                software repository, for faster and easier software development.
                <br />
                You can also use Parrot in your CI/CD pipelines to add security tests to your
                release workflow.
              </Typography>
            </div>
            <Hidden mdUp>
              <Slider className={classes.sliderHorizontal} spacing={4} cloneFactor={2}>
                {items}
              </Slider>
            </Hidden>
            <Hidden mdDown>
              <Slider
                className={cls(classes.sliderBlock, classes.marginedSlider)}
                spacing={4}
                orientation="vertical"
              >
                {items}
              </Slider>
              <Slider className={classes.sliderBlock} spacing={4} orientation="vertical" reversed>
                {items}
              </Slider>
            </Hidden>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.compilePaper} elevation={0}>
            <Typography variant="h5" paragraph>
              Development tools
            </Typography>
            <Typography variant="body1Semi">
              We are developers too, and we love to have advanced, comfortable and easy to use
              environment too. This is why Parrot ships with Codium pre-installed. It is an advanced
              and extensible editor with IDE capabilities built upon VSCode. Other IDEs and editors
              are ready to install from our official software repository.
              <br />
              <br />
              Boot the system, start the editor, run the code. It can&apos;t get easier than that.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default DevelopingSection
