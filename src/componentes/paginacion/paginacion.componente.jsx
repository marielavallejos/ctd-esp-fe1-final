import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { getPersonajes } from '../reducers/galSlice';
import './paginacion.css';


/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = ({anterior, proxima}) => {

    
    return <div className="paginacion">
        <button onClick={anterior} disabled={false} className={"primary"}>Anterior

        </button>

        <button onClick={proxima} disabled={false} className={"primary"}>Siguiente
        
        </button>
    </div>
}

export default Paginacion;