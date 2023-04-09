import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *  
 * @returns un JSX element 
 */
const GrillaPersonajes = ({personajes}) => {
    return <div className="grilla-personajes">
        {
            personajes?.map((pers)  => (    
            <TarjetaPersonaje personaje={pers} key={pers.id} />))
        }
    </div>
}
export default GrillaPersonajes;