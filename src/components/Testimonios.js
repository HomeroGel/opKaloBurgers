import React from 'react'

function Testimonio() {
    return (
        <div className='contenedor-testimonios'>
            <img
                className='imagen-testimonios'
                src={require ('../images/hamburguesa-simple.jpeg')}
                alt='foto-hamburguesa-simple'
            />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>Lucas Rodriguez</p>
                <p className='ubicacion-testimonio'>San Andres de Giles</p>
                <p className='opinion-testimonio'>Probe las kaloburger y la verdad que quede fascinado, morder y sentir esa explosion de sabores genera una adrenalina en mi cuerpo imposible de explicar, solo los que la prueban saben de lo que hablo. 10 de 10! a galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes</p>
            </div>
        </div>
    );
}

export default Testimonio