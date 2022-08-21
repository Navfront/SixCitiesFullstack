import { Link, Outlet, useLocation } from 'react-router-dom';
import WithActiveLink from '../../hocs/with-active-link';
import HeaderNav from '../ui/header-nav/header-nav';
import { Helmet } from 'react-helmet-async';

export default function AdminPage(): JSX.Element {
  const loc = useLocation();
  console.log(loc.pathname.split('/')[2]);

  return (
    <>
      <Helmet>
        <title>SixCities: Admin Page</title>
      </Helmet>
      <div className="page page--gray page--main">
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
              <HeaderNav />
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <li className="locations__item">
                  <WithActiveLink text="Добавить город" to="city" />
                </li>
                <li className="locations__item">
                  <WithActiveLink text="Добавить отель" to="hotel" />
                </li>
                <li className="locations__item">
                  <WithActiveLink text="Добавить ревью" to="review" />
                </li>
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <Outlet />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
