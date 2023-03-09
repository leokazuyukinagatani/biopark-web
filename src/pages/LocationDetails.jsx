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
import dayjs from 'dayjs'


export function LocationDetails() {
  const params = useParams()
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/locations/${params.id}`)
      console.log(response)
      setLocation(response.data)
    }
    fetchData()
  }, [])
  return (
    <Container>
      <Header />
      <div className='text-4xl text-light-100 mb-4'>Detalhes do aluguel</div>
      {location && (
        <Section>
          <strong className="text-4xl mb-10">Detalhes da locação</strong>
          <img
            src={
              location.apartment.image ? location.apartment.image.url : Biopark
            }
            alt=""
            className="rounded-lg"
          />
          <strong className="text-2xl mb-10">
            Apartamento nº {location.apartment.apartmentNumber}
          </strong>
          <div className="flex gap-2">
            <span className="rounded-lg bg-slate-700 p-2 text-light-100">
              {location.apartment.bedrooms} quartos
            </span>
            <span className="rounded-lg bg-slate-700 p-2 text-light-100">
              {location.apartment.bathrooms} banheiro
            </span>
            <span className="rounded-lg bg-slate-700 p-2 text-light-100">
              {location.apartment.parkingSpaces} vaga de estacionamento
            </span>
          </div>

          <div>Tamanho: {location.apartment.size}m²</div>
          <div>Valor do aluguel por mês: R${location.totalValue}</div>
          <div>Nome do Locador: {location.user.name}</div>
          <div>Email de contato do Locador: {location.user.email}</div>
          <div>
            Data de inicio do contrato:{' '}
            {dayjs(location.startDate).format('DD/MM/YYYY')}
          </div>
          <div>
            Data de termino do contrato:{' '}
            {dayjs(location.endDate).format('DD/MM/YYYY')}
          </div>
          <div>
            <span>Localizado: Bairro Biopark - Toledo/PR </span>
          </div>
          <span>Proprietário: Biopark</span>
          <div className="flex justify-start items-center gap-2">
            <span>Predio: Boulevar - 195</span>
            <Link
              className="p-1 text-green-500 rounded-lg text-light-100"
              to={`/details/building/${location.apartment.buildingId}`}
            >
              Ver mais detalhes ↗
            </Link>
          </div>
        </Section>
      )}

      <Footer />
    </Container>
  )
}
