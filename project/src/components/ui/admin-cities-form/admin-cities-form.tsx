import { useAppSelector } from '../../../redux/redux-hooks';
import FormInput from '../inputs/form-input';
import useSubmitCity from './../../../hooks/use-submit-city';
import AdminCitiesList from './../admin-cities-list/admin-cities-list';
import styles from './admin-cities-form.module.css';

export default function AdminCitiesForm(): JSX.Element {
  const { onSubmitHandler } = useSubmitCity();
  const currentCity = useAppSelector((state) => state.app.currentTarget);

  return (
    <>
      <AdminCitiesList />
      <h2 className="visually-hidden">Create city</h2>
      <b className="places__found">Форма создания нового города</b>
      <div className="cities__places-list places__list tabs__content">
        <article className="cities__place-card">
          <form
            action="#"
            className="login__form form"
            onSubmit={onSubmitHandler}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Название города
                <FormInput type="text" name="name" placeholder="Amsterdam" />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Широта
                <input
                  className={styles.disabled + ' login__input form__input'}
                  type="text"
                  name="latitude"
                  placeholder="52.370216"
                  value={currentCity.lat}
                  disabled
                  readOnly={true}
                />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Долгота
                <input
                  className={styles.disabled + ' login__input form__input'}
                  type="text"
                  name="longitude"
                  placeholder="4.895168"
                  value={currentCity.lng}
                  disabled
                  readOnly={true}
                />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Уровень приближения
                <input
                  className={styles.disabled + ' login__input form__input'}
                  type="number"
                  name="zoom"
                  placeholder="10"
                  value={currentCity.zoom}
                  disabled
                  readOnly={true}
                />
              </label>
            </div>
            <button className="login__submit form__submit button" type="submit">
              Создать город
            </button>
          </form>
        </article>
      </div>
    </>
  );
}
