import React, { useState } from 'react'
import './contador.css'
import 'animate.css';
import { useCustomContex } from '../../Context/ContextProvider'
import Swal from 'sweetalert2'

const Contador = ({ valorInicial, stock, id }) => {
    const { agregarProducto } = useCustomContex()
    const [cantidad, setCantidad] = useState(valorInicial)
    const confirmar = () => {
        agregarProducto(id, cantidad)
        Swal.fire({
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            icon: 'success',
            title: 'Se añadio al carrito',
            text: 'Podes dirigirte al Carrito para finalizar la compra o segui sumando producto en nuestro catalogo!',
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    return (
        <>
            <div className="contenedorContador">
                <div className='contador'>
                    <button onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : cantidad)}>-</button>
                    <span><b>{cantidad}</b></span>
                    <button onClick={() => setCantidad(cantidad == stock ? cantidad : cantidad + 1)}>+</button>
                </div>
                <div className="contadorBoton">
                    <button onClick={confirmar}>confirmar</button>
                </div>
            </div>
        </>
    )
}

export default Contador