import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import AdminPage from './pages/admin-page';
import WithPrivate from '../hocs/with-private';
import MainPage from './pages/main-page';

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
            <Route path="city" element={<p>city</p>} />
            <Route path="hotel" element={<p>hotel</p>} />
            <Route path="review" element={<p>review</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
