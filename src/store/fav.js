import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getFirestore } from "firebase/firestore"
import { doc, updateDoc, getDoc } from "firebase/firestore"; 
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../utils/firebase';
import { POKE_DOCS } from '../utils/constants';
import { loading } from '../utils/functions';

initializeApp(firebaseConfig)
const db = getFirestore()

const initialState = {
  favorites: []
}

export const setFav = createAsyncThunk('fav/setFav', async () => {
  loading().start()
  const fav = await getDoc(doc(db, POKE_DOCS.name, POKE_DOCS.colection))
  loading().finish()
  return fav.data().favotire
})

export const removeFav = createAsyncThunk('fav/setFav', async (payload) => {
  loading().start()
  const fav = payload.favorites.filter((stateId) => stateId !== payload.id)
  await updateDoc(doc(db, POKE_DOCS.name, POKE_DOCS.colection), {favotire: fav})
  loading().finish()
  return fav
})

export const addFav = createAsyncThunk('fav/setFav', async (payload) => {
  loading().start()
  const fav = [...payload.favorites, payload.id]
  await updateDoc(doc(db, POKE_DOCS.name, POKE_DOCS.colection), {favotire: fav})
  loading().finish()
  return fav
})

export const store = createSlice({
  name: 'favorite',
  initialState,
  extraReducers: builder => {
    builder.addCase(setFav.fulfilled, (state, action) => {
      state.favorites = action.payload
    })
  }
})

export default store.reducer
