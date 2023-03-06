import { useState } from 'react'
import Logo from '../assets/logo.png'
// import Receipt from '../assets/receipt.svg'
// import { Input } from './Input'
// import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { TbReceipt } from 'react-icons/tb'
import { useAuth } from '../hooks/auth'
import { BiExit } from 'react-icons/bi'
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { signOut } = useAuth()
  return (
    <div className="w-full flex justify-between items-center lg:grid lg:grid-cols-3 bg-dark-700 pb-6 pt-14 px-7">
      <nav className="justify-self-start self-center">
        <section className="MOBILE-MENU  flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 group cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 transition duration-150 ease-out  hover:ease-in group-hover:bg-cyan-600 bg-light-100"></span>
            <span className="block h-0.5 w-8 transition duration-150 ease-out hover:ease-in group-hover:bg-cyan-600 bg-light-100"></span>
            <span className="block h-0.5 w-8 transition duration-150 ease-out  hover:ease-in group-hover:bg-cyan-600 bg-light-100"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className="absolute top-0 left-0 pb-6 pt-14 px-7 bg-dark-700 w-full group flex items-center justify-start text-light-100 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 transition duration-150 ease-out  hover:ease-in group-hover:text-cyan-600 text-light-100 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <span>Menu</span>
            </div>
            <ul className="flex flex-col items-start justify-start min-h-[250px] w-full px-7 mt-32 ">
              {/* <li className="w-full mb-9">
                <div className="w-full flex gap-4 bg-dark-900 focus-within:ring-2 focus-within:ring-cyan-600 text-light-100 px-3.5 py-4 border-0 rounded-lg">
                  <AiOutlineSearch size={20} />

                  <input
                    placeholder="Busque por pratos ou ingredientes"
                    type="text"
                    className="bg-dark-900 text-light-100 w-full outline-none"
                  />
                </div>
              </li> */}
              <li className="w-full border-b border-dark-1000 p-3">
                <Link to="/" onClick={signOut}>
                  Sair
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 text-light-400  lg:flex">
          
          <li>
            <Link to="/" onClick={signOut} className="text-white">
              <BiExit size={25}/>
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/" className="justify-self-center self-center h-24 w-24">
        <img src={Logo} alt="logo" />
      </Link>

      <Link
        className="justify-self-end self-center transition duration-150 ease-out text-white  hover:ease-in hover:text-cyan-600"
        to="/"
      >
        <TbReceipt size={25} color="inherit" />
      </Link>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: hsla(199, 100%, 3%, 1);
        
        color: hsla(240, 9%, 89%, 1);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
       
      }
    `}</style>
    </div>
  )
}
