import React from 'react'

function DetalleItem( { quantity, pictureUrl, title } ) {

    return (
          
      <div className="col-3 col-sm-4 col-md-4 pb-5">
          <img src={`http://66.97.46.222/images/${pictureUrl}`} className="img-fluid  animate__animated animate__fadeIn" alt="imagen"/>
          <p className="text-center pt-2 pb-0 m-0">{title }</p>
          <p className="text-center p-0 m-0">{ quantity } { quantity > 1 ? 'unidades' : 'unidad' } </p>
      </div>
    )
}

export default DetalleItem 
