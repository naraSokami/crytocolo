import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit"
import { ethers } from "ethers";
import { addNotif } from "./notifs";

export const connectUser = createAsyncThunk(
  'user/connectUser',
  async (_, ThunkApi) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    if (provider) {
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      if (signer) {
        ThunkApi.dispatch(addNotif({ msg: "Connected" }))
        return await signer.getAddress();
      }
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    error: null,
    address: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(connectUser.pending, state => {
      state.loading = true
    })
    builder.addCase(connectUser.fulfilled, (state, action) => {
      state.address = action.payload
      state.loading = false
    })
    builder.addCase(connectUser.rejected, (state, action) => {
      console.log(action.error.message);
      state.error = action.error.message
      state.loading = false
    })
  }
})


// selectors
export const selectLoading = state => state.user.loading
export const selectUserAddress = state => {
  return state.user.address
}

export default userSlice.reducer