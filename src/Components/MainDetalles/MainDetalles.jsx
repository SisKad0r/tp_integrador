import React, { useEffect, useState } from 'react'
import './MainDetalles.css'
import { useCustomContex } from '../../Context/ContextProvider'
import { Link, useParams } from 'react-router-dom'
import Contador from '../Contador/Contador'

const MainDetalles = () => {
    const { id } = useParams()
    const { getProductoById, getProductoCarritoById, agregarProducto, enElCarrito, carrito } = useCustomContex()
    
    const [productoDetalle, setProductoDetalle] = useState(enElCarrito(id) ? getProductoCarritoById(id) : getProductoById(id))

    return (
        <div>
            <div className="body">
                <div className="contenedorrDetalle">
                    <div className="productoCardDetalle" key={productoDetalle.id}>
                        <div className="bloqueIzquierdoDetalle">
                            <div className="imgCardDetalle">
                                <img src={productoDetalle.img} alt="" />
                            </div>
                        </div>
                        <div className="bloqueDerechoDetalle">
                            <div className="tituloCardDetalle">
                                <h3>{productoDetalle.marca}</h3>
                            </div>
                            <hr />
                            <div className="descripcionCardDetalle">
                                <span>Descripcion: <b>{productoDetalle.descripcion}</b></span>
                            </div>
                            <hr />
                            <div className="descripcionCardDetalle">
                                <span>Marca: <b>{productoDetalle.marca}</b></span>
                                <span>Peso: <b>{productoDetalle.peso} Kg</b></span>
                                <span>Precio: <b>${productoDetalle.precio}</b></span>
                                <span>Categoria: <b>{productoDetalle.categoria}</b></span>
                            </div>
                            <hr />
                            <div className="buttonCardDetalle">
                                {enElCarrito(id)
                                ?
                                <Contador valorInicial={productoDetalle.cantidad} stock={productoDetalle.stock} id={productoDetalle.id} />
                                :
                                <Contador valorInicial={1} stock={productoDetalle.stock} id={productoDetalle.id} />}
                                <Link to={'/producto'} className='ruta'><span>Volver atras</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDetalles