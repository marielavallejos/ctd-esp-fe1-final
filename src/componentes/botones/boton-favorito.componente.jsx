import './boton-favorito.css';
import { useAppDispatch } from '../../redux/hooks';
import { handleFavorito } from '../reducer/favoritos';
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
    const persFavorito = (id, favorite) => {
        dispatch(handleFavorito(id, favorite));
    }

    return <div className="boton-favorito" onClick={() => persFavorito(tarjetaId, false)}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;