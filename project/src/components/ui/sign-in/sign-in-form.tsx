import useValidate, { InputTypes } from './../../../hooks/useValidate';

export default function SignInFrom(): JSX.Element {
  const { value: emailValue, onChangeHandler: emailChangeHandler } =
    useValidate(InputTypes.email);
  const { value: passwordValue, onChangeHandler: passwordChangeHandler } =
    useValidate(InputTypes.password);
  return (
    <form className="login__form form" action="#" method="post">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={emailChangeHandler}
          value={emailValue}
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
          value={passwordValue}
          onChange={passwordChangeHandler}
          required
        />
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}
