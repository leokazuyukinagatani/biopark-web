import { FiPlus, FiX } from 'react-icons/fi'
import clsx from 'clsx'

export function AmenityItem({ entree=false, value, setValue, onClick, ...rest }) {
  return (
    <div
      className={clsx(
        'flex justify-between w-auto text-light-100 px-4 py-3 rounded-lg',
        {
          'bg-dark-800 border-2 border-light-500 border-dashed': entree,
        },
        {
          ' bg-light-600': entree == false,
        },
      )}
    >
      <input
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder={entree ? 'Adicionar' : null }
        readOnly={!entree}
        className="bg-transparent outline-none w-full max-w-fit"
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={entree ? 'button-add' : 'button-delete'}
      >
        {entree ? <FiPlus /> : <FiX />}
      </button>
    </div>
  )
}