// import Minus from '../assets/minus.svg'
// import Plus from '../assets/plus.svg'
// import Heart from '../assets/heart.svg'
// import HeartFull from '../assets/heart-full.svg'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Biopark from '../assets/biopark.jpg'

export function CardBuildingAdmin({ data, ...rest }) {
  return (
    // <article
    //   className="bg-dark-200 border border-dark-300 rounded-lg w-[32rem] flex flex-col items-center justify-between p-6 gap-3 mb-10 relative m-auto"
    //   data={data}
    //   {...rest}
    // >
    //   {/* <button className="absolute top-4 right-4">
    //     <img
    //       src={data.favorite ? HeartFull : Heart}
    //       alt=""
    //       className="w-6 h-6 "
    //     />
    //   </button>

    //   <div className="w-[clamp(4rem,6rem+5vw,11rem)]">
    //     <img src={data.src} alt="" />
    //   </div>

    //   <Link to={`/details/${data.id}`}>
    //     <strong className="font-poppins font-medium text-sm">
    //       {' '}
    //       {data.title + ' >'}
    //     </strong>
    //   </Link> */}
    //   <img src={Biopark} alt="" />
    //   <span className="font-roboto text-base">dasda</span>

    //   <Button title="Fazer proposta" />
    // </article>
    <div
      data={data}
      {...rest}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto mb-16"
    >
      <div>
        <img className="rounded-t-lg" src={data.image ? data.image.url : Biopark  } alt="" />
      </div>
      <div className="p-5">
        <Link to={`details/building/${data.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.description}
        </p>

        <Link
          to={`/edit/building/${data.id}`}
          className="w-full bg-tomato-100 py-3 px-8 border-0 rounded-lg text-light-100 hover:bg-tomato-200 font-poppins font-medium text-sm flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:bg-tomato-400"
        >
          Editar
        </Link>
      </div>
    </div>
  )
}
