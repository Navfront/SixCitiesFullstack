import { useMapEvents } from 'react-leaflet';
import { setTarget } from '../../../redux/reducers/app-slice';
import { useAppDispatch } from './../../../redux/redux-hooks';

export default function CurrentLocation(): JSX.Element {
  const dispatch = useAppDispatch();

  useMapEvents({
    click(e) {
      dispatch(setTarget({ ...e.latlng, zoom: e.target._zoom }));
    },
  });

  return <></>;
}
