import { createSlice } from "@reduxjs/toolkit";


const MySlice = createSlice({
    name : "user",
    initialState : {
        user : {},
        Token : "",
        PickUp : {}
    },
    reducers : {
        setUsers: (state, action)=>{
            state.user = action.payload
        }, 
        setToken : (state, action)=>{
            state.Token = action.payload
        },
        setPickup: (state, action)=>{
            state.PickUp = action.payload
        }

        
    }
})

export const {setUsers,setToken,setPickup} = MySlice.actions

export default MySlice.reducer