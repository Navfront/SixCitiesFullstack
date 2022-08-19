
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login-page'
import { Helmet } from 'react-helmet'

export default function App (): JSX.Element {
  return (
    <>
        <Helmet>
      <title>SixCities Project</title>
      </Helmet>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage /> } />
      </Routes>
      </BrowserRouter>
    </>

  )
}
