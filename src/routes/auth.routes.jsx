import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn.jsx'
import { SignInAdmin } from '../pages/SignInAdmin.jsx'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
  return(
    <Routes >
      <Route path="/admin" element={<SignInAdmin/>}/>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
    </Routes>
  )
}