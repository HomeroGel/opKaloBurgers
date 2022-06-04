import React from 'react'
import '../styles/Testimonios.css'

function Testimonio(props) {
    return (
        <div className='contenedor-testimonios'>
            <img
                className='imagen-testimonios'
                src={require (`../images/hamburguesa-${props.imagen}.jpeg`)}
                alt='foto-hamburguesa-simple'
            />
            <div className='contenedor-texto-testimonio'>
                <div className='contenedor-nombre-ubicacion'>
                    <p className='nombre-testimonio'>{props.nombre}</p>
                    <p className='ubicacion-testimonio'>{props.ubicacion}</p>
                </div>
                <p className='opinion-testimonio'>"{props.opinion}"</p>
            </div>
        </div>
    );
}

export default Testimonio