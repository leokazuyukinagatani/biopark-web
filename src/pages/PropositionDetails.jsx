import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { Header } from '../components/Header'

import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { Carousel } from 'react-responsive-carousel'
import { CardApartment } from '../components/CardApartment'
import Biopark from '../assets/biopark.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import clsx from 'clsx'
import { Button } from '../components/Button'

export function PropositionDetails() {
  const params = useParams()
  const [proposition, setProposition] = useState(null)
  const [building, setBuilding] = useState(null)

  const navigate = useNavigate()
  function handleNavigate() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchData() {
      console.log(params)
      const responseProposition = await api.get(`/propositions/${params.id}`)
      console.log(responseProposition)
      setProposition(responseProposition.data)

      // const responseLocation = await api.post(`/locations/`,{
      //   rentalValue: proposition.rentalValue
      // })
    
      // const responseBuilding = await api.get(
      //   `/buildings/${proposition?.apartment.buildingId}`,
      // )
      // console.log(responseBuilding.data)
      // setBuilding(responseBuilding.data)
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
      {proposition && (
        <Section>
          <div className='text-4xl'>Proposta de aluguel</div>
          <div>Apartamento nº {proposition?.apartment.apartmentNumber}</div>
          <div>Valor solicitado: R${proposition?.apartment.rentValue}</div>
          <div>Valor proposto: R${proposition?.rentalValue}</div>
          <div className={clsx('p-2 rounded-lg text-white bg-orange-500',{
            'bg-green-500': proposition.status == 'ACCEPTED'
          } )}>Status: { proposition?.status }</div>
        </Section>
        // <Section>
        //   <div>
        //     <img src={building.image ? building.image.url : Biopark} alt="" className="rounded-lg" />
        //   </div>
        //   <strong className="text-4xl mb-10">{building.name}</strong>
        //   <div>quantidade de andares: {building.floors}</div>
        //   <div>{building.description}</div>
        //   <div>
        //     Diferenciais:{' '}
        //     {building.amenities &&
        //       building.amenities.map((amenity,index) => (
        //         <span key={index} className="p-2 bg-dark-800  text-white">{amenity}</span>
        //       ))}
        //   </div>
        //   <div>Localizado: Bairro Biopark - Toledo/PR</div>

        //   {apartments&& (
        //     <Carousel showArrows={true} showStatus={false} showThumbs={false}>
        //      { apartments.map((apartment) =>(  <CardApartment  key={apartment} data={apartment}/>
        //    ) )}
        //     </Carousel>
        //   )}
        // </Section>
      )}

      <Footer />
    </Container>
  )
}
