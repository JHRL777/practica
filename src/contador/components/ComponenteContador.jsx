import { useState } from 'react'
import '../stylesContador.css'
function ComponenteContador(){

    const [contar, setContar] = useState(0);

      
    const alerta = () => {
      let array = []
      
      for(let i= 0 ; i <= contar; i++){
        

        array.push(i)
        
      }
      return array.join(',')
    }
      let array2 = alerta().split(',')
      

    return (
      <div className='principal-contenedor'>
        <div className='accion' onClick={() => setContar(contar +1)}>
            Click para contar {contar}
            
            
        </div>
        <div className='dinamica'>
          { 
                array2.map((arr)=> {
                    if (arr !=='0' ){ 
                      return(
                        <div key={arr} className='caja-dinamica'>caja numero {arr}</div>
                        )
                    }
                    return null
                    }
                    )}
                    
                  
        </div>
        </div>
    )



}

export default ComponenteContador