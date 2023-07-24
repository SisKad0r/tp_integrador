import React from 'react'
import './mainCarrito.css'
import { useCustomContex } from '../../Context/ContextProvider'
import CardProductoCarrito from '../CardProductoCarrito/CardProductoCarrito';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MainCarrito = () => {
    const { carrito, getTotal } = useCustomContex()

    const Comprar = () => {
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada con Exito!',
            text: 'El local esta preparando tu pedido en instantes!',
            footer: 'Gracias por comprar en "Los 4 Hermanos"',
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    const Cupon = () => {
        Swal.fire({
            icon: 'error',
            title: 'Cupon invalido',
            text: 'Verifica que este bien escrito o no haya expirado!',
            footer: 'Gracias por comprar en "Los 4 Hermanos"',
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    return (
        <div>
            <div className="body">
                <div className="contenedorCarrito">
                    <div className="productoCardHeader">
                        <h3>Mi Carrito</h3>
                    </div>
                    <hr />
                    <div className="productoCardBody">
                        <div className="bloqueIzquierdoCarrito">
                            {carrito.map(producto => (
                                <CardProductoCarrito key={producto.id} producto={producto}/>
                            ))}
                        </div>
                        <div className="bloqueDerechoCarrito">
                            <div className="cupon">
                                <span>¿Tenes un Codigo de descuento?</span>
                                <div className="usarCupon">
                                    <input type="text" placeholder='XXX-XXX-XXX' />
                                    <button type='submit' onClick={Cupon}>Usar</button>
                                </div>
                            </div>
                            <hr />
                            <div className="descripcionCompra">
                                <div className="subTotal">
                                    <span>SubTotal</span>
                                    <span><b>${getTotal()}</b></span>
                                </div>
                                <div className="envio">
                                    <span>Envio</span>
                                    <span><b>Gratis</b></span>
                                </div>
                                <div className="total">
                                    <span>Total</span>
                                    <span><b>${getTotal()}</b></span>
                                </div>
                            </div>
                            <hr />
                            <div className="botonesCompra">
                                <button onClick={Comprar}>Finalizar Compra</button>
                                <Link to={'/producto'}><button>Seguir Comprando</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCarrito