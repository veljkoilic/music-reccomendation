import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: 'songs',
    initialState:{
        query: 'gorillaz',
        songs: []
    },
    reducers: {
        addSongs: (state, action) => {
          state.songs = action.payload.songs
        },
        changeQuery: (state, action) => {
          state.query = action.payload.query
        }
    }
}) 

export const {addSongs, changeQuery} = songsSlice.actions
export default songsSlice.reducer;