import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { Firestore } from '../firebaseConfig'


function ItemDetailContainer() {

    const [producto, setProducto] = useState([])
    const [loader, setLoader] = useState(true)
    const { id } = useParams();

    useEffect(() => {

        const db = Firestore
        const collection = db.collection("items").doc(id)
        const query = collection.get()
      
        query
        .then((res) =>{
          //console.log(res.data())

          const producto_final = {
            id : res.id,
            ...res.data()
          }
        
          setProducto(producto_final)
          setLoader(false)
        })
        .catch(() => {
          console.log("falló")
        })
      }, [id])
    
    /* useEffect(()=>{


        let dato = datproducto.filter(data => datproducto.id === id)
        setProducto(dato)
        setloader(false)
                
    }, [id, data]) */

    const style = {
        margin: "0.5em",
        paddingLeft: 0,
        listStyle: "none",
        color: "#a9a9a9",
      };
    
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    { loader ? 
                            <div className="text-center mt-5">
                                <div className="spinner-border" role="status">
                                </div>
                            </div> 
                        :
                            <ItemDetail key={producto.id} id={producto.id} title={producto.title} description={producto.description} price={producto.price} stock={producto.stock} pictureUrl={producto.pictureUrl}/>
                    }
                                       
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer
