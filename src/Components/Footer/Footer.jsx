import React from 'react'
import "./footer.css"
import img from "../../Img/logo.png"
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="redes">
                <NavLink to={'/'} className={'ruta'}><img src={img} alt="" /></NavLink>
                <hr />
                <div className=''>
                    <div className="redes-icon">
                        <i><AiOutlineWhatsApp/></i><span>11-59517667</span>
                    </div>
                    <div className="redes-icon">
                        <i><AiOutlineInstagram/></i><span>pet4hermanos</span>
                    </div>
                    <div className="redes-icon">
                        <i><AiOutlineFacebook/></i><span>pet4Hermanos</span>
                    </div>
                    <div className="redes-copy">
                        <span>Copyright &copy; 2023</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer