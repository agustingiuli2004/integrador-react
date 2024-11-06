import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context/Dataprovider'

export const ProductoItem = ({
    id ,
    title , 
    price,
    image,
    category,
  }) => {


    const value= useContext(DataContext);
    const addCarrito = value.addCarrito;


    console.log (image)
   
  
  
  
    return (
    
    
    <div className='producto'>
    <a href='#'> 
    <div className="producto__img">
        <img src={image} alt={title} />
    </div>
    </a>
    <div className='producto__footer'>
        <h1>{title}</h1>
        <p>{category} </p>
        <p className='Price'>${price}</p>
    </div>
    <div className='buttom'>
        <button className='btn' onClick={() => addCarrito(id)}>
            Añadir al carrito

        </button>
        <div>
            <a href='#' className='btn'>Vista</a>
        </div>
    </div>
    </div>
  )
}
