import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit"
import { companies } from "/data/data.json"

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (address) => {
    const API_KEY = "KXGKEHGZVQXGMKEFA2VAFSAYD5GW5EAHAU";
    // const WALLET_ADDRESS = "0xdc18a7dc0823593a8e060ee177a78ae30d864834";

    const response = await fetch(
      `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY}`
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
    updateCount: 0
  },
  reducers: {
    update(state) {
      state.updateCount++
    } 
  },
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

// selectors
export const selectLoading = state => state.loading
export const selectTransactions = state => state.transactions
export const selectFromAddressTransactions = ({address}) => (state) => {
  if (!address || address === '')
    return []
    
  return state.transactions.transactions
    .filter(tr => tr.from.toLowerCase() === address.toLowerCase() && companies.find(company => company.address.toLowerCase() == tr.to.toLowerCase()))
    .map(tr => ({
      ...tr,
      company: companies.find(company => company.address.toLowerCase() == tr.to.toLowerCase())
    })).reverse()
}

export const {update} = transactionsSlice.actions

export default transactionsSlice.reducer