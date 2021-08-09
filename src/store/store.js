import { configureStore } from '@reduxjs/toolkit'
import fav from './fav'

export default configureStore({
  reducer: {
    fav: fav,
  }
})
