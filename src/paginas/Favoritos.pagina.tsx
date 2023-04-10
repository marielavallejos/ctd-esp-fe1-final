import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { borrarFavorito } from "../componentes/reducers/galSlice";
import { Personaje } from "../types/personaje.types";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns {JSX.Element} La pagina de favoritos
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