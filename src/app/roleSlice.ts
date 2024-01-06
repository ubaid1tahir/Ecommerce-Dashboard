import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    role: '',
}

const roleSlice = createSlice({
    name: 'roles',
    initialState, 
    reducers: {
        assignRole: (state, action) => {
            
            console.log(action.payload);
            
            state.role = action.payload
            console.log(state.role);
        }
    }
})

export const {assignRole} = roleSlice.actions;

export default roleSlice.reducer
