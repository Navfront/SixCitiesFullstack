import { useAppSelector } from '../../../redux/redux-hooks';

export default function AdminCitiesList(): JSX.Element {
  const cities = useAppSelector((state) => state.cities.cities);

  return (
    <>
      <h2>{cities.length === 0 ? 'В базе нет городов!' : 'Список городов:'}</h2>
      <ul className="cities__places-list places__list tabs__content">
        {cities.length === 0
          ? ' '
          : cities.map((city) => (
              <li className="cities__place-card" key={city._id}>
                {city.name}
              </li>
            ))}
      </ul>
    </>
  );
}
