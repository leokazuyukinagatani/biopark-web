import { Link } from 'react-router-dom'
import Biopark from '../assets/biopark.jpg'

export function CardBuilding({ data, ...rest }) {
  return (
 
    <div
      data={data}
      {...rest}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto mb-16"
    >
      <div>
        <img className="rounded-t-lg" src={data.image ? data.image.url : Biopark} alt="" />
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
      
      </div>
    </div>
  )
}
