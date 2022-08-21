import { Helmet } from 'react-helmet-async';
import HeaderNav from '../ui/header-nav/header-nav';

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
                <HeaderNav />
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
