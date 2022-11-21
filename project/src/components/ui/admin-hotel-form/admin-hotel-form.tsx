import React, { SyntheticEvent } from 'react';
import { useAppSelector } from '../../../redux/redux-hooks';
import FormInput from '../inputs/form-input';
import style from './style.module.css';
import useSubmitHotel from './../../../hooks/uer-submit-hotel';
import { useAppDispatch } from './../../../redux/redux-hooks';
import { fetchGetHotels } from '../../../redux/thunks/get-hotels-thunk';
import { setCurrentCityFetch } from '../../../redux/thunks/set-current-city-thunk';

function AdminHotelsForm(): JSX.Element {
  const cities = useAppSelector((state) => state.cities.cities);
  const currentCity = useAppSelector((state) => state.app.currentCity);
  const { userId } = useAppSelector((state) => state.auth);
  const targetLocation = useAppSelector((state) => state.app.currentTarget);
  const dispatch = useAppDispatch();
  const { onSubmitHandler } = useSubmitHotel();

  const onCityChangeHandler = (e: SyntheticEvent<HTMLSelectElement>): void => {
    void dispatch(fetchGetHotels(e.currentTarget.value));
    void dispatch(setCurrentCityFetch(e.currentTarget.value));
  };

  return (
    <>
      <h2 className="visually-hidden">Create city</h2>
      <b className="places__found">
        Форма создания нового отеля в {currentCity.name}
      </b>

      <div className="cities__places-list places__list tabs__content">
        <article className="cities__place-card">
          <form
            action="#"
            className="login__form form"
            onSubmit={onSubmitHandler}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className={style.label}>
                Город
                <select
                  name="city"
                  className={style.select}
                  onChange={onCityChangeHandler}
                >
                  {cities.map((city) => (
                    <option key={city._id} value={city._id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Широта
                <input
                  className={style.disabled + ' login__input form__input'}
                  type="text"
                  name="latitude"
                  placeholder="52.370216"
                  value={targetLocation.lat}
                  disabled
                  readOnly={true}
                />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Долгота
                <input
                  className={style.disabled + ' login__input form__input'}
                  type="text"
                  name="longitude"
                  placeholder="4.895168"
                  value={targetLocation.lng}
                  disabled
                  readOnly={true}
                />
              </label>
            </div>

            <input
              className={style.disabled + ' login__input form__input'}
              type="number"
              name="zoom"
              placeholder="10"
              value={targetLocation.zoom}
              disabled
              readOnly={true}
              hidden
            />

            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Заголовок
                <FormInput
                  type="text"
                  name="title"
                  placeholder="Beautiful and luxurious studio at great location"
                />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Описание отеля
                <FormInput
                  type={'text'}
                  name="description"
                  placeholder="Все что можно сказать об отеле"
                />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Ништяки через запятую
                <FormInput
                  type={'text'}
                  name="goods"
                  placeholder="Heating, Kitchen, Cabble TV"
                />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Количество спален
                <FormInput type={'number'} name="bedrooms" placeholder="3" />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <input
                type="text"
                name="host"
                value={userId}
                hidden
                readOnly={true}
              />
              <input type="checkbox" name="is_favorite" hidden />
              <label>
                Урл фоток через запятую
                <FormInput
                  type={'text'}
                  name="images"
                  placeholder="img/1.png, img/2.png"
                />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Класс
                <p>
                  <span className={style.text}>Это отель премиум класса</span>
                  <input type="checkbox" name="is_premium" />
                </p>
              </label>
            </div>

            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Количество несовершеннолетних
                <FormInput type="number" name="max_adults" placeholder="4" />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Превью фотография
                <FormInput
                  type="text"
                  name="preview_image"
                  placeholder="img/1.png"
                />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Цена
                <FormInput type="number" name="price" placeholder="120" />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Рейтинг
                <FormInput type="number" name="rating" placeholder="4.8" />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Тип отеля
                <FormInput type="text" name="type" placeholder="apartment" />
              </label>
            </div>
            <button className="login__submit form__submit button" type="submit">
              Создать отель
            </button>
          </form>
        </article>
      </div>
    </>
  );
}

export default React.memo(AdminHotelsForm);
