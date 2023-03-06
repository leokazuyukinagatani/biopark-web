import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
// import { Carousel } from 'react-responsive-carousel'
import Header from '../components/Header'
// import { Card } from '../components/Card'
// import { Section } from '../components/Section'

import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { Section } from '../components/Section'

import Biopark from '../assets/biopark.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'

export function ApartmentDetails() {
  const params = useParams()
  const [apartment, setApartment] = useState(null)
  const navigate = useNavigate()
  function handleNavigate() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/buildings/${params.id}`)
      console.log(response)
      setApartment(response.data)
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

      {
        apartment && (
          <Section>
        <div >
          <img src={apartment.image.url} alt="" className='rounded-lg' />
        </div>
        <strong className="text-4xl mb-10">Apartamento nº {apartment.apartmentNumber}</strong>
        <div className="flex gap-2">
          <span className='rounded-lg bg-slate-700 p-2 text-light-100'>{apartment.bedrooms} quartos</span>
          <span className='rounded-lg bg-slate-700 p-2 text-light-100'>{apartment.bathrooms} banheiro</span>
          <span className='rounded-lg bg-slate-700 p-2 text-light-100'>{apartment.parkingSpaces} vaga de estacionamento</span>
        </div>

        <div>Tamanho: {apartment.size}m²</div>
        <div>Mobiliado: <span className='text-red-500'>não</span></div>
        <div>Aceita pets: <span className='text-green-500'>sim</span></div>
        <div>Valor:  R$1000</div>
        <div>
          <span>Localizado: Bairro Biopark - Toledo/PR </span>
          
        </div>
        <span>Proprietário: Biopark</span>
        <div className='flex justify-start items-center gap-2'>
          <span>Predio: Boulevar - 195</span><Link className='p-1 text-green-500 rounded-lg text-light-100' to="/details/building">Ver mais detalhes ↗</Link>
        </div>
       
        <Button title='Fazer Proposta'/>
        
       
      </Section>
        )
      }
      
      <Footer />
    </Container>
  )
}
