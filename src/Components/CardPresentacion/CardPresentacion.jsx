import React from "react";
import "./cardPresentacion.css"
import { FaShippingFast, FaWallet, FaUserFriends } from "react-icons/fa";

function CardPresentacion() {
    return (
        <div className="cardContainer">
            <div className="cardPresentacion">
                <div className="cardTitulo">
                    <h2><i><FaShippingFast/></i> Envios</h2>
                </div>
                <hr />
                <div className="cardDescripcion">
                    <span>Por el momento solo realizamos envios cercanos (hasta 1km)</span>
                </div>
            </div>
            <div className="cardPresentacion">
                <div className="cardTitulo">
                    <h2><i><FaUserFriends/></i> ¡Nosotros!</h2>
                </div>
                <hr />
                <div className="cardDescripcion">
                    <span>Somos un pequeño negocio con mas de 10 años en la venta de productos para animales, trabajamos con multiples marcas conocidas en la largo del pais! Hacemos ventas al menor y por mayor!</span>
                </div>
            </div>
            <div className="cardPresentacion">
                <div className="cardTitulo">
                    <h2><i><FaWallet/></i> Formas de Pago</h2>
                </div>
                <hr />
                <div className="cardDescripcion">
                    <span>¡Aceptamos efectivo, tarjeta de credito/debito y mercado pago! Podes comprar Online o acercandote a la sucursal</span>
                </div>
            </div>
        </div>
    )
}

export default CardPresentacion;