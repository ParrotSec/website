import { makeStyles } from '@mui/styles'
import L, { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import marker2x from 'assets/leaflet/marker-icon-2x.png'
import marker from 'assets/leaflet/marker-icon.png'
import markerShadow from 'assets/leaflet/marker-shadow.png'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x.src,
  iconUrl: marker.src,
  shadowUrl: markerShadow.src
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line no-underscore-dangle

const useStyles = makeStyles(theme => ({
  map: {
    height: '50vh',
    width: '50vw',
    borderRadius: 24,
    margin: theme.spacing(3),
    zIndex: 0
  }
}))

const MapSection = () => {
  const classes = useStyles()
  const position: LatLngExpression = [51.505, -0.09]

  return (
    <MapContainer className={classes.map} center={position} zoom={2} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapSection
