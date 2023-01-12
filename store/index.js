import { configureStore } from '@reduxjs/toolkit'
import transactionsReducer from './slices/transactions'
import userReducer from './slices/user' 
import notifsReducer from './slices/notifs' 

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    user: userReducer,
    notifs: notifsReducer
  }
})

export default store