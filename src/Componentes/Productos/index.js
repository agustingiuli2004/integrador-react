import React, {useContext}  from 'react'
import { DataContext } from '../../Context/Dataprovider'
import { ProductoItem } from './ProductoItem'

export const ProductoLista = () => {

    const value = useContext(DataContext)
    const [productos] = value.productos


    console.log (productos)



  return (
    <>
    <h1 className="title">PRODUCTOS</h1>
    <div className="Productos">
    
    {
        productos.map((producto) =>(
           <ProductoItem
            key={producto.key}
           id={producto.id}
           title={producto.title}
           price={producto.price}
           image={producto.image}
           category={producto.category}
           cantidad={producto.cantidad}
           /> 
        ))}
    </div>
    </>
  );
}
