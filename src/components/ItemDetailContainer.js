import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import clienteAxios from './AxiosConfig'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [producto, setProducto] = useState([])
    const [loader, setLoader] = useState(true)
    const { id } = useParams();

    useEffect(() => {

        const getProduct = async () => {
          //console.log("empieza el getmepresa");
          await clienteAxios
            .get(`/products/${id}`)
            .then((res) => {
              const data = res.data;
              setProducto(data);
              setLoader(false)
              console.log(data)
            })
            .catch((err) => {
              console.log(err);
            });
        };
    
        getProduct();

      }, [id])
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    { loader ? 
                            <div className="text-center mt-5">
                                <div className="spinner-border" role="status">
                                </div>
                            </div> 
                        :
                            <ItemDetail key={producto.id} id={producto.id} title={producto.name} description={producto.description} price={producto.sale} off={producto.off} pictureUrl={producto.image}/>
                    }
                                       
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer
