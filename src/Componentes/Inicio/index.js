import React from 'react'
import Portada from "../../images/inicio.jpg"
import {Link} from "react-router-dom"

export const Inicio = () => {
  return (
    <div className='inicio'>
         <Link to="/">
         <h1 className='title'>
          Inicio
         </h1>
         </Link>
         <Link to="/productos">
         <h1 className='title'>
            Productos
             </h1>
             </Link>
             
             <img src={Portada} alt='inicio'/>
             
             <Link to="/contacto">
         <h1 className='title'>
            Contacto
             </h1>
             </Link>

             <Link to="/alta">
         <h1 className='title'>
           Alta
             </h1>
             </Link>
    </div>
  )
}
