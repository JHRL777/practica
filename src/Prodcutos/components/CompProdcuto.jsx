import React, { useState } from 'react';
import { productos } from '../data/datosProductos';
import '../stylesTienda.css';

function CompProdcuto() {

    const [tipoSeleccionado, settipoSeleccionado] = useState('')

    const tipos = [...new Set(productos.map((producto) => producto.Tipo))]

    

    function verificarTiopo(tipo){
        settipoSeleccionado(tipo)
    }

    const productosFiltrados = productos.filter(
        (producto) => tipoSeleccionado === '' || producto.Tipo === tipoSeleccionado
      );

      console.log(tipoSeleccionado)

      const botonActivo = 'botones bg-lime-600 focus:bg-lime-600';

  return (
    <div className='flex flex-col justify-center items-center text-white'>

<div className='filtros'>
        <button className={tipoSeleccionado === '' ? botonActivo : 'botones'} onClick={()=> verificarTiopo('')}>Todos</button>
        {
            tipos.map((tipo, index)=> 
            <button className={tipoSeleccionado === tipo ? botonActivo : 'botones'} key={index} onClick={()=>verificarTiopo(tipo)}>{tipo}</button>
            )
        }

    </div>
     

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
     
      {productos.map((producto, index) => {
       
        if (tipoSeleccionado === '' || producto.Tipo === tipoSeleccionado) {
          return (
            <div className='prodcuto-tienda max-w-xs' key={index}>
              <img className='imgTienda' src={producto.img} />
              <h2 className='tituloProdcuto'>{producto.nombre}</h2>
              <p>Precio: ${producto.precio}</p>
              <p>Tipo: {producto.Tipo}</p>
              <p>Edad: {producto.edad}</p>
              <p><a
              href={`https://api.whatsapp.com/send?phone=111111111`}
              target='_blank'
              rel='noopener noreferrer'
            >
              Contactar por WhatsApp
            </a></p>
            </div>
          );
        }
        return null; // No mostrar productos que no coinciden con el tipo seleccionado
      })}
    </div>
    </div>
  );
}

export default CompProdcuto;
