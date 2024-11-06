import React from 'react'
import { Routes , Route, } from "react-router-dom"
import { Inicio } from './Inicio'
import { ProductoLista } from './Productos'
import { Mailer } from './Formulario'
import { Alta } from './Alta'


export const Paginas = () => {
  return (
   <section>
    <Routes>
        <Route path="/"  element={<Inicio/>} />
        <Route path="/productos" element={<ProductoLista/>}/>
        <Route path="/contacto" element={<Mailer/>}/>
         <Route path="/alta" element={<Alta/>}/>
    </Routes>

   </section>
  )
}
