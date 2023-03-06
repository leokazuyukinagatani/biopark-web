import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import Logo from '../assets/logo.png'
import { toast } from 'react-toastify'

import * as zod from 'zod'
import { useAuth } from '../hooks/auth'
import { useState } from 'react'

const formValidationSchema = zod.object({
  name: zod.string().min(6, 'Insira um nome que contenha 6 caracteres'),
  email: zod.string().email({ message: 'Digite um email válido' }),
  password: zod.string().min({ message: 'Digite um password válido' })
})

export function SignUp() {
  const { signUp } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)
  const navigate = useNavigate()

  async function onSubmit(event) {
    event.preventDefault()
    setIsUserSignedIn(true)
    try {
      const userValidated = formValidationSchema.parse({
        name,
        email,
        password
      })
      if (password != passwordConfirm) {
        throw error('Confirmação de senha invalida')
      }
      console.log('iniciando o login')
      await signUp(userValidated)
      navigate('/')
    } catch (zodError) {
      if(zodError instanceof zod.ZodError){
        const messages = zodError.errors.map((error) => error.message)
        messages.map((message) => toast.error(message))
      }else {
        toast.error(zodError.message)
      }
      

      // errors.map((error) => (toast.error(error.message)) )
      
    } finally {
      setIsUserSignedIn(false)
    }
  }

  return (
    <main className="w-screen h-screen flex flex-col justify-start items-center pt-8 bg-dark-400  gap-8">
      <div>
        <img src={Logo} alt="" className="object-cover h-36 w-36" />
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <Input
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          id="name"
          value={name}
          setValue={setName}
        />
        <Input
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          id="email"
          value={email}
          setValue={setEmail}
        />
        <Input
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          id="password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <Input
          label="Confirme sua senha"
          placeholder="No mínimo 6 caracteres"
          id="password"
          type="password"
          value={passwordConfirm}
          setValue={setPasswordConfirm}
        />
        <Button title="Criar" type="submit" loading={isUserSignedIn} />
      </form>
      <Link className="text-light-100" to="/">
        Já tenho uma conta
      </Link>
    </main>
  )
}
