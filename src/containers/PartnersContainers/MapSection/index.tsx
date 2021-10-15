import { makeStyles } from '@mui/styles'
import { LatLngExpression, Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import marker2x from 'leaflet/dist/images/marker-icon-2x.png'
import marker from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

Icon.Default.imagePath = '.'

Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: markerShadow
})

const useStyles = makeStyles(theme => ({
  map: {
    height: '50vh',
    width: '50vw',
    borderRadius: 24,
    margin: theme.spacing(2.5)
  }
}))

const MapSection = () => {
  const classes = useStyles()
  const position: LatLngExpression = [51.505, -0.09]

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} className={classes.map}>
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
