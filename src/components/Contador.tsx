import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { agregarCantidad, quitarCantidad, resetear } from "../redux/contadorSlice";
//import { valorContador } from "../redux/contadorSlice";

interface Action {
  type: ActionType;
  payload: number;
}

type ActionType = "agregarCantidad" | "quitarCantidad"; //no hace falta tiparlo xq lo simporto del slice

const Contador = () => {
  //const valorContador = useAppSelector((state)=>state.counter.value);
  const valor =useAppSelector((state)=>state.counter.value)
 // const valorContador = 0;
  const dispatch = useAppDispatch();
  const handleClick=()=>{
    let element: HTMLInputElement | null;
    element=document.getElementById("cantidad") as HTMLInputElement;
    let valorAgregar: number | null;
    valorAgregar=parseInt(element?.value);

    dispatch(agregarCantidad(valorAgregar))
  }
  return (
    <div>
      <h3>{valor}</h3>
      <button onClick={()=>{dispatch(agregarCantidad(1))}}>Sumar 1</button>
      <button onClick={()=>{dispatch(agregarCantidad(2))}}>Sumar 2</button>
      <button onClick={()=>{dispatch(quitarCantidad(1))}}>Restar 1</button>
      <button onClick={()=>{dispatch(resetear())}}>RESET</button>
      <br />
      <input type="number" id="cantidad" placeholder="¿Cuanto agrego?" />
      <button onClick={handleClick}>AGREGAR</button>
    </div>
  );
};

export default Contador;
