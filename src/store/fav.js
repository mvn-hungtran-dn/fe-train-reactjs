import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorites: []
}

export const store = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFav: (state, { payload }) => {
      state.favorites.push(payload)
    },
    removeFav: (state, { payload }) => {
      state.favorites = state.favorites.filter((stateId) => stateId !== payload)
    }
  }
})

export const { addFav, removeFav } = store.actions

export default store.reducer
