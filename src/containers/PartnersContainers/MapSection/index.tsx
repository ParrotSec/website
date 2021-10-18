import { makeStyles } from '@mui/styles'
import L, { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
/*
import marker2x from 'public/assets/leaflet/marker-icon-2x.png'
import marker from 'public/assets/leaflet/marker-icon.png'
import markerShadow from 'public/assets/leaflet/marker-shadow.png'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: markerShadow
})
*/

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.imagePath = 'public/assets/leaflet/'

const icon = L.icon({
  iconUrl: 'public/assets/leaflet/marker-icon.png',
  iconRetinaUrl: 'public/assets/leaflet/marker-icon-2x.png',
  shadowUrl: 'public/assets/leaflet/marker-shadow.png',
  iconSize: [38, 95]
})

L.Marker.prototype.options.icon = icon

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
      <Marker position={position} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapSection
