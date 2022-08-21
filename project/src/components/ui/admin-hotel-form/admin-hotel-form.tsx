import React, { useEffect } from 'react';
import FormInput from '../inputs/form-input';
import style from './style.module.css';
import ServiceApi from './../../../api/service-api';

function AdminHotelsForm(): JSX.Element {
  // const [cities, setCities] = useState([]);
  useEffect(() => {
    console.log('render!');

    const serviceApi = new ServiceApi(process.env.REACT_APP_SURV as string);
    try {
      const result = serviceApi.getCities();
      result.then((res) => console.log(res)).catch((e) => e);
    } catch (err) {
      console.log(err);
    }
  }, []);

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
                  <option value="0">Parent Tag</option>
                  <option value="1">Child Tag</option>
                  <option value="2">Child Tag</option>
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
                Уровень приближения
                <FormInput type={'text'} name="zoom" placeholder="8" />
              </label>
            </div>
          </form>
        </article>
      </div>
    </>
  );
}

export default React.memo(AdminHotelsForm);
