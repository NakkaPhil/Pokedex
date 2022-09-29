import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const trainerName = createSlice({
		name: 'trainerName',
        initialState: '',
        reducers: {
            Name : (state, action)=>{
                const userName = action.payload
                return userName;
            }
        }
})

export const { Name } = trainerName.actions;

export default trainerName.reducer;
