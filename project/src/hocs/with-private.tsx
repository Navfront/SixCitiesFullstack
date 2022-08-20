import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/redux-hooks';

export default function WithPrivate({
  children,
}: PropsWithChildren): JSX.Element {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const element = isAuth ? children : <Navigate to="/login" />;

  return <>{element}</>;
}
