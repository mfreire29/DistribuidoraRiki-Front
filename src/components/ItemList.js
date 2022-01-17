import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'

function ItemList({ listado, loader }) {

    const { id } = useParams();

    return (
        <>
                { loader ? 
                    <div className="text-center mt-5">
                        <div className="spinner-border" role="status">
                        </div>
                    </div> 
                :
                    ''
                }   
                
                {
                    listado.length > 0 ?
                        listado.map(a => {
                            return <Item key={a.id} id={a.id} title={a.name} description={a.description} price={a.sale} off={a.off} pictureUrl={a.image} />
                        })
                    :
                        <p className='text-center'>No hay productos en esta categoría.</p>
                }
                
        </>
    )
}

export default ItemList
