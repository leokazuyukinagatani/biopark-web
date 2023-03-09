import { HeaderAdmin } from '../components/HeaderAdmin'
import { Input } from '../components/Input'

import { Button } from '../components/Button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { InputFile } from '../components/InputFile'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Select } from '../components/Select'
import { useEffect, useState } from 'react'

import { Footer } from '../components/Footer'
import { api } from '../services/api'

import { toast } from 'react-toastify'

import { Header } from '../components/Header'

export function PropositionNew() {
  const [apartment, setApartment] = useState(null)
  const [rentalValue, setRentalValue] = useState(0)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const { apartmentId } = useParams()

  async function handleSubmit() {
    setLoading(true)
    console.log('dentro do handle')

    try {
      console.log('Inicio do envio dos dados do produto')
      const response = await api.post(`/propositions/${apartmentId}`, {
        rentalValue,
      })

      console.log('resposta da criacao do apartamento', response.data)

      toast.success('Proposta enviada com sucesso!')
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    async function fetchData() {
      const apartmentResponse = await api.get(`/apartments/${apartmentId}`)
      console.log('apartment ==>',apartmentResponse.data)
      setApartment(apartmentResponse.data)
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

      <Section>
        <div className="text-4xl text-light-100 mb-4">
          Nova Proposta de aluguel
        </div>
        <form className="flex flex-col gap-6" encType="multipart/form-data">
          <div className="text-4xl">Dados da solicitação da proposta</div>
          {apartment && (
            <>
              <div>Apartamento nº {apartment.apartmentNumber}</div>
              <div>Numero de quartos: {apartment.bedrooms}</div>
              <div>Numero de banheiros: {apartment.bathrooms}</div>
              <div>
                Numero de vagas de estacionamento: {apartment.parkingSpaces}
              </div>
              <div>
                Numero de vagas de estacionamento: {apartment.parkingSpaces}
              </div>
              <div>
                Mobiliado:
                {apartment.furnished ? (
                  <span className="text-green-500"> sim</span>
                ) : (
                  <span className="text-red-500"> não</span>
                )}
              </div>
              <div>
                Aceita animais:
                {apartment.petsAllowed ? (
                  <span className="text-green-500"> sim</span>
                ) : (
                  <span className="text-red-500"> não</span>
                )}
              </div>
              <div>Tamanho do imóvel: {apartment.size}m²</div>
              <div>Valor solicitado pelo aluguel: {apartment.rentValue}</div>
            </>
          )}

          {apartment?.Proposition.length == 0 ? (
            <>
              <Input
                label="Valor da proposta do aluguel"
                type="number"
                value={rentalValue}
                setValue={setRentalValue}
                placeholder="Ex: 1000"
              />

              <Button
                onClick={handleSubmit}
                type="button"
                title="Enviar proposta"
                loading={loading}
              />
            </>
          ) : (
            <span className="text-2xl text-red-500">Proposta já enviada</span>
          )}
        </form>
      </Section>
      <Footer />
    </Container>
  )
}
