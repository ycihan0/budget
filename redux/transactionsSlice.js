import { fakeData } from "@/data/fakeData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: typeof window !== 'undefined' && localStorage.getItem('transactions')
    ? JSON.parse(localStorage.getItem('transactions'))
    : fakeData,
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

// Uygulama ilk başlatıldığında localStorage'da veri yoksa fakeData'yı kaydetmek için
if (typeof window !== 'undefined' && !localStorage.getItem('transactions')) {
  localStorage.setItem('transactions', JSON.stringify(fakeData));
}

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
