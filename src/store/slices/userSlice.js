import { createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";

const initialState = {
    email: null,
    token: null,
    id: null,
    emailVerified: null
}



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
            state.emailVerified = action.payload.emailVerified
        },
        removeUser(state){
            state.email = null
            state.token = null
            state.id = null
            state.emailVerified = null
            getAuth().signOut()
        }
    }
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer