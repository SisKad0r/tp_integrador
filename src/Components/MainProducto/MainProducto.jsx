import React, { useEffect, useState } from 'react'
import './mainProducto.css'
import { Link } from 'react-router-dom';
import { AiOutlineArrowDown, AiOutlineSearch } from "react-icons/ai";
import { useCustomContex } from '../../Context/ContextProvider';


const MainProducto = () => {
    const { stockProductos, } = useCustomContex()
    // Estado para controlar el filtro
    const [buscar, setBuscar] = useState('')
    const [actualStockProductos, setActualStockProductos] = useState(stockProductos)

    useEffect(() => {
        setActualStockProductos(stockProductos.filter(producto => producto.nombre.toLowerCase().includes(buscar.toLocaleLowerCase())))
    }, [buscar])

    // ==================================================
    // Estado para controlar la visibilidad del menú
    const [abrirMenuAnimal, setAbrirMenuAnimal] = useState(false);
    const [abrirMenuMarca, setAbrirMenuMarca] = useState(false);
    const [abrirMenuArticulo, setAbrirMenuArticulo] = useState(false);

    // Función para manejar el clic en el ícono del menú o enlace dentro del menú
    const cerrarMenuAnimal = () => {
        setAbrirMenuAnimal(!abrirMenuAnimal)
    };
    const cerrarMenuMarca = () => {
        setAbrirMenuMarca(!abrirMenuMarca)
    };
    const cerrarMenuArticulo = () => {
        setAbrirMenuArticulo(!abrirMenuArticulo)
    };

    return (
        <div>
            <div className="body">
                <div className="contenedorProducto">
                    <div className="contenedorProductoCard">
                        {actualStockProductos.map(producto => (
                            <div className="productoCard" key={producto.id}>
                                <div className="imgCard">
                                    <img src={producto.img} alt="" />
                                </div>
                                <div className="tituloCard">
                                    <h3>{producto.marca}</h3>
                                </div>
                                <hr />
                                <div className="descripcionCard">
                                    <span>Peso:<b>{producto.peso} Kg</b></span>
                                    <span>Precio:<b>${producto.precio}</b></span>
                                </div>
                                <hr />
                                <div className="buttonCard">
                                    <Link to={'/detalle/' + producto.id} className="ruta"><button>Comprar</button></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="contenedorFiltro">
                        <div className="inputSearch">
                            <i><AiOutlineSearch /></i>
                            <input type="tetx" placeholder='Buscar productos' value={buscar} onChange={(e) => setBuscar(e.target.value)} />
                            <button>Buscar</button>
                        </div>
                        <hr />
                        <div className="filtro">
                            <div className="filtroAnimal">
                                <h5 onClick={cerrarMenuAnimal}><i><AiOutlineArrowDown /></i> Filtra por animales</h5>
                                <div className={`checks ${abrirMenuAnimal ? "" : "ocultar"}`}>
                                    <label htmlFor=""><input type="checkbox" name="" id="" />Perro</label>
                                    <label htmlFor=""><input type="checkbox" name="" id="" />Gato</label>
                                    <label htmlFor=""><input type="checkbox" name="" id="" />Kitten</label>
                                </div>
                                <hr />
                            </div>
                            <div className="filtroMarca">
                                <h5 onClick={cerrarMenuMarca}><i><AiOutlineArrowDown /></i> Filtra por tu marca favorita</h5>
                                <div className={`checks ${abrirMenuMarca ? "" : "ocultar"}`}>
                                    <label htmlFor="marca-acana"><input type="checkbox" name="marca" id="marca-acana" />Acana</label>
                                    <label htmlFor="marca-iams"><input type="checkbox" name="marca" id="marca-iams" />Iams</label>
                                    <label htmlFor="marca-eukanuba"><input type="checkbox" name="marca" id="marca-eukanuba" />Eukanuba</label>
                                    <label htmlFor="marca-felix"><input type="checkbox" name="marca" id="marca-felix" />Felix</label>
                                    <label htmlFor="marca-hillsprescription"><input type="checkbox" name="marca" id="marca-hillsprescription" />Hill's Prescription Diet</label>
                                    <label htmlFor="marca-hillsscience"><input type="checkbox" name="marca" id="marca-hillsscience" />Hill's Science Diet</label>
                                    <label htmlFor="marca-nutro"><input type="checkbox" name="marca" id="marca-nutro" />Nutro</label>
                                    <label htmlFor="marca-purinaone"><input type="checkbox" name="marca" id="marca-purinaone" />Purina ONE</label>
                                    <label htmlFor="marca-purinaproplan"><input type="checkbox" name="marca" id="marca-purinaproplan" />Purina Pro Plan</label>
                                    <label htmlFor="marca-royalcanin"><input type="checkbox" name="marca" id="marca-royalcanin" />Royal Canin</label>
                                    <label htmlFor="marca-whiskas"><input type="checkbox" name="marca" id="marca-whiskas" />Whiskas</label>
                                </div>
                                <hr />
                            </div>
                            <div className="filtroArticulo">
                                <h5 onClick={cerrarMenuArticulo}><i><AiOutlineArrowDown /></i> Filtra por articulos</h5>
                                <div className={`checks ${abrirMenuArticulo ? "" : "ocultar"}`}>
                                    <label htmlFor=""><input type="checkbox" name="" id="" />Comida</label>
                                    <label htmlFor=""><input type="checkbox" name="" id="" />Juguete</label>
                                    <label htmlFor=""><input type="checkbox" name="" id="" />Veterinaria</label>
                                    <label htmlFor=""><input type="checkbox" name="" id="" />Higuiene</label>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MainProducto;