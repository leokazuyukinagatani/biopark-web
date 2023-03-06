import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
// import { Carousel } from 'react-responsive-carousel'
import Header from '../components/Header'
// import { Card } from '../components/Card'
// import { Section } from '../components/Section'

import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Carousel } from 'react-responsive-carousel'
import { CardApartment } from '../components/CardApartment'
import Biopark from '../assets/biopark.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

export function BuildingDetails() {
  const params = useParams()
  const [building, setBuilding] = useState(null)
  const navigate = useNavigate()
  function handleNavigate() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/buildings/${params.id}`)
      console.log(response)
      setBuilding(response.data)
    }
    fetchData()
  }, [])
  return (
    <Container>
      <Header />

      {/* 
      <Section>
        <strong > Pratos principais</strong>

    
        <Carousel showArrows={true} showStatus={false}  centerMode centerSlidePercentage={65} showThumbs={false} >
          {meals.map((meal) => (
            <Card data={meal} key={meal.id}/>
          ))}
        </Carousel>
      </Section>

      <Section>
        <strong> Sobremesas</strong>

       
        <Carousel showArrows={true} showStatus={false}  centerMode centerSlidePercentage={65} showThumbs={false}>
          {desserts.map((dessert) => (
            <Card data={dessert} key={dessert.id}/>
          ))}
        </Carousel>
      </Section> */}

      {building && (
        <Section>
          <div>
            <img src={building.image.url} alt="" className="rounded-lg" />
          </div>
          <strong className="text-4xl mb-10">{building.name}</strong>
          <div>quantidade de andares: {building.floors}</div>
          <div>{building.description}</div>
          <div>
            Diferenciais:{' '}
            {building.amenities &&
              building.amenities.map((amenity,index) => (
                <span key={index} className="p-2 bg-dark-800 text-white">{amenity}</span>
              ))}
          </div>
          <div>Localizado: Bairro Biopark - Toledo/PR</div>

          {/* {building.apartment && (
            <Carousel showArrows={true} showStatus={false} showThumbs={false}>
              <CardApartment />
              <CardApartment />
              <CardApartment />
              <CardApartment />
              <CardApartment />
              <CardApartment />
            </Carousel>
          )} */}
        </Section>
      )}

      <Footer />
    </Container>
  )
}
