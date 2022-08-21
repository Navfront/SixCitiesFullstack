import React from 'react';
import FormInput from '../inputs/form-input';
import useSubmit from './../../../hooks/use-submit';

function SignInFrom(): JSX.Element {
  const formRef = React.createRef<HTMLFormElement>();
  const { onSubmitHandler } = useSubmit(formRef);

  return (
    <form
      onSubmit={onSubmitHandler}
      ref={formRef}
      className="login__form form"
      action="#"
      method="post"
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <FormInput type={'email'} />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <FormInput type={'password'} />
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}

export default React.memo(SignInFrom);
