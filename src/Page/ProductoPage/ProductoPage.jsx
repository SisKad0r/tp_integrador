import React from 'react'
import './producto.css'
import { Footer, MainProducto, Navbar } from '../../Components'

const ProductoPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MainProducto></MainProducto>
            <Footer></Footer>
        </div>
    )
}

export default ProductoPage