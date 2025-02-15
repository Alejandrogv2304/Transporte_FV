import React, {useState} from 'react';
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#F5F5EA] lg:flex-row flex-col p-4 text-white shadow-lg w-full flex items-center justify-between">
      {/* Contenedor del logo y botón hamburguesa */}
      <div className="flex flex-col items-center w-full lg:w-auto ">
        {/* Logo */}
        <img src="/Transporte_Logo.png" alt="TransporteFV Logo" className="w-40 h-10 rounded-lg mix-blend-multiply" />
        
        {/* Botón de menú hamburguesa (Siempre debajo del logo en móviles) */}
        <button 
          className="lg:hidden text-black text-3xl p-2 mt-3 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {/* Menú de Navegación */}
      <ul className={`
        lg:flex lg:flex-row lg:space-x-10 
        flex flex-col items-center w-full lg:w-auto mt-4 lg:mt-0 
        ${isOpen ? "flex" : "hidden"} 
      `}>
        <li className='h-full'><a href="#" className=" text-black hover:text-white font-bold text-2xl px-4 py-5  hover:scale-120 hover:shadow-lg hover:rounded-sm transition-all duration-500 ease-out hover:bg-[#25282B]/80">Fernando</a></li>
        <li className='h-full'><a href="#" className=" text-black hover:text-white font-bold text-2xl px-4 py-5 hover:bg-[#25282B]/80 hover:rounded-sm hover:scale-120 hover:shadow-lg transition-all duration-500 ease-out">Experiencias</a></li>
        <li className='h-full'><a href="#" className=" text-black hover:text-white font-bold text-2xl px-4 py-5 hover:bg-[#25282B]/80 hover:rounded-sm hover:scale-120 hover:shadow-lg transition-all duration-500 ease-out">Carro</a></li>
        <li className='h-full'><a href="#" className=" text-black hover:text-white font-bold text-2xl px-4 py-5 hover:bg-[#25282B]/80 hover:rounded-sm hover:scale-120 hover:shadow-lg transition-all duration-500 ease-out lg:mr-16">Contacto</a></li>
      </ul>
    </nav>
  );
}
