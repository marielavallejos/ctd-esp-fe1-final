import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { getPersonajes } from '../reducer/galSlice';
import './paginacion.css';


/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {

    const[page, setPage] = useState(1);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPersonajes(page))
    }, [page])

    const handleNext = () => {
        setPage(page + 1);
    }

    const handlePrev = () => {
        setPage(page-1);
    }

    return <div className="paginacion">
        <button onClick={handlePrev} disabled={page >1 ? false: true } className={"primary"}>Anterior

        </button>

        <button onClick={handleNext} disabled={false} className={"primary"}>Siguiente
        
        </button>
    </div>
}

export default Paginacion;