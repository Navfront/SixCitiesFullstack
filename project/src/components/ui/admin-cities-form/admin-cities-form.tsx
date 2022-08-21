import FormInput from '../inputs/form-input';

export default function AdminCitiesForm(): JSX.Element {
  return (
    <>
      <h2 className="visually-hidden">Create city</h2>
      <b className="places__found">Форма создания нового города</b>

      <div className="cities__places-list places__list tabs__content">
        <article className="cities__place-card">
          <form action="#" className="login__form form">
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
                  placeholder="52.370216"
                />
              </label>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label>
                Долгота
                <FormInput
                  type={'text'}
                  name="longtitude"
                  placeholder="4.895168"
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
