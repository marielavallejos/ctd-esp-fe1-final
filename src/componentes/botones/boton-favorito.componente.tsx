import './boton-favorito.css';
import { useAppDispatch } from '../../redux/hooks';
import { marcarFavorito } from '../reducers/galSlice';
import { Personaje } from '../../types/personaje.types';

interface BotonFavProps {
    esFavorito: boolean;
    onClick: Personaje;
}
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * @param {Object} props Propiedades 
 * @param {boolean} props.esFavorito Propiedad que indica si el personaje es favorito
 * @param {Object} props.onClick Personaje que se pasa como parámetro a persoFavorito 
 * @returns {JSX.Element} Elemento botón marcar favoritos
 */

const BotonFavorito = ({esFavorito, onClick}: BotonFavProps) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"
    const dispatch = useAppDispatch();

    const persFavorito = (personaje: Personaje) => {
        dispatch(marcarFavorito(personaje));
    }

    return <div className="boton-favorito" onClick={() => persFavorito(onClick)}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;