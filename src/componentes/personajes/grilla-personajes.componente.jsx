import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useState, useEffect } from 'react';
import { getPersonajes } from '../reducer/galSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *  
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {

    const [page, setPage] = useState(1)
    const dispatch = useAppDispatch()
    const personajes = useAppSelector((state) => state.personajes)

    useEffect(() => {
        dispatch(getPersonajes(page))
    }, [page]    )

    // console.log(personajes)

    return <div className="grilla-personajes">
        {
            personajes?.personaje?.map((pers) =>
            <TarjetaPersonaje key={pers.id} personaje={pers} />
            )
        }


    </div>
}

export default GrillaPersonajes;