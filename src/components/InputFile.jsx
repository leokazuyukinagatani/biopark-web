import { BiUpload } from 'react-icons/bi'

export function InputFile({label,...rest}) {
  return (
    <div className="w-full flex flex-col gap-2">
      {label}
      <label className="w-full flex gap-4 bg-dark-900 focus-within:ring-2 focus-within:ring-cyan-600 text-light-100 px-3.5 py-4 border-0 rounded-lg cursor-pointer">
        <BiUpload size={20} />
        <span>Selecione imagem</span>
        <input
          placeholder="Busque por pratos ou ingredientes"
          type="file"
          className="bg-dark-900 text-light-100 outline-none opacity-0 w-0"
          {...rest}
        />
      </label>
    </div>
  )
}