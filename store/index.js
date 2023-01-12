import { configureStore } from '@reduxjs/toolkit'
import transactionsReducer from './slices/transactions'

const store = configureStore({
  reducer: transactionsReducer
})

export default store