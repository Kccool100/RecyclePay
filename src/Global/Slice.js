import { createSlice } from "@reduxjs/toolkit";


const MySlice = createSlice({
    name : "user",
    initialState : {
        user : {
            
        },
        Token : ""

    },
    reducers : {
        setUsers: (state, action)=>{
            state.user = action.payload
        }, 
        setToken : (state, action)=>{
            state.Token = action.payload
        }
    }
})

export const {setUsers,setToken} = MySlice.actions

export default MySlice.reducer