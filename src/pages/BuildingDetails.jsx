import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import {Header} from '../components/Header'


import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Carousel } from 'react-responsive-carousel'
import { CardApartment } from '../components/CardApartment'
import Biopark from '../assets/biopark.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../services/api'


export function BuildingDetails() {
  const params = useParams()
  const [building, setBuilding] = useState(null)
  const [apartments, setApartments] = useState(null)
  const navigate = useNavigate()
  function handleNavigate() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/buildings/${params.id}`)
      console.log(response.data)
      setBuilding(response.data)
      const apartmentResponse = await api.get(`/apartments/buildingId/${params.id}`)
      console.log(apartmentResponse.data)
      setApartments(apartmentResponse.data)
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
      {building && (
        <Section>
          <div>
            <img src={building.image ? building.image.url : Biopark} alt="" className="rounded-lg" />
          </div>
          <strong className="text-4xl mb-10">{building.name}</strong>
          <div>quantidade de andares: {building.floors}</div>
          <div>{building.description}</div>
          <div>
            Diferenciais:{' '}
            {building.amenities &&
              building.amenities.map((amenity,index) => (
                <span key={index} className="p-2 bg-dark-800  text-white">{amenity}</span>
              ))}
          </div>
          <div>Localizado: Bairro Biopark - Toledo/PR</div>

          {apartments&& (
            <Carousel showArrows={true} showStatus={false} showThumbs={false}>
             { apartments.map((apartment) =>(  <CardApartment  key={apartment} data={apartment}/>
           ) )}
            </Carousel>
          )}
        </Section>
      )}

      <Footer />
    </Container>
  )
}
