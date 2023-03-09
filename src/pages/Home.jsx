import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { Header } from '../components/Header'

import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Carousel } from 'react-responsive-carousel'
import { CardBuilding } from '../components/CardBuilding'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

export function Home() {
  const [buildings, setBuildings] = useState([])
  useEffect(() => {
    async function fetchData() {
      const buildingsResponse = await api.get('/buildings')
      console.log(buildingsResponse.data)
      setBuildings(buildingsResponse.data)
    }
    fetchData()
  }, [])
  return (
    <Container>
      <Header />

      <Section>
        <strong className="text-4xl mb-10"> Predios</strong>

        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          {buildings.map((building) => (
            <CardBuilding data={building} key={building.id} />
          ))}
        </Carousel>
      </Section>
      <Footer />
    </Container>
  )
}
