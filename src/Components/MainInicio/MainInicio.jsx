import React from 'react'
import Carousel from "../Carousel/Carousel"
import CardPresentacion from '../CardPresentacion/CardPresentacion'
import CardProducto from '../CardProducto/CardProducto'
import "./mainInicio.css"

const Main = () => {
    return (
        <div className="body">
            <div className="carouselContainer">
                <Carousel></Carousel>
            </div>
            <div className="cardContainer">
                <CardPresentacion></CardPresentacion>
            </div>
            <div className="productoContainer">
                <div className="cardHeader">
                    <hr />
                    <h2>¡Algunas marcas con las que trabajamos!</h2>
                    <hr />
                </div>
                <CardProducto></CardProducto>
            </div>
        </div>
    )
}

export default Main