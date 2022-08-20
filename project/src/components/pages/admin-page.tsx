import { Helmet } from 'react-helmet-async';

export default function AdminPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>SixCities: Admin Page</title>
      </Helmet>
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
