import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useAppSelector } from '../../redux/hooks';
import { Personaje } from '../../types/personaje.types';

interface TarjetaPersonajeProps {
    personaje: Personaje;}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 

    * @param {Objects} props propiedades que se heredan  
    * @param {Object} props.personaje Objeto personaje
    * @returns {JSX.Element} Card de cada personaje
*/

const TarjetaPersonaje = ({personaje}: TarjetaPersonajeProps): JSX.Element => {
    const listaFavoritos= useAppSelector((state) => state.personajes.favoritos);
    const favorite= listaFavoritos.find(favorito => favorito.id === personaje.id)
    return <div className="tarjeta-personaje">
        <img src={personaje.image} alt={personaje.name}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito esFavorito={favorite ? true : false} onClick={personaje} />
        </div>
    </div>
    }


export default TarjetaPersonaje;
