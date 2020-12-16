import React from 'react'
import Layout from '../components/layout/Layout';
import DetallesProducto from '../components/layout/DetallesProducto';
import useProductos from '../hooks/useProductos';

const Home = () => {

    const {  productos } = useProductos('creado');


    return ( 
        <div>
            <div className="btnToTop">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-bar-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
            <Layout>
                <div className = "listado-productos">
                    <div className = "contenedor">
                        <ul className = "bg-white"> {
                            productos.map(producto => ( 
                                <DetallesProducto key = { producto.id }
                                    producto = { producto }
                                />
                            ))
                        } 
                        </ul>
                    </div> 
                </div> 
            </Layout > 
        </div>
    )
}

export default Home