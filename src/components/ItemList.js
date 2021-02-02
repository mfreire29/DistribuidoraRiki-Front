import React from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'

function ItemList({ listado, loader }) {

    const { id } = useParams();

    return (
        <>
                {
                    id ?
                        <h3 className="text-center">{  parseInt(id) === 1 ? 'Mujer' : 'Hombre' }</h3>
                    :
                    <h3 className="text-center">Nuestros Productos</h3>
                }

                { loader ? 
                    <div className="text-center mt-5">
                        <div className="spinner-border" role="status">
                        </div>
                    </div> 
                :
                    ''
                }   
                
                {
                    
                    listado.map(a => {
                        return <Item key={a.id} id={a.id} title={a.title} description={a.description} price={a.price} stock={a.stock} pictureUrl={a.pictureUrl} />
                    })
                    
                }
                
        </>
    )
}

export default ItemList
