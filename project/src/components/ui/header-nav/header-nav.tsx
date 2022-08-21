import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../redux/redux-hooks';
import style from './style.module.css';
import { useAppDispatch } from './../../../redux/redux-hooks';
import { resetState } from '../../../redux/reducers/auth-slice';

function HeaderNav(): JSX.Element {
  const { isAuth, email, isAdmin } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuth ? (
          <>
            <li className="header__nav-item user">
              <Link
                to={'/favorites'}
                className="header__nav-link header__nav-link--profile"
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">{email}</span>
              </Link>
            </li>
            {isAdmin ? (
              <li className="header__nav-item">
                <Link to="/admin/city">
                  <span>Админка</span>
                </Link>
              </li>
            ) : (
              ' '
            )}
            <li className="header__nav-item">
              <button
                className={style.resetBtn + ' header__nav-link'}
                onClick={() => {
                  dispatch(resetState());
                }}
              >
                <span className="header__signout">Sign out</span>
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="header__nav-item user">
              <Link
                to={'/login'}
                className="header__nav-link header__nav-link--profile"
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__login">Sign in</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default React.memo(HeaderNav);
