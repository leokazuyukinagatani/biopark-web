import '../styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

import { CustomToaster } from '../components/CustomToaster'

export function Routes() {
  const { user } = useAuth()

  return (
    <BrowserRouter>
        <CustomToaster />
        {user ?  <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}