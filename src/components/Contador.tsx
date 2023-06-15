import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { agregarCantidad, quitarCantidad } from "../redux/contadorSlice";
import { valorContador } from "../redux/contadorSlice";

interface Action {
  type: ActionType;
  payload: number;
}

type ActionType = "agregarCantidad" | "quitarCantidad";

const Contador = () => {
  //const valorContador = useAppSelector((state)=>state.counter.value);
  const valor =useAppSelector((state)=>state.counter.value)
  const valorContador = 0;
  const dispatch = useAppDispatch();
  const handleClick=()=>{dispatch(agregarCantidad(1))}
  return (
    <div>
      <h3>{valor}</h3>
      <button onClick={handleClick}>Sumar 1</button>
    </div>
  );
};

export default Contador;
