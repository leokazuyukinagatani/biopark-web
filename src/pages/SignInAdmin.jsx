import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/auth'
import * as zod from 'zod'

import { toast } from 'react-toastify'

const formValidationSchema = zod.object({
  email: zod.string().email({ message: 'Digite um email válido' }),
  password: zod.string().min(6, { message: 'Digite uma senha válida' }),
})

export function SignInAdmin() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  const { signInAdmin } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(event) {
    event.preventDefault()
    setIsUserSignedIn(true)
    try {
      const userValidated = formValidationSchema.parse({ email, password })

      await signInAdmin(userValidated)
    } catch (zodError) {
      // toast.error(error.message)
      if(zodError instanceof zod.ZodError){
        const messages = zodError.errors.map((error) => error.message)
        console.log(messages)
        // errors.map((error) => (toast.error(error.message)) )
        messages.map((message) => toast.error(message))
      } else{
        console.log(zodError.message)
        toast.error(zodError.message)
      }
 
    } finally {
      setIsUserSignedIn(false)
    }
  }

  return (
    <main className="w-screen h-screen flex flex-col justify-start items-center pt-8 bg-dark-400 gap-8">
      <div className='flex flex-col items-center justify-center '>
        <img src={Logo} alt="" className="object-cover h-36 w-36" />
        <strong className='text-3xl text-light-100'>Login Admin</strong>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <Input
          id="email"
          label="Email"
          type="email"
          value={email}
          setValue={setEmail}
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          value={password}
          setValue={setPassword}
          placeholder="No mínimo 6 caracteres"
        />
        <Button title="Entrar" type="submit" loading={isUserSignedIn} />
      </form>
      
    </main>
  )
}
