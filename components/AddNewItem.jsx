import React, { useState } from "react";
import { addTransaction } from "@/redux/transactionsSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid"; // UUID kütüphanesini içeri aktar

const AddNewItem = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    category: "Gelir",
    description: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const newTransaction = {
      id: uuidv4(), 
      ...formData,
    };


    dispatch(addTransaction(newTransaction));

   
    setFormData({
      category: "Gelir",
      description: "",
      amount: "",
      date: "",
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-medium text-gray-700 mb-4">
        Gelir/Gider Ekle
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="category"
          >
            Kategori
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Gelir</option>
            <option>Gider</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Açıklama
          </label>
          <input
            type="text"
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Açıklama girin"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Tutar
          </label>
          <input
            type="number"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="₺"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Tarih
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-600 w-full"
        >
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default AddNewItem;
