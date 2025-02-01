import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer/index'
import authReducer from './reducer/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'agrement_vault_root',
    storage : AsyncStorage,
  }

const persistedReducer = persistReducer(persistConfig, authReducer)

  
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
})

export const persistor = persistStore(store)