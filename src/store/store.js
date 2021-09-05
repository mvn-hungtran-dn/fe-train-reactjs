import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

import fav from './fav'


export default configureStore({
  reducer: {
    fav: fav,
  }
})
