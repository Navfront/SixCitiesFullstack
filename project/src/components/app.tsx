import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import AdminPage from './pages/admin-page';
import WithPrivate from '../hocs/with-private';
import MainPage from './pages/main-page';
import AdminCitiesForm from './ui/admin-cities-form/admin-cities-form';
import AdminHotelsForm from './ui/admin-hotel-form/admin-hotel-form';

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SixCities Project</title>
      </Helmet>
      <ToastContainer newestOnTop hideProgressBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="admin"
            element={
              <WithPrivate>
                <AdminPage />
              </WithPrivate>
            }
          >
            <Route path="city" element={<AdminCitiesForm />} />
            <Route path="hotel" element={<AdminHotelsForm />} />
            <Route path="review" element={<p>review</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
