
import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./contadorSlice";
import  contadorSlice  from "./contadorSlice";

export const store= configureStore({
    reducer: {
        counter: contadorSlice.reducer, 
    }
    
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch