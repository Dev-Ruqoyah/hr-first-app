import { configureStore, createSlice } from "@reduxjs/toolkit";


let personSlice = createSlice({
    initialState:{name: "Rukayat",email: "hamzatrukayat@gmail.com"},
    reducers:{
        seTname:(state)=>{
            state.name = "Hamzat"
        },
        setEmail: (state)=>{
            state.email= "hamzat@gmail.com"
        }
    }
})

 export let store = configureStore({
    reducer:{
        person: personSlice.reducer
    }
})

export const {seTname,setEmail} = personSlice.actions