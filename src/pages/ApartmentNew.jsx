import HeaderAdmin from '../components/HeaderAdmin'
import { Input } from '../components/Input'

import { Button } from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { InputFile } from '../components/InputFile'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Select } from '../components/Select'
import { useEffect, useState } from 'react'

import { Footer } from '../components/Footer'
import { api } from '../services/api'

import { toast } from 'react-toastify'
import { useAuth } from '../hooks/auth'

export function ApartmentNew() {
  const [apartmentNumber, setApartmentNumber] = useState(0)
  const [bedrooms, setBedrooms] = useState(0)
  const [bathrooms, setBathrooms] = useState(0)
  const [parkingSpaces, setParkingSpaces] = useState(0)
  const [size, setSize] = useState(0)
  const [furnished, setFurnished] = useState(false)
  const [imageApartment, setImageApartment] = useState(null)
  const [petsAllowed, setPetsAllowed] = useState(false)
  const [buildings, setBuildings] = useState([])
  const [rentValue, setRentValue] = useState(0)
  const [buildingId, setBuildingId] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    async function fetchBuildings() {
      const response = await api.get('/buildings')
      setBuildings(response.data)
    }
    fetchBuildings()
  }, [])
  async function handleSubmit() {
    setLoading(true)
    console.log('dentro do handle')

    try {
      if (!apartmentNumber) {
        throw new Error('nome é necessário')
      }

      if (!imageApartment) {
        throw new Error('imagem do apartamento obrigatorio')
      }

      if (!buildingId) {
        throw new Error('Selecione o prédio que o apartamento pertence')
      }

      const fileUploadForm = new FormData()
      fileUploadForm.append('image', imageApartment)
      fileUploadForm.append('option', 'apartments')

      console.log('antes do envio da imagem')
      const { data } = await api.post('/images', fileUploadForm)

      console.log('resposta da criacao da imagem', data)

      console.log('Inicio do envio dos dados do produto')
      const response = await api.post(`/apartments/${buildingId}`, {
        apartmentNumber,
        bedrooms,
        bathrooms,
        parkingSpaces,
        furnished,
        petsAllowed,
        size,
        rentValue,
        ownerId: user.id,
        imageId: data.id,
      })

      console.log('resposta da criacao do apartamento', response.data)

      toast.success('Apartamento criado com sucesso!')
      navigate(-1)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  function handleChangeImage(event) {
    console.log(event.target)
    const file = event.target.files[0]
    setImageApartment(file)
  }

  return (
    <Container>
      <HeaderAdmin />

      <Link
        className="text-poppins font-medium text-2xl self-start ml-10 mt-10 text-light-400"
        to="/"
      >
        {'< voltar'}
      </Link>

      <Section>
        <form className="flex flex-col gap-6" encType="multipart/form-data">
          <InputFile
            label="Imagem do apartmento"
            onChange={(event) => handleChangeImage(event)}
          />
          <Select
            label="Selecione o Predio que este apartamento pertence"
            value={buildingId}
            setValue={setBuildingId}
            options={buildings}
          />
          <Input
            label="Numero do apartamento"
            type="number"
            value={apartmentNumber}
            setValue={setApartmentNumber}
            placeholder="Ex: 1"
          />
          <Input
            label="Quantidade de quartos"
            type="number"
            value={bedrooms}
            setValue={setBedrooms}
            placeholder="Ex: 1"
          />
          <Input
            label="Quantidade de banheiros"
            type="number"
            value={bathrooms}
            setValue={setBathrooms}
            placeholder="Ex: 1"
          />
          <Input
            label="Tamanho em m²"
            type="number"
            value={size}
            setValue={setSize}
            placeholder="Ex: 50"
          />
          <Input
            label="Valor solicitado pelo aluguel"
            type="number"
            value={rentValue}
            setValue={setRentValue}
            placeholder="Ex: 1000"
          />

          <Button
            onClick={handleSubmit}
            type="button"
            title="Salvar"
            loading={loading}
          />
        </form>
      </Section>
      <Footer />
    </Container>
  )
}
