import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Carousel } from 'react-responsive-carousel'


import { HeaderAdmin } from '../components/HeaderAdmin'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { CardBuildingAdmin } from '../components/CardBuildingAdm'

export function HomeAdmin() {
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
      <HeaderAdmin />

      <Section>
        <strong className="text-4xl mb-10"> Predios</strong>

        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          {buildings.map((building) => (
            <CardBuildingAdmin data={building} key={building.id} />
          ))}
        </Carousel>
      </Section>

      <Footer />
    </Container>
  )
}
