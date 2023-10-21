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

      console.log(productosFiltrados)

  return (
    <>

    <div className='filtros'>
        <button className='botones' onClick={()=> verificarTiopo('')}>Todos</button>
        {
            tipos.map((tipo, index)=> 
            <button className='botones' key={index} onClick={()=>verificarTiopo(tipo)}>{tipo}</button>
            )
        }

    </div>
     

    <div className='productos-tienda'>
      {/* Botones para filtrar por tipo */}
      

       

      {/* Productos filtrados por tipo */}
      {productos.map((producto, index) => {
        // Aplicar filtro por tipo
        if (tipoSeleccionado === '' || producto.Tipo === tipoSeleccionado) {
          return (
            <div className='prodcuto-tienda' key={index}>
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
    </>
  );
}

export default CompProdcuto;
