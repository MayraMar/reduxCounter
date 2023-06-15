import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
//import { RootState } from "./store";

interface CounterState {
    value: number
};

const initialState: CounterState  ={
    value: 0,
}

export const contadorSlice=createSlice({
    name: "contador",
    initialState,
    reducers: {
        agregarCantidad: (state, action: PayloadAction<number>)=>{
            state.value+=action.payload;
        },
        quitarCantidad: (state,action: PayloadAction<number>)=>{
            state.value-=action.payload;
        }
    }
})

//export default contadorSlice

export const { agregarCantidad, quitarCantidad }=contadorSlice.actions

export const valorContador  = (state: RootState) => state.counter.value