import React from 'react'

function DetalleItem( { quantity, pictureUrl } ) {

    return (
          
      <div className="col-3 col-sm-4 col-md-4 pb-5">
          <img src={`http://localhost:8000/images/${pictureUrl}`} className="img-fluid  animate__animated animate__fadeIn" alt="imagen"/>
          <p className="text-center pt-2">{ quantity } { quantity > 1 ? 'unidades' : 'unidad' } </p>
      </div>
    )
}

export default DetalleItem 
