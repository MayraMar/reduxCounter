import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { agregarTarea, resetear } from "../../redux/tareasSlice";
import { Tarea } from "./Tarea";

const Tareas = () => {
  const tareas = useAppSelector((state) => state.tareas.tareas);
  // const valorContador = 0;
  const dispatch = useAppDispatch();
  const handleAgregar= () => {
    let element: HTMLInputElement | null;
    element = document.getElementById("nuevaTarea") as HTMLInputElement;
    let tareaAgregar: string | null;
    tareaAgregar = element?.value;
    if (tareas.includes(tareaAgregar)){
        alert(`Tarea ${tareaAgregar} ya existe`)
    } else
    dispatch(agregarTarea(tareaAgregar));
  };
  return (
    <div>
         <button onClick={()=>{dispatch(resetear())}}>Borrar todas las tareas</button>
        
      <ul>
        {tareas.map((tarea) => (
          <Tarea tarea={tarea}/>
        ))}
      </ul>
      <input type="text" id="nuevaTarea" placeholder="¿Qué tengo que hacer?" />
      <button onClick={handleAgregar}>AGREGAR</button>
    </div>
  );
};

export default Tareas;
