import { Grid, Typography, Alert } from '@mui/material'

import NextLink from 'components/NextLink'

const Privacy = () => (
  <Grid container justifyContent="center">
    <Grid item xs={10} md={9}>
      <Typography variant="h1" align="center" paragraph>
        Privacy Policy
      </Typography>
    </Grid>
    <Grid item xs={10} md={6} style={{ marginBottom: 20 }}>
      <Alert severity="warning">
        This policy is incomplete (it does not yet cover all the infrastructure of the Parrot
        Project), we hope to finish it shortly.
      </Alert>
    </Grid>
    <Grid item xs={10} md={9}>
      <Typography variant="h5" paragraph>
        Parrot OS
      </Typography>
      <Typography variant="body1" paragraph>
        The Parrot operating system does not include trackers or telemetry from the Parrot team or
        its partners, and we do not track our users on the system.
      </Typography>
      <Typography variant="body1" paragraph>
        Parrot OS is a bundle of many complex programs and subsystems, and each of the programs
        installed on the system may implement it&apos;s own telemetry "features".
      </Typography>
      <Typography variant="body1" paragraph>
        The Parrot Security Team does its best to provide a system completely clean from trackers,
        and no data is collected from our users, but additional programs installed on the system by
        the end user may change this statement. It is up to the end user to make sure that newly
        installed programs don&apos;t ship their own telemetry if privacy is required.
      </Typography>
      <Typography variant="h5" paragraph>
        Parrot&apos;s Content Delivery Network
      </Typography>
      <Typography variant="body1" paragraph>
        What do these servers actually do? What kind of private information is stored? How is it
        stored? And what happens if an edge node is cloned and analyzed?
      </Typography>
      <Typography variant="body1" paragraph>
        The edge nodes do not host private information of the users, only our master servers host
        user information.
      </Typography>
      <Typography variant="body1" paragraph>
        The edge servers are owned by us, we can delete servers, migrate them, deploy new ones,
        change providers etc. We can force users in a country to stay away from a particular node
        and transit the parrot network from a node in another country if we beieve that such
        countries or providers may inspect user traffic.
      </Typography>
      <Typography variant="body1" paragraph>
        We log user activities from the web server logs and use log analyzers to investigate
        uncommon (malicious) activities and spot possible intrusions or cyber attacks.
      </Typography>
      <Typography variant="body1" paragraph>
        Sometimes we collect statistical usage data on our infrastructure usage (downloads, website
        hits, unique visitors, geographical distribution etc). Such data is aggregate and does not
        contain personal user information, and ip addresses and other components useful to identify
        specific users are stripped out before the data aggregation, or sometimes they are not
        collected at all.
      </Typography>
      <Typography variant="body1" paragraph>
        We do NOT log user activities on some services, like the DNS resolvers, to respect user
        privacy, and we do not collect user information if we don&apos;t have a technical reason to
        log it.
      </Typography>
      <Typography variant="body1" paragraph>
        Our sysadmin is the only person authorized to access the servers and handle the logs, and no
        third parties have access to such data.
      </Typography>
      <Typography variant="body1" paragraph>
        The only private information directly visible from goaccess is the ip address of the users,
        but the servers already have automatic protections to ban misbehaving ip addresses, We store
        ip addresses temporarily in case of cyberattacks against our web infrastructure.
      </Typography>
      <Typography variant="body1" paragraph>
        Personal user data is not stored on our CDN edge nodes, so we can keep user data as safe as
        possible on the central infrastructure where authorities or third parties can’t take them
        without our approval.
      </Typography>
      <Typography variant="body1" paragraph>
        We periodically delete logs from servers when we are sure that no attacks were received in
        that period of time, and we shred them for security before restarting the service.
      </Typography>
      <Typography variant="body1" paragraph>
        When we dismiss a dedicated server or a VPS, we manually shred the hard disk with random
        data from a recovery unit to make data unrecoverable before the service deletion.
      </Typography>
      <Typography variant="body1" paragraph>
        We have never received a warrant since we began this project. Please note our{' '}
        <NextLink href="/warrant">warrant canary</NextLink>.
      </Typography>
      <Typography variant="h5" paragraph>
        The Parrot Project&apos;s OpenNIC DNS Servers
      </Typography>
      <Typography variant="body1" paragraph>
        We provide free DNS resolvers for the OpenNIC network. These servers have logs disabled by
        default.
      </Typography>
      <Typography variant="body1" paragraph>
        There is a tiny log buffer that hosts the latest service hits for technical purposes,
        allowing the system to identify and automatically ban ip addresses abusing the service. The
        temporary log is just a buffer that keeps a bunch of recent elements, and old entries
        disappear automatically as new requests come in. It is the standard behavior of the DNS
        resolver we use (PowerDNS).
      </Typography>
      <Typography variant="body1" paragraph>
        Since DNS logs are disabled, and the abuse prevention system is completely automatic, we
        don&apos;t have systems to manually analyze such logs, and we don&apos;t perform direct or
        indirect analysis of DNS services usage.
      </Typography>
    </Grid>
    <Grid item xs={10} md={6}>
      <Alert severity="info">Last updated 25 Apr 2019</Alert>
    </Grid>
  </Grid>
)

export default Privacy
