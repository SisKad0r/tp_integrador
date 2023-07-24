import React, {createContext,useContext, useState} from 'react'
import { marcas, stockProductos } from '../Data'

const Context = createContext()

const ContextProvider = ({children}) => {
    const data = {
        marcas,
        stockProductos,
    }

    const getProductoById = (id) => {
        return stockProductos.find(producto => producto.id == id)
    }
    const getProductoCarritoById = (id) => {
        return carrito.find(producto => producto.id == id)
    }


    const [carrito, setCarrito] = useState([])

    const enElCarrito = (id) => carrito.some(producto => producto.id == id)


    const agregarProducto = (id, cantidad) => {
        if(enElCarrito(id)){
            setCarrito(carrito.map(producto => {
                if(producto.id == id){
                    producto.cantidad = cantidad
                }
                return producto
            }))
        }else {
            setCarrito([...carrito, {...getProductoById(id), cantidad: cantidad}])
        }
    }

    const getTotal = () => {
        let total = 0
        carrito.forEach(producto => total += producto.precio * producto.cantidad)
        return total
    }
    return (
        <Context.Provider value={
            {marcas,
            stockProductos,
            carrito,
            getProductoById,
            getProductoCarritoById,
            getTotal,
            agregarProducto,
            enElCarrito,
        }}>
            {children}
        </Context.Provider>
    )
}

export const useCustomContex = () => useContext(Context)
export default ContextProvider