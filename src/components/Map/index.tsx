import { Paper, Link, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import L, { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'

import marker2x from 'assets/partners/leaflet/marker-icon-2x.png'
import marker from 'assets/partners/leaflet/marker-icon.png'
import markerShadow from 'assets/partners/leaflet/marker-shadow.png'
import mirrors from 'containers/PartnersContainers/MirrorsSection/mirrors'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x.src,
  iconUrl: marker.src,
  shadowUrl: markerShadow.src
})

const useStyles = makeStyles(theme => ({
  map: {
    width: '100%',
    borderRadius: theme.spacing(3),
    zIndex: 0,
    ...(theme.palette.mode === 'dark'
      ? {
          background: '#262626'
        }
      : {}),
    '& .leaflet-control-zoom': {
      border: theme.spacing(3)
    },
    '& .leaflet-control-zoom-in': {
      borderTopLeftRadius: `${theme.spacing(3)} !important`,
      borderTopRightRadius: `${theme.spacing(3)} !important`
    },
    '& .leaflet-control-zoom-out': {
      borderBottomLeftRadius: `${theme.spacing(3)} !important`,
      borderBottomRightRadius: `${theme.spacing(3)} !important`
    }
  },
  zoomControl: {
    borderRadius: 24
  }
}))

const MapSection = () => {
  const classes = useStyles()
  const theme = useTheme()
  const position: LatLngExpression = [51.505, -0.09]

  return (
    <MapContainer
      className={classes.map}
      center={position}
      zoom={2}
      zoomControl={false}
      scrollWheelZoom={true}
      tap={false}
    >
      <TileLayer
        attribution={`&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>${
          theme.palette.mode === 'dark'
            ? '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            : ''
        }`}
        url={
          theme.palette.mode === 'light'
            ? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            : 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
        }
      />
      {mirrors.map(data => (
        <Marker key={data.id} position={[data.lat, data.lon]}>
          <Popup>
            <Link href={data.url}>{data.commentary}</Link>
          </Popup>
        </Marker>
      ))}
      <Paper elevation={0}>
        <ZoomControl position="topleft" />
      </Paper>
    </MapContainer>
  )
}

export default MapSection
