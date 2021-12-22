import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import clienteAxios from "./AxiosConfig";

function ItemListContainer({ greeting, data, loader }) {
  
  const style = {
    margin: "0.5em",
    paddingLeft: 0,
    listStyle: "none",
    color: "#a9a9a9",
  };

  const { id } = useParams()
  const [listado, setListado] = useState([])
  const [category, setCategory ] = useState('')

  useEffect(() => {

    if(id) {
      const getProducts = async () => {
        //console.log("empieza el getmepresa");
        await clienteAxios
          .get(`/category/${id}`)
          .then((res) => {
            const data = res.data;
            setListado(data.products);
            setCategory(data.category[0].name);
            console.log(data.category[0].name)
          })
          .catch((err) => {
            console.log(err);
          });
      };
  
      getProducts();
    } else {
      setListado(data)
    }

  }, [data,id])

  return (
    <>
      <div className="container mb-5">
          <div className="row">
              <div className="col-12 mt-5 pb-3">
                <p className="titulo-pagina" style={style}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-right-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                  {
                    id ?
                      category
                    :
                      greeting
                  }
                </p>    
              </div>
              <ItemList listado={ listado } loader={ loader }/>
          </div>
      </div>
      
    </>
  );
}

export default ItemListContainer;
