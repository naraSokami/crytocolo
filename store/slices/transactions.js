import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { companies } from "/data/data.json"

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (userId, thunkAPI) => {
    console.log(process.env);
    const API_KEY = "KXGKEHGZVQXGMKEFA2VAFSAYD5GW5EAHAU";
    const WALLET_ADDRESS = "0xdc18a7dc0823593a8e060ee177a78ae30d864834";

    const response = await fetch(
      `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${WALLET_ADDRESS}&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY}`
    );
    const data = await response.json();
    return data.result;
  }
)

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    loading: false,
    error: null,
    transactions: [],
    addressTransactions: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload
      state.loading = false
    })
    builder.addCase(fetchTransactions.rejected, (state, action) => {
      state.error = action.error.message
      state.loading = false
    })
  }
})


// actions
export const { getTransactions, getTransaction } = transactionsSlice.actions 

// selectors
export const selectLoading = state => state.loading
export const selectTransactions = state => state.transactions
export const selectFromAddressTransactions = ({address}) => (state) => {
  // const {companies} = await import("/data/data.json")

  return state.transactions
    .filter(tr => tr.from === address)
    .map(tr => ({
      ...tr,
      company: companies.find(company => company.address === tr.to)
    }))
}

export default transactionsSlice.reducer