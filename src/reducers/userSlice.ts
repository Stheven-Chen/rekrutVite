/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {createSlice}  from '@reduxjs/toolkit';

interface User{
    nama:string
    user:string
    pass:string
}

const initialState:User = {
    nama:'',
    user:'',
    pass:''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login:(state, action)=>{
            state.user = action.payload.user;
            state.nama = action.payload.nama;
        },
        logout: (state) => {
            state.user = '';
            state.nama = '';
           
          },
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
export type RootState = ReturnType<typeof userSlice.reducer>;