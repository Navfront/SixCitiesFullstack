import { useMapEvents } from 'react-leaflet';
import { setActiveCity } from '../../../redux/reducers/app-slice';
import { useAppDispatch } from './../../../redux/redux-hooks';

export default function CurrentLocation(): JSX.Element {
  const dispatch = useAppDispatch();

  useMapEvents({
    click(e) {
      dispatch(setActiveCity({ ...e.latlng, zoom: e.target._zoom }));
    },
  });

  return <></>;
}
