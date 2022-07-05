import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: 'songs',
    initialState:{
        query: 'imagine dragons',
        songs: [],
        currentSong: null
    },
    reducers: {
        addSongs: (state, action) => {
          state.songs = action.payload.songs
        },
        changeQuery: (state, action) => {
          state.query = action.payload.query
        },
        changeSong: (state, action) => {
          state.currentSong = action.payload.song
        }
    }
}) 

export const {addSongs, changeQuery, changeSong} = songsSlice.actions
export default songsSlice.reducer;