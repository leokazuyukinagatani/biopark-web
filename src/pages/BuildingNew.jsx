import HeaderAdmin from '../components/HeaderAdmin'
import { Input } from '../components/Input'

import { Button } from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { InputFile } from '../components/InputFile'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Select } from '../components/Select'
import { useState } from 'react'
import { Textarea } from '../components/Textarea'
import * as zod from 'zod'
import { Footer } from '../components/Footer'
import { api } from '../services/api'

import { toast } from 'react-toastify'
import { AmenityItem } from '../components/AmenityItem'


export function BuildingNew() {

  const [name, setName] = useState('')
  const [floors, setFloors] = useState(0)
  const [description, setDescription] = useState('')
  const [amenities, setAmenities] = useState([])
  const [newAmenity, setNewAmenity] = useState('')
  const [imageBuilding, setImageBuilding] = useState(null)
  const [loading, setLoading] = useState(false)
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const navigate = useNavigate()

  async function handleSubmit() {
   
    setLoading(true)
    console.log('dentro do handle')
    console.log(name, description, floors,amenities)
    try {
     
      if(!name){
        throw new Error('nome é necessário')
      }
      if(!floors){
        throw new Error('numero de andares necessário')
      }
      if(!description){
        throw new Error('descrição é necessária')
      }
      if(newAmenity){
        throw new Error('existe um adicional que não foi adicionado')
      }

      if(!imageBuilding) {
        throw new Error('imagem do predio obrigatorio')
      }
      

        const fileUploadForm = new FormData();
        fileUploadForm.append("image", imageBuilding);
        fileUploadForm.append("option", 'buildings');
  
        console.log('antes do envio da imagem')
        const { data } = await api.post('/images', fileUploadForm)
   
      console.log('resposta da criacao da imagem',data)

     
      console.log('Inicio do envio dos dados do produto')
      await api.post('/buildings', {
        name, 
        floors,
        description,
        amenities,
        imageId: data.id

      } )
      
      toast.success('Predio criado com sucesso!')
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
    setImageBuilding(file)
  }

  function handleAddAmenity() {
    setAmenities((prevState) => [...prevState, newAmenity])
    setNewAmenity('')
  }
  function handleRemoveAmenity(deleted) {
    setAmenities((prevState) =>
      prevState.filter((amenity) => amenity !== deleted),
    )
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
        <form className="flex flex-col gap-6" encType='multipart/form-data'>
          <InputFile label="Imagem do predio" onChange={(event) =>handleChangeImage(event)} />
          <Input
            label="Nome"
            value={name}
            setValue={setName}
            placeholder="Ex: Green Palace"
          />

         
          <label htmlFor="">Diferenciais</label>
          <div className="flex flex-wrap gap-2  bg-dark-800 p-2 rounded-lg">
            {amenities.map((amenity, index) => (
              <AmenityItem
                value={amenity}
                key={index}
                onClick={() => handleRemoveAmenity(amenity)}
              />
            ))}
            <AmenityItem
              value={newAmenity}
              setValue={setNewAmenity}
              entree
              onClick={handleAddAmenity}
            />
          </div>

          <Input
            label="Numero de andares"
            value={floors}
            setValue={setFloors}
            placeholder="ex: 5"
            type="number"
          />
          <Textarea
            label="Descrição"
            value={description}
            setValue={setDescription}
            placeholder="Fale Brevemente sobre o prédio e suas caracteristicas"
          />
       

          <Button onClick={handleSubmit} type="button" title="Salvar" loading={loading}/>
        </form>
      </Section>
      <Footer />
    </Container>
  )
}