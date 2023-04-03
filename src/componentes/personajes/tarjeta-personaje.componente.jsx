import BotonFavorito from '../botones/boton-favorito.componente';
import { getPersonajes } from '../reducer/galSlice';
import './tarjeta-personaje.css';
import { useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({personaje}) => {
    const favoritos= useAppSelector((state) => state.favoritos);


    return <div className="tarjeta-personaje">
        <img src={personaje.image} alt={personaje.name}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito esFavorito={favoritos.favoritos.some(favorito => 
                favorito.id === personaje.id) ? true : false} tarjetaId={personaje.id} />
        </div>
    </div>
}

export default TarjetaPersonaje;