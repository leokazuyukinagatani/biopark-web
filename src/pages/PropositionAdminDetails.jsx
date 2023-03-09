import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { Section } from '../components/Section'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

import { HeaderAdmin } from '../components/HeaderAdmin'
import { toast } from 'react-toastify'

export function PropositionAdminDetails() {
  const params = useParams()
  const [proposition, setProposition] = useState(null)
  const [building, setBuilding] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleAcceptedProposition() {
    setLoading(true)
    try {
      const propositionResponse = await api.patch(`/propositions/${params.id}`, {
        status: 'ACCEPTED',
      })
      console.log(propositionResponse.data)
      
      setProposition(propositionResponse.data)
      console.log('depois de atualizar o status', proposition)
      const responseLocation = await api.post(`/locations/${proposition.apartmentId}`, {
        totalValue: proposition.rentalValue
      })
      toast.success('Proposta aceita e aluguel criado')
      navigate('/admin')
    } catch (error) {
      toast.error(error)
    } finally {
      setLoading(false)
    }
  }
  async function handleRejectedProposition() {
    setLoading(true)
    try {
      const propositionResponse = await api.patch(`/propositions/${params.id}`, {
        status: 'REJECTED',
      })
      
      toast.success('Proposta recusada')
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    async function fetchData() {
      console.log(params)
      const responseProposition = await api.get(`/propositions/${params.id}`)
      console.log(responseProposition.data)
      setProposition(responseProposition.data)

    
   
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
      <div className="text-4xl text-light-100 mb-4">
        Detalhes da proposta de aluguel
      </div>
      {proposition && (
        <Section>
          <div>Apartamento nº {proposition?.apartment.apartmentNumber}</div>
          <div>Locatário: {proposition?.user.name}</div>
          <div>Email de contato: {proposition?.user.email} </div>
          <div>Valor solicitado: R${proposition?.apartment.rentValue}</div>
          <div>Valor proposto: R${proposition?.rentalValue}</div>

          <div className="flex gap-3">
            {' '}
            {proposition.status == ('REJECTED' || 'ACCEPTED') ? (
              <span className='text-2xl text-white bg-red-500 p-2 rounded-lg'>Proposta já foi respondida</span>
            ) : (
              <>
                {' '}
                <button
                  className=" bg-green-700 py-3 px-8 border-0 rounded-lg text-light-100 hover:bg-green-500 font-poppins font-medium text-sm flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:bg-green-400"
                  type="button"
                  disabled={loading}
                  onClick={handleAcceptedProposition}
                >
                  Aceitar
                </button>
                <button
                  className=" bg-red-700 py-3 px-8 border-0 rounded-lg text-light-100 hover:bg-red-500 font-poppins font-medium text-sm flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:bg-red-400"
                  type="button"
                  disabled={loading}
                  onClick={handleRejectedProposition}
                >
                  Rejeitar
                </button>
              </>
            )}
          </div>
        </Section>
     
      )}

      <Footer />
    </Container>
  )
}
