import { Link } from 'react-router-dom'
import Biopark from '../assets/biopark.jpg'

export function CardBuildingAdmin({ data, ...rest }) {
  return (
    <div
      data={data}
      {...rest}
      className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto mb-16"
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
