import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId : '',
        iuli : "SSNB",
        userRoles : []
    },
    reducers: {
        setUserId : (state, action) => {
            state.userId = action.payload;
        },
        setUserLoggedIn : (state, action) => {
            state.iuli = action.payload;
        },
        setUserRoles : (state, action) => {
            state.userRoles = action.payload;
        }
    }
});

export const { setUserId, setUserLoggedIn,setUserRoles } = userSlice.actions;

export default userSlice.reducer;