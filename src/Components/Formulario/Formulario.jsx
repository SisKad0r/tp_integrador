import React, { useState } from 'react';
import './formulario.css';
import Swal from 'sweetalert2';

const Formulario = () => {
    const [userData, setUserData] = useState({});

    const [formUserData, setFormUserData] = useState({
        fullname: "",
        email: "",
        asunto: "",
        mensaje: ""
    });

    const handleRegisterUser = (evento) => {
        evento.preventDefault();
        setUserData(formUserData);
        setFormUserData({
            fullname: "",
            email: "",
            asunto: "",
            mensaje: ""
        });
    };

    const handleChangeRegisterUser = (evento) => {
        setFormUserData({ ...formUserData, [evento.target.name]: evento.target.value });
    };

    // const mensaje = () => {
    //     Swal.fire({
    //         icon: 'info',
    //         title: 'Mensaje enviado con exito',
    //         text: 'Hemos recivido tu mensaje! Gracias por escribirnos, un empleado te contestara lo mas pronto posible',
    //         footer: 'Gracias por comprar en "Los 4 Hermanos"',
    //         hideClass: {
    //             popup: 'animate__animated animate__fadeOutUp'
    //         }
    //     })
    // }

    return (
        <div className='contenedor-principal'>
            <div action="" className='contenedor-formulario'>
                <h2>¡Déjanos tu opinión!</h2>
                <form className='contenedor-formulario' onSubmit={handleRegisterUser}>
                    <label htmlFor="fullname">Nombre Completo</label>
                    <input className='input-text' type='text' required name='fullname' id='fullname' onChange={handleChangeRegisterUser} value={formUserData.fullname} />

                    <label htmlFor="email">Email</label>
                    <input className='input-text' type="email" required name='email' id='email' onChange={handleChangeRegisterUser} value={formUserData.email} />

                    <label htmlFor="asunto">Asunto</label>
                    <input className='input-text' type="text" required name='asunto' id='asunto' onChange={handleChangeRegisterUser} value={formUserData.asunto} />

                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea className='text-textarea' required name='mensaje' id='mensaje' onChange={handleChangeRegisterUser} value={formUserData.mensaje}></textarea>

                    <div className='contenedor-boton'>
                        <button className='boton' type='submit'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
