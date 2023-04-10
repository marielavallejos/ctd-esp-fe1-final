
import './paginacion.css';

interface PaginacionProps{
    anterior: () => void;
    proxima: () => void;
    page: number;
}
/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 *
 * @returns {JSX.Element} Paginacion
 */
const Paginacion = ({anterior, proxima, page}:PaginacionProps) => {

    
    return <div className="paginacion">
        <button 
        onClick={anterior} 
        disabled={page > 1 ? false : true} 
        className={"primary"}>
            Anterior
        </button>

        <button 
        onClick={proxima} 
        disabled={false} 
        className={"primary"}>
            Siguiente
        </button>
    </div>
}

export default Paginacion;