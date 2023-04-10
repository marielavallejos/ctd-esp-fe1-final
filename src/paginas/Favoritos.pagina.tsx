import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { borrarFavorito } from "../componentes/reducers/galSlice";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Vaciar favoritos: Resetea la página de favoritos al hacer click en el botón
 * 
 * @returns {JSX.Element} La pagina de favoritos *
 */
const PaginaFavoritos = () => {
    const favoritos = useAppSelector(state => state.personajes.favoritos)
    const dispatch = useAppDispatch();

    const vaciarFavoritos = ()  => {
        dispatch(borrarFavorito());
    }

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={() => vaciarFavoritos()}>Reset favoritos</button>
        </div>
        <GrillaPersonajes personajes = {favoritos}/>
    </div>
}

export default PaginaFavoritos