import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { borrarFiltro, buscarPersonaje, getFiltrados, getPersonajes } from "../componentes/reducers/galSlice";
import { useEffect, useState, useRef, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * @returns {JSX.Element} La pagina de inicio
 */

const PaginaInicio = () => {
    const [page, setPage] = useState<number>(1);
    const dispatch = useAppDispatch();
    const personajes = useAppSelector(state => state.personajes.personaje)
    const inputValue = useAppSelector(state => state.personajes.input);
    const inputRef = useRef<HTMLInputElement>(null);
    const [filtro, setFiltro] = useState<string>(inputValue);

    useEffect(() =>{
        dispatch(buscarPersonaje(filtro));
        dispatch(getFiltrados(filtro));
    }, [filtro, dispatch]);

    useEffect(() =>{
        dispatch(getPersonajes(page));
        inputRef?.current?.focus();
    }, [page, dispatch]);


    const limpiarFiltro = () => {
        setFiltro('');
        dispatch(borrarFiltro());
        inputRef?.current?.focus();
        dispatch(getPersonajes(1));
    }

    const handleNext = () => {
        setPage(page + 1);
    }
    const handlePrev = () => {
        setPage(page-1);
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={limpiarFiltro} >Reset filtro</button>
        </div>
        <Filtros
        inputRef={inputRef}
        busqueda={(e: ChangeEvent<HTMLInputElement>) => setFiltro(e.target.value)} 
        value={filtro}/>
        <Paginacion anterior = {handlePrev} proxima= {handleNext} page= {page}/>
        <GrillaPersonajes personajes={personajes} />
        <Paginacion anterior = {handlePrev} proxima= {handleNext} page= {page} />
    </div>
}

export default PaginaInicio