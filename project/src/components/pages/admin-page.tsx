import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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
                <Link to="/" className="header__logo-link">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"
                  />
                </Link>
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
