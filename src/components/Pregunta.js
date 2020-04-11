import React, {Fragment, useState} from 'react';
import Error from './Error';

const Pregunta = () => {

    const[cantidad, guardarCantidad] = useState(0);
    const[error, guardarError] = useState(false);

    const definirPresupuesto = e =>{
        guardarCantidad(parseInt( e.target.value,10));
    }

    // submit parad eifnir el presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN( cantidad )){
            guardarError(true);
            return;
        }

        // si pasa validacion
        guardarError(false);
    }
 

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error mensaje="El preuspuesto es Incorrecto"/> : null}
            <form
            onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;