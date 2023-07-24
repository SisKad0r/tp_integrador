import React from "react"
import { HomePage, ContactoPage, ProductoPage, DetallePage, CarritoPage } from "./Page"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/producto" element={<ProductoPage/>}/>
        <Route path='/detalle/:id' element={<DetallePage/>}/>
        <Route path="/contacto" element={<ContactoPage/>}/>
        <Route path="/carrito" element={<CarritoPage/>}/>
      </Routes>
    </>
  )
  
}

export default App
