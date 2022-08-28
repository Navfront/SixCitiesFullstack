import FormInput from '../inputs/form-input';
import useSubmitCity from './../../../hooks/use-submit-city';
import AdminCitiesList from './../admin-cities-list/admin-cities-list';

export default function AdminCitiesForm(): JSX.Element {
  const { onSubmitHandler } = useSubmitCity();

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
                <FormInput
                  type="text"
                  name="latitude"
                  placeholder="52.370216"
                />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Долгота
                <FormInput
                  type="text"
                  name="longitude"
                  placeholder="4.895168"
                />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Уровень приближения
                <FormInput type="number" name="zoom" placeholder="10" />
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
