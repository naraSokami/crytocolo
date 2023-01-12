import { createSlice } from "@reduxjs/toolkit"

const notifsSlice = createSlice({
  name: 'notifs',
  initialState: {
    notifs: [],
  },
  reducers: {
    addNotif(state, {payload}) {
      let {msg, type} = payload

      if (! type)
        type = 'success'

      state.notifs.push({ 
        msg, 
        type,
        date: Date.now()
      })
    }
  },
})


// selectors
export const selectnotifs = state => state.notifs.notifs

//actions
export const { addNotif } = notifsSlice.actions

export default notifsSlice.reducer