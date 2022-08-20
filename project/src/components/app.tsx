import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SixCities Project</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
