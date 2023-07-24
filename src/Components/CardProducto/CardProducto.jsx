import React from 'react'
import "./cardproducto.css"
import { useCustomContex } from '../../Context/ContextProvider';

const CardProducto = () => {
    const { marcas } = useCustomContex()

    return (
        <div className='containerCardProducto'>
            <div className="cardBody">
                {
                    marcas.map(marca => (
                        <div className="imgCard" key={marca.id}>
                            <img src={marca.img} alt={marca.marca} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CardProducto