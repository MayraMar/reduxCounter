import { quitarTarea } from "../../redux/tareasSlice";
import { useAppDispatch } from "../../redux/hooks";

interface Props{
    tarea: string
}

export const Tarea = ({tarea}:Props)=>{
    const dispatch = useAppDispatch();
    return(
        <li>{tarea}  
        <button onClick={()=>dispatch(quitarTarea(tarea))}>BORRAR</button>
        </li>
    )
}