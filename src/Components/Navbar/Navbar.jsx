import React, { useState } from "react";
import img from "../../Img/logo.png";
import {
    AiOutlineShopping,
    AiOutlineShoppingCart,
    AiOutlineTeam,
    AiOutlineHome,
    AiOutlineMenu,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
    // Estado para controlar la visibilidad del menú
    const [abrirMenu, setAbrirMenu] = useState(false);

    // Función para manejar el clic en el ícono del menú o enlace dentro del menú
    const cerrarMenu = () => {
        setAbrirMenu(!abrirMenu)
    };

    return (
        <nav>
            {/* contenedor del logo */}
            <NavLink to={'/'} className='ruta'>
                <div className="Logo-contenedor">
                    <div className="imgLogo">
                        <img src={img} alt="" />
                    </div>
                    <div className="tituloLogo">
                        <h2>"Los 4 hermanos"</h2>
                    </div>
                </div>
            </NavLink>

            {/* Ícono del menú hamburguesa */}
            <div className="menu" onClick={cerrarMenu}>
                <div className="icon">
                    <i><AiOutlineMenu /></i>
                </div>
            </div>

            {/* Contenedor de enlaces */}
            <div className={`linksIcon ${abrirMenu ? "" : "ocultar"}`}>
                <hr />
                <div className="icon">
                    <NavLink to={"/"} className="ruta" onClick={cerrarMenu}>
                        <i><AiOutlineHome /> <span>Inicio</span></i>{" "}
                    </NavLink>
                </div>
                <div className="icon">
                    <NavLink to={"/contacto"} className="ruta" onClick={cerrarMenu}>
                        <i><AiOutlineTeam /> <span>Contacto</span></i>{" "}
                    </NavLink>
                </div>
                <div className="icon">
                    <NavLink to={"/producto"} className="ruta" onClick={cerrarMenu}>
                        <i><AiOutlineShopping /> <span>Productos</span></i>{" "}
                    </NavLink>
                </div>
                <div className="icon">
                    <NavLink to={"/carrito"} className="ruta" onClick={cerrarMenu}>
                        <i><AiOutlineShoppingCart /> <span>Carrito</span></i>{" "}
                    </NavLink>
                </div>
                <hr />
            </div>
        </nav>
    );
};

export default Navbar;
