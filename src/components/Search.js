import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import clienteAxios from './AxiosConfig'
import ItemListContainer from './ItemListContainer'


function Search({ loader }) {

    let { s }= useParams()

    const [ listado, setListado ] = useState([])

    useEffect(() => {

        const doSearch = async () => {

            await clienteAxios
                .get(`/search?s=${s}`)
                .then((res) => {
                  const data = res.data;
                  console.log(data)
                  setListado(data)
                })
                .catch((err) => {
                  console.log(err);
                });
        }
        
        doSearch();
          
    }, [s])

    return (
        <>
            <ItemListContainer greeting={`Resultados para ${s}`} data={ listado } loader={ loader }/>
        </>
    )
}

export default Search
