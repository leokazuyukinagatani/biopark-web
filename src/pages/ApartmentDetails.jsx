import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { Section } from '../components/Section'

import Biopark from '../assets/biopark.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'

export function ApartmentDetails() {
  const params = useParams()
  const [apartment, setApartment] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // async function handleSubmit() {
  //   setLoading(true)
  //   try {
  //     const response = await api.post(`/locations/${params.id}`, {
  //       startDate: new Date(),
  //       endDate: new Date(2024, 12, 31),
  //       totalValue: apartment.rentValue,
  //     })
  //     console.log(response)
  //     navigate('/')
  //   } catch (error) {
  //     console.log(error)
  //     toast.error(error.message)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/apartments/${params.id}`)
      console.log('detalhes do apartamento',response.data)
      setApartment(response.data)
    }
    fetchData()
  }, [])
  return (
    <Container>
      <Header />
      <Link
        className="text-poppins font-medium text-2xl self-start ml-10 mt-10 text-light-400"
        to="/"
      >
        {'< voltar'}
      </Link>
      <div className='text-4xl text-light-100 mb-4 mt-4'>Detalhes do apartamento</div>
      {apartment && (
        <Section>
          <div>
            <img
              src={apartment.image ? apartment.image.url : Biopark}
              alt=""
              className="rounded-lg"
            />
          </div>
          <strong className="text-4xl mb-10">
            Apartamento nº {apartment.apartmentNumber}
          </strong>
          <div className="flex gap-2">
            <span className="rounded-lg bg-slate-700 p-2 text-light-100">
              {apartment.bedrooms} quartos
            </span>
            <span className="rounded-lg bg-slate-700 p-2 text-light-100">
              {apartment.bathrooms} banheiro
            </span>
            <span className="rounded-lg bg-slate-700 p-2 text-light-100">
              {apartment.parkingSpaces} vaga de estacionamento
            </span>
          </div>

          <div>Tamanho: {apartment.size}m²</div>
          <div>
            Mobiliado: <span className="text-red-500">não</span>
          </div>
          <div>
            Aceita pets: <span className="text-green-500">sim</span>
          </div>
          <div>Valor: R${apartment.rentValue}</div>
          <div>
            <span>Localizado: Bairro Biopark - Toledo/PR </span>
          </div>
          <span>Proprietário: Biopark</span>
          <div className="flex justify-start items-center gap-2">
            <span>Predio: Boulevar - 195</span>
            <Link
              className="p-1 text-green-500 rounded-lg text-light-100"
              to="/details/building"
            >
              Ver mais detalhes ↗
            </Link>
          </div>
          {apartment.location ? (
            <span className="text-3xl text-red-500">
              Apartamento indisponivel
            </span>
          ) : (
            <Link className="p-2 bg-red-500 rounded-lg max-w-md flex items-center justify-center" to={`/new/proposition/${apartment.id}`}>Enviar uma proposta</Link>
          )}
        </Section>
      )}

      <Footer />
    </Container>
  )
}
