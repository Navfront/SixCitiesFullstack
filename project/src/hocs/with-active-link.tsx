import { useLocation, Link } from 'react-router-dom';

interface WithActiveLinkProps {
  text: string;
  to: string;
  activeClass?: string;
}

export default function WithActiveLink({
  text,
  to = '',
  activeClass = 'tabs__item--active',
}: WithActiveLinkProps): JSX.Element {
  const location = useLocation();
  const pathArray = location.pathname.split('/');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const currentPath = pathArray[pathArray.length - 1];

  return (
    <Link
      to={to}
      className={'locations__item-link tabs__item '.concat(
        currentPath === to ? activeClass : ''
      )}
    >
      <span>{text}</span>
    </Link>
  );
}
