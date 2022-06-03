import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'

function Testimonio(){
    return(
        <div className='contenedor-testimonios'>
            <img
              className='imagen-testimonios'
              src={required=('../images/hamburguesa-simple.png')}
              alt='foto-hamburguesa-simple'
            />
        </div>
    );
}

export default Testimonio