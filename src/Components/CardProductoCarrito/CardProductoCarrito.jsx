import React from 'react'
import { BiXCircle } from "react-icons/bi";

const CardProductoCarrito = ({producto}) => {
    return (
        <div className="productoCardCarrito">
            <div className="imgCardCarrito">
                <img src={producto.img} alt="" />
            </div>
            <hr />
            <div className="tituloCardCarrito">
                <span><b>{producto.marca}</b></span>
            </div>
            <hr />
            <div className="precioCardCarrito">
                <span><b>${producto.precio}</b></span>
            </div>
            <hr />
            <div className="descripcionCardCarrito">
                <span>Unidades: <b>{producto.cantidad}</b></span>
            </div>
        </div>
    )
}

export default CardProductoCarrito