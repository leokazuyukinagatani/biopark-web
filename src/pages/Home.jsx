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
import { CardBuilding } from '../components/CardBuilding'
import Biopark from '../assets/biopark.jpg'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

export function Home() {
  const [buildings, setBuildings] = useState([])
  useEffect( () => {
    async function fetchData(){
      const buildingsResponse = await api.get('/buildings')
      console.log(buildingsResponse.data)
      setBuildings(buildingsResponse.data)
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

      <Section>
        <strong className="text-4xl mb-10"> Predios</strong>

        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          {buildings.map((building) => (
            <CardBuilding data={building} key={building.id} />
          ))}
        </Carousel>
      </Section>
      {/* <Section>
        <strong className="text-4xl mb-10"> Apartamentos</strong>

        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          <CardApartment />
          <CardApartment />
          <CardApartment />
          <CardApartment />
          <CardApartment />
          <CardApartment />
        </Carousel>
      </Section> */}
      <Footer />
    </Container>
  )
}
