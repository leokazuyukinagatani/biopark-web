import Logo from '../assets/logo.png'

export function Footer() {
  return (
    <div className="w-full flex items-center justify-center bg-dark-600 p-7">
      <div className="h-16 w-16">
        <img src={Logo} alt="" />
      </div>

      <span className="font-dmsans text-xs text-light-200">
        © 2023 - Todos os direitos reservados.
      </span>
    </div>
  )
}
