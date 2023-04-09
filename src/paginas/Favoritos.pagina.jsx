import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { borrarFavorito } from "../componentes/reducers/galSlice";
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const favoritos = useAppSelector(state => state.personajes.favoritos)
    const dispatch = useAppDispatch();

    const vaciarFavoritos = (favoritos) => {
        dispatch(borrarFavorito(favoritos));
    }

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={() => vaciarFavoritos(favoritos)}>Reset favoritos</button>
        </div>
        <GrillaPersonajes personajes = {favoritos}/>
    </div>
}

export default PaginaFavoritos