import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: "favMovie",
    initialState: { favMovies: [] },  
    reducers: {
        addToFav: (state, action) => {
            const existingMovie = state.favMovies.find(movie => movie.id === action.payload.id);
            if (!existingMovie) {
                state.favMovies.push(action.payload);
            }
        },
        removeFromFav: (state, action) => {
            state.favMovies = state.favMovies.filter(movie => movie.id !== action.payload.id);
        }
    }
});

export const { addToFav, removeFromFav } = favSlice.actions;
export default favSlice.reducer;
