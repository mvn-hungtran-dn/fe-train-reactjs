import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getFirestore } from "firebase/firestore"
import { doc, updateDoc, getDoc } from "firebase/firestore"; 
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../utils/firebase';
import { POKE_DOCS } from '../utils/constants';

initializeApp(firebaseConfig)
const db = getFirestore()

const initialState = {
  favorites: []
}

export const setFav = createAsyncThunk('fav/setFav', async () => {
  if (!localStorage.getItem('userId')) {
    return []
  }
  const fav = await getDoc(doc(db, localStorage.getItem('userId'), POKE_DOCS.colection))
  return fav.data().favotire
})

export const removeFav = createAsyncThunk('fav/setFav', async (payload) => {
  const fav = payload.favorites.filter((stateId) => stateId !== payload.id)
  await updateDoc(doc(db, localStorage.getItem('userId'), POKE_DOCS.colection), {favotire: fav})
  return fav
})

export const addFav = createAsyncThunk('fav/setFav', async (payload) => {
  const fav = [...payload.favorites, payload.id]
  await updateDoc(doc(db, localStorage.getItem('userId'), POKE_DOCS.colection), {favotire: fav})
  return fav
})

export const store = createSlice({
  name: 'favorite',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(setFav.fulfilled, (state, action) => {
      state.favorites = action.payload
    })
  }
})

export default store.reducer
