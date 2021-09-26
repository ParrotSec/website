import { Grid } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import OSSelection from 'containers/DownloadContainers/OSSelection'
import ContributeSection from 'containers/HomeContainers/ContributeSection'
import 'react-image-lightbox/style.css'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  contribute: {
    marginTop: 139
  },
  snackbar: {
    background: 'linear-gradient(99.16deg, #05EEFF 24.01%, #00FFF0 81.75%)',
    color: '#03232E',
    borderRadius: 16
  }
})

const Download: NextPage = ({
  version
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const classes = useStyles()
  return (
    <SnackbarProvider preventDuplicate classes={{ variantSuccess: classes.snackbar }}>
      <Grid container justifyContent="center">
        <OSSelection initialVersion={version} />
        <ContributeSection className={classes.contribute} />
      </Grid>
    </SnackbarProvider>
  )
}

export default Download

export const getServerSideProps: GetServerSideProps = async ctx => {
  const version = ctx.query['version']
  if (version !== 'home' && version !== 'security' && version !== 'cloud')
    return { props: { version: 'home' } }
  return {
    props: { version: ctx.query['version'] }
  }
}
