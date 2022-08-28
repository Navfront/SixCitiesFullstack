import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import CurrentLocation from './current-location';

const center = {
  lat: 51.505,
  lng: -0.09,
};

const ccenter = {
  lat: 51.515,
  lng: -0.09,
};

const Pin = L.icon({
  iconUrl: './img/pin.svg',
});

const ActivePin = L.icon({
  iconUrl: './img/pin-active.svg',
});

export default function Leaflet(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <>
      <MapContainer
        center={center}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=kES0LREaSllqsmkl8Erm"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <Marker position={center} icon={Pin}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={ccenter} icon={ActivePin}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <CurrentLocation />
      </MapContainer>
    </>
  );
}
