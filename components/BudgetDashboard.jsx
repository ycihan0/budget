import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBudgetLimit } from "@/redux/transactionsSlice";

const BudgetDashboard = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const initialBudgetLimit = useSelector((state) => state.transactions.budgetLimit);
  const dispatch = useDispatch();
  const [newLimit, setNewLimit] = useState(initialBudgetLimit);
  const [isClient, setIsClient] = useState(false); 
  const [errorMessage, setErrorMessage] = useState("");  

  const totalIncome = transactions
    .filter((transaction) => transaction.category === "Gelir")
    .reduce((sum, transaction) => sum + parseFloat(transaction.amount || 0), 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.category === "Gider")
    .reduce((sum, transaction) => sum + parseFloat(transaction.amount || 0), 0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLimitChange = (e) => {
    setNewLimit(e.target.value);
  };

  const handleSaveLimit = () => {
    if (newLimit > totalIncome - totalExpense) {
      setErrorMessage("Bütçe limiti, mevcut bütçenizden büyük olamaz!");  
    } else {
      setErrorMessage("");  
      dispatch(setBudgetLimit(parseFloat(newLimit)));
    }
  };

  if (!isClient) {
    return null; 
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-medium text-gray-700">Bütçe</h1>
            <p className="text-4xl font-bold text-blue-500 mt-2">
              ₺{(totalIncome - totalExpense).toLocaleString()}
            </p>
          </div>
          <div>
            <h1 className="text-xl font-medium text-gray-700">Bütçe Limiti</h1>
            <p className="text-4xl font-bold text-orange-500 mt-2">
              ₺{initialBudgetLimit.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="budget-limit"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Bütçe Limiti
          </label>
          <input
            type="number"
            id="budget-limit"
            value={newLimit}
            onChange={handleLimitChange}
            placeholder="₺"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            onClick={handleSaveLimit}
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow mt-3 hover:bg-blue-600 w-full"
          >
            Limiti Güncelle
          </button>

          {/* Hata mesajı */}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-medium text-gray-700">Toplam Gelir</h2>
        <p className="text-xl font-bold text-green-500 mt-2">
          ₺{totalIncome.toLocaleString()}
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-medium text-gray-700">Toplam Gider</h2>
        <p className="text-xl font-bold text-red-500 mt-2">
          ₺{totalExpense.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default BudgetDashboard;
