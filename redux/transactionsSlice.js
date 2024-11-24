import { fakeData } from "@/data/fakeData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: typeof window !== 'undefined' && localStorage.getItem('transactions')
    ? JSON.parse(localStorage.getItem('transactions'))
    : fakeData,
    budgetLimit: typeof window !== 'undefined' && localStorage.getItem('budgetLimit')
    ? JSON.parse(localStorage.getItem('budgetLimit'))
    : 5000, 
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
    setBudgetLimit: (state, action) => {
      state.budgetLimit = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('budgetLimit', JSON.stringify(state.budgetLimit));
      }
    },
  },
});

// Uygulama ilk başlatıldığında localStorage'da veri yoksa fakeData'yı kaydetmek için
if (typeof window !== 'undefined') {
  if (!localStorage.getItem('transactions')) {
    localStorage.setItem('transactions', JSON.stringify(fakeData)); 
  }

  if (!localStorage.getItem('budgetLimit')) {
    localStorage.setItem('budgetLimit', JSON.stringify(5000)); 
  }
}

export const { addTransaction, setBudgetLimit } = transactionsSlice.actions;
export default transactionsSlice.reducer;
