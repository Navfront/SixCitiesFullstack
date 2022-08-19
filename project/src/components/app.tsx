import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login-page'

export default function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
