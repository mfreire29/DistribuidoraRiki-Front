import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Slider from 'react-slick';
import clienteAxios from './AxiosConfig';
import { NavLink, useLocation } from "react-router-dom";

function Header() {

    const [sliders, setSliders] = useState([])

    let url = useLocation();
    const [location, setLocation] = useState("");
  
    useEffect(() => {
      setLocation(url.pathname);
    }, [url]);

    const settings = {
        className: "center",
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      autoplay: true,
      dots: true,
      arrows: false
    };

    useEffect(() => {

        const getSliders = async () => {
            //console.log("empieza el getmepresa");
            await clienteAxios
                .get(`/sliders/`)
                .then((res) => {
                    const data = res.data;
                    setSliders(data);
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        getSliders();

    }, [])

    return (
        <>
            
            <header>
                <Navbar />
                {location.indexOf("/cart") !== -1 ||
      location.indexOf("/checkout") !== -1 ||
      location.indexOf("/item") !== -1 ||
      location.indexOf("/pedido") !== -1 ? (
        ""
      ) : 
                <Slider {...settings}>
                    {
                        sliders.map(a => {
                            return <div>
                                        {
                                            a.link === null ?
                                            <img className="img-fluid" src={`http://localhost:8000/images/slides/${a.image}`} />
                                            :
                                            <a href={a.link} >
                                                <img className="img-fluid" src={`http://localhost:8000/images/slides/${a.image}`} />
                                            </a>
                                        }
                                    </div>
                        })
                    }                    
                </Slider>
}
            </header>
        
        </>
    )
}

export default Header
