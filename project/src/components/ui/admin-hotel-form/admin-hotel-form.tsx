import React from 'react';
import { City } from '../../../../types/city';
import { useAppSelector } from '../../../redux/redux-hooks';
import FormInput from '../inputs/form-input';
import style from './style.module.css';

function AdminHotelsForm(): JSX.Element {
  const cities = useAppSelector((state) => state.cities.cities as City[]);
  console.log(cities);

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
          </form>
        </article>
      </div>
    </>
  );
}

export default React.memo(AdminHotelsForm);
