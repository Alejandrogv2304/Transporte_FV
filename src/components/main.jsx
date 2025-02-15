import React from 'react'
import { FiCheck } from 'react-icons/fi'

export default function Inicio() {
  return (
    <div className='bg-[#D3F26A] w-full h-full grid grid-cols-2'>
      <div className='items-center  flex flex-col'>
       <h1 className='font-bold text-4xl mt-8 mb-4 '>Transporte FV - Calidad en cada viaje</h1>
       <p className='text-lg ml-8 text-justify mt-4 mb-4'>
       En <span className='font-bold'> Transporte FV</span>, ofrecemos un servicio de transporte seguro, puntual y eficiente para satisfacer todas tus necesidades de movilidad. Nos especializamos en el traslado de personas y mercancías, garantizando comodidad y tranquilidad en cada trayecto.
       </p>
       <ul className=' mt-4 mb-4 justify-center text-lg space-y-3'>
       <li className="flex items-center">
      <FiCheck className="text-green-800 mr-2" />
      <span>
        <span className="font-bold">Puntualidad y seguridad:</span> Conductores capacitados, respetuosos y cordiales.
      </span>
    </li>
    <li className="flex items-center">
      <FiCheck className="text-green-800 mr-2" />
      <span>
        <span className="font-bold">Cobertura ampliada:</span> Operamos especialmente en el departamento de Santander.
      </span>
    </li>
    <li className="flex items-center">
      <FiCheck className="text-green-800 mr-2" />
      <span>
        <span className="font-bold">Comodidad garantizada:</span> Vehículos modernos y bien equipados para su comodidad.
      </span>
    </li>
       </ul>
       <h3 className='text-left ml-16 w-full mb-8 text-lg'>Tu viaje, nuestra prioridad. Contáctanos y experimenta un servicio de calidad.</h3>
      </div>
      <div>
        <h1>Carrusel de fotos</h1>
      </div>
    </div>
  )
}
