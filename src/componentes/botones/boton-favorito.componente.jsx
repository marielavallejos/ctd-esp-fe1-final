import './boton-favorito.css';
import { useAppDispatch } from '../../redux/hooks';
import { marcarFavorito } from '../reducers/galSlice';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({esFavorito, onClick, tarjetaId}) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"
    const dispatch = useAppDispatch();

    const persFavorito = (personaje) => {
        dispatch(marcarFavorito(personaje));
    }

    return <div className="boton-favorito" onClick={() => persFavorito(onClick)}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;