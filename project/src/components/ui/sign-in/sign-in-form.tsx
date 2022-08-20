import useValidate from './../../../hooks/useValidate';

export default function SignInFrom(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { value, onChangeHandler } = useValidate();

  return (
    <form className="login__form form" action="#" method="post">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChangeHandler}
          value={value}
          autoComplete="true"
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="true"
          required
        />
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}
