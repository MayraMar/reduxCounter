import React, { useState } from 'react'
 import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { agregarCantidad, quitarCantidad } from '../redux/contadorSlice';
 import { valorContador } from '../redux/contadorSlice';

interface Action {
    type: ActionType,
    payload: number
}

type ActionType  = "agregarCantidad"|"quitarCantidad";

export default function Contador () {
   //const valorContador = useAppSelector((state)=>state.counter.value);
    const valorContador = 0
    const dispatch  = useAppDispatch();
    return(
        <h3>{valorContador}</h3>
    )
}