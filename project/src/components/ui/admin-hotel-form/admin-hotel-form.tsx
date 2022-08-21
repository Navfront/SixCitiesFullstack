import React from 'react';
import { City } from '../../../../types/city';
import { useAppSelector } from '../../../redux/redux-hooks';
import FormInput from '../inputs/form-input';
import style from './style.module.css';

function AdminHotelsForm(): JSX.Element {
  const cities = useAppSelector((state) => state.cities.cities as City[]);
  const { userId } = useAppSelector((state) => state.auth);

  return (
    <>
      <h2 className="visually-hidden">Create city</h2>
      <b className="places__found">Форма создания нового отеля</b>

      <div className="cities__places-list places__list tabs__content">
        <article className="cities__place-card">
          <form action="#" className="login__form form">
            <div className="login__input-wrapper form__input-wrapper">
              <label className={style.label}>
                Город
                <select name="city" className={style.select}>
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
              <input type="text" name="host" value={userId} hidden />
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
                Название города
                <FormInput type={'text'} name="name" placeholder="Amsterdam" />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Широта
                <FormInput
                  type={'text'}
                  name="latitude"
                  placeholder="52.35514938496378"
                />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Долгота
                <FormInput
                  type={'text'}
                  name="longtitude"
                  placeholder="4.673877537499948"
                />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Уровень приближения
                <FormInput type="number" name="zoom" placeholder="8" />
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
          </form>
        </article>
      </div>
    </>
  );
}

export default React.memo(AdminHotelsForm);
