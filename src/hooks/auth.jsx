import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})


  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data
      localStorage.setItem('@biopark:user', JSON.stringify(user))
      localStorage.setItem('@biopark:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })
      console.log(user, token)
    } catch (error) {
      if (error.response) {
        toast.warning(error.response.data.message)
      } else {
        toast.warning('Não foi possível entrar.')
      }
    }
  }
  async function signInAdmin({ email, password }) {
    try {
      const response = await api.post('/sessions/admin', { email, password })
      const { user, token } = response.data
      localStorage.setItem('@biopark:user', JSON.stringify(user))
      localStorage.setItem('@biopark:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })
      console.log(user, token)
    } catch (error) {
      if (error.response) {
        toast.warning(error.response.data.message)
      } else {
        toast.warning('Não foi possível entrar.')
      }
    }
  }


  function signOut() {
    localStorage.removeItem('@biopark:user')
    localStorage.removeItem('@biopark:token')
    setData({})
    // navigate('/')
  }

  // async function updateProfile({ user, avatarFile }) {
  //   try {
  //     if (avatarFile) {
  //       const fileUploadForm = new FormData()
  //       fileUploadForm.append('avatar', avatarFile)

  //       const response = await api.patch('/users/avatar', fileUploadForm)

  //       user.avatar = response.data.avatar
  //     }

  //     await api.put('/users', user)
  //     localStorage.setItem('@rocketfood:user', JSON.stringify(user))

  //     setData({ user, token: data.token })
  //   } catch (error) {
  //     if (error.response) {
  //       return String(error.response.data.message)
  //     } else {
  //       return 'Não foi possível atualizar o perfil.'
  //     }
  //   }
  // }


  async function signUp({ name, email, password }) {
   
    try {
      await api.post('/users', { name, email, password })
      toast.success('Cadastro criado com sucesso')
      navigate('/')
    } catch (error) {
      toast.warning('Ops ocorreu um erro ao criar o usuário')
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@biopark:user')
    const token = localStorage.getItem('@biopark:token')

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({
        token,
        user: JSON.parse(user),
      })
    }
  
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signUp,
        signInAdmin,
       
        // updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }