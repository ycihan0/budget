import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: typeof window !== 'undefined' && localStorage.getItem('transactions')
    ? JSON.parse(localStorage.getItem('transactions'))
    : [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
      }
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
