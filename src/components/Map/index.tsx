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

const Map = () => {
  const classes = useStyles()
  const position: LatLngExpression = [50, 0]

  const theme = useTheme()

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
        {theme.palette.mode === 'dark'
          ? `.leaflet-control-zoom { border: 24px !important; }
          .leaflet-control-zoom-in { background-color: #272727 !important; color: white !important;
        border-bottom-color: #424242 !important; border-radius: 24px !important; }
        .leaflet-control-zoom-out {
            background-color: #272727 !important; 
            color: white !important; 
            border-radius: 24px !important; 
            margin-top: 5px;
        }
        .leaflet-popup-content-wrapper { 
            border-radius: 24px !important; 
            background-color: #272727 !important; 
            color: white !important; 
        }
        .leaflet-popup-tip { background-color: #272727 !important; }`
          : `.leaflet-control-zoom { border: 24px !important; }
        .leaflet-control-zoom-in { border-radius: 24px !important; }
        .leaflet-control-zoom-out { border-radius: 24px !important; margin-top: 5px; }`}
      </style>
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url={
          theme.palette.mode === 'dark'
            ? 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
            : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
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

export default Map
