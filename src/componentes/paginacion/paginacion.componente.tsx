
import './paginacion.css';

interface PaginacionProps{
    anterior: () => void;
    proxima: () => void;
    page: number;
}
/**
 * Componente que contiene los botones para paginar 
 * @param {function} props.anterior - Función para el botón de "Anterior"
 * @param {function} props.proxima - Función para el botón de "Siguiente"
 * @param {number} props.page - Número de página actual para deshabilitar el botón de "Anterior"
 * @param {boolean} props.disable- Indica si el botón debe estar deshabilitado o no
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