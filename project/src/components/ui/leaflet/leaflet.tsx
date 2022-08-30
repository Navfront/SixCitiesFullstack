import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L, { Map } from 'leaflet';
import CurrentLocation from './current-location';
import React, { useEffect } from 'react';
import { useAppSelector } from '../../../redux/redux-hooks';

const center = {
  lat: 51.505,
  lng: -0.09,
};

interface LatLng {
  lat: number;
  lng: number;
}

const getLatLngFromHotel = (hotel: any): LatLng => {
  return { lat: hotel.location.latitude, lng: hotel.location.longitude };
};

const Pin = L.icon({
  iconUrl: './img/pin.svg',
});

export default function Leaflet(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const currentCity = useAppSelector((state) => state.app.currentCity);
  const hotels = useAppSelector((state) => state.hotels.hotels);
  const map = React.createRef<Map>();

  useEffect(() => {
    map.current?.flyTo(
      [currentCity.location.latitude, currentCity.location.longitude],
      currentCity.location.zoom
    );
    console.log('need render ', hotels);
  }, [currentCity]);

  return (
    <>
      <MapContainer
        center={center}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
        ref={map}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=kES0LREaSllqsmkl8Erm"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {hotels.length > 0
          ? hotels.map((hotel) => (
              <Marker
                key={hotel._id}
                position={getLatLngFromHotel(hotel)}
                icon={Pin}
              >
                <Popup>
                  {hotel.title}. <br /> {String(hotel.price) + ' $'}.
                </Popup>
              </Marker>
            ))
          : ' '}
        <CurrentLocation />
      </MapContainer>
    </>
  );
}
