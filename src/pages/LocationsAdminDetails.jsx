

import { Footer } from '../components/Footer'
import { Container } from '../components/Container'


import { Link, useNavigate, useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { HeaderAdmin } from '../components/HeaderAdmin'


export function LocationsAdminDetails() {
 
  const [locations, setLocations] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/locations/')
      console.log('resposta da busca pelos locations =>>', response)
      setLocations(response.data)
    }
    fetchData()
  }, [])
  return (
    <Container>
      <HeaderAdmin />
      <Link
        className="text-poppins font-medium text-2xl self-start ml-10 mt-10 text-light-400"
        to="/admin"
      >
        {'< voltar'}
      </Link>
      <div className='text-4xl text-light-100 mt-4 mb-4'>Lista dos  aluguéis</div>
      <div className=" mt-5 relative overflow-x-auto shadow-md sm:rounded-lg min-h-screen">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Apartamento
              </th>
              <th scope="col" className="px-6 py-3">
                Nome do Locatario
              </th>
              <th scope="col" className="px-6 py-3">
                Locador
              </th>
              <th scope="col" className="px-6 py-3">
               
              </th>
            </tr>
          </thead>
          <tbody>
            {locations &&
              locations.map((location) => (
                <tr key={location.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apartamento nº: {location.apartment.apartmentNumber}
                  </th>
                  <td className="px-6 py-4">{location.user.name}</td>
                  <td className="px-6 py-4">Biopark</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/admin/details/location/${location.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Ver mais detalhes
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </Container>
  )
}
