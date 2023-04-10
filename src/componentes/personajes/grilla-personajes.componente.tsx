import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { Personaje } from '../../types/personaje.types';

interface grillaPersonajesProps {
    personajes: Personaje[];
}
/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * @param {Object} props Propiedades que se heredan
 * @param {Array<Object>} props.personajes Array de personajes
 * @returns {JSX.Element} Galería de personajes
 */

const GrillaPersonajes = ({personajes}:grillaPersonajesProps) => {
    return <div className="grilla-personajes">
        {
            personajes?.map((pers)  => (    
            <TarjetaPersonaje personaje={pers} key={pers.id} />))
        }
    </div>
}
export default GrillaPersonajes;