import { Alert, Button, Grid } from '@mui/material'
import Link from 'next/link'

const Page404 = () => (
  <Grid container justifyContent="center">
    <Grid item xs={10} md={9}>
      <Alert
        severity="error"
        action={
          <Link href="/">
            <Button color="inherit" size="small" sx={{ textTransform: 'none' }}>
              Go Home
            </Button>
          </Link>
        }
      >
        <b>404 - Oh no&apos;s! We couldn&apos;t find that page :(</b>
      </Alert>
    </Grid>
  </Grid>
)

export default Page404
