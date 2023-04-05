import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useAppSelector } from '../../redux/hooks';
import { useLocation } from 'react-router-dom';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({personaje}) => {
    const listaFavoritos= useAppSelector((state) => state.favoritos);
    const favorite= listaFavoritos.favoritos.some(favorito =>favorito.id === personaje.id)
    const url = useLocation();
    const urlFavoritos=url.pathname.includes('/favoritos');


    return <>
    {(!urlFavoritos || (urlFavoritos && favorite)) && (
        <div className="tarjeta-personaje">
        <img src={personaje.image} alt={personaje.name}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito esFavorito={favorite} tarjetaId={personaje.id} />
        </div>
    </div>
    )}
    </>
}

export default TarjetaPersonaje;
