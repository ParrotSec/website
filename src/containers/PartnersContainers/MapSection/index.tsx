import { Paper, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
import L, { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'

import mirrors from '../MirrorsSection/mirrors'

import marker2x from 'assets/partners/leaflet/marker-icon-2x.png'
import marker from 'assets/partners/leaflet/marker-icon.png'
import markerShadow from 'assets/partners/leaflet/marker-shadow.png'

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
    height: '50vh',
    width: '100%',
    borderRadius: 24,
    margin: theme.spacing(3),
    zIndex: 0
  },
  zoomControl: {
    borderRadius: 24
  }
}))

const MapSection = () => {
  const classes = useStyles()
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
      <style>
        {`.leaflet-control-zoom { border: 24px !important }
        .leaflet-control-zoom-in { border-radius: 24px !important; }
        .leaflet-control-zoom-out { border-radius: 24px !important;`}
      </style>
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
