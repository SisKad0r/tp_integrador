import React from 'react'
import './mainContacto.css'
import Formulario from '../Formulario/Formulario'
import Maps from '../Maps/Maps'
import img1 from '../../Img/local.jpeg'
import img2 from '../../Img/local.jpeg'

const MainContacto = () => {
    return (
        <div>
            <div className="body">
                <div className="contenedorContacto">
                    <div className="bloque">
                        <div className="bloqueImg">
                            <img src={img1} alt="" />
                            <div className="texto">
                                <span>
                                    Bienvenido a <i>Pet Shop "Los 4 Hermanos"</i>, tu tienda de mascotas de confianza.
                                    Estamos aquí para brindarte el mejor cuidado y atención para tus queridas mascotas. Si tienes alguna pregunta, inquietud o simplemente deseas más información sobre nuestros productos y servicios, no dudes en contactarnos.
                                </span>
                            </div>
                        </div>
                        <div className="bloqueImg inv">
                            <img src={img2} alt="" />
                            <div className="texto">
                                <span>
                                    A lo largo de estos 10 años, hemos tenido el privilegio de conocer a miles de clientes y sus adorables mascotas, construyendo relaciones duraderas. Cada cola meneando y cada ronroneo nos ha recordado por qué amamos lo que hacemos. Nuestra comunidad ha crecido y evolucionado junto con nosotros, y nos enorgullece haber sido parte de la vida de tantas familias peludas.
                                    Gracias a la confianza y lealtad de nuestros clientes, hemos ido expandiendo nuestra gama de productos y servicios para ofrecer las últimas novedades en el cuidado de mascotas.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="maps">
                        <Maps></Maps>
                    </div>
                    <div className="formulario">
                        <Formulario />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContacto