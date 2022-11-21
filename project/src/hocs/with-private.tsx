import { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/redux-hooks';

export default function WithPrivate({
  children,
}: PropsWithChildren): JSX.Element {
  const loc = useLocation();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: loc }} />;
  }

  return <>{children}</>;
}
