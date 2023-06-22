import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
//import { RootState } from "./store";

interface TareasState {
    
    tareas: string[]
};

const initialState: TareasState  ={
    tareas: ["cocinar", "barrer"],
}

export const tareasSlice=createSlice({
    name: "tareas",
    initialState,
    reducers: {
        agregarTarea: (state, action: PayloadAction<string>)=>{
            state.tareas.push(action.payload);
        },
        quitarTarea: (state,action: PayloadAction<string>)=>{
            state.tareas=state.tareas.filter(tarea=>tarea!==action.payload)
        },
        resetear: (state)=>{
            state.tareas=[];
        }
    }
})


export const { agregarTarea, resetear, quitarTarea }=tareasSlice.actions