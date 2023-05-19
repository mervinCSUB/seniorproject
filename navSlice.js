//import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
};

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, region) => {
            state.orgin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: () => {
            state.travelTimeInformation = action.payload;
        }
    }
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

//Selectors
export const selectOrgin = (state) => state.nav.orgin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;