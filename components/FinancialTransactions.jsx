import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const FinancialTransactions = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const [filter, setFilter] = useState("all");
  const [isClient, setIsClient] = useState(false);

  // Client tarafında olduğumuzu işaretle
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <p className="text-center text-gray-500">Yükleniyor...</p>;
  }

  const filteredTransactions = [
    ...(filter === "all"
      ? transactions
      : transactions.filter((t) => t.category === filter)),
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mt-8">
      <div class="flex items-center justify-between ">
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Finansal işlemler
          </h3>
        </div>
        <div class="flex flex-col gap-2 shrink-0 sm:flex-row mr-4">
          <select
            d="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            class="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <option value="all">Tümü</option>
            <option value="Gelir">Gelir</option>
            <option value="Gider">Gider</option>
          </select>
        </div>
      </div>

      <div class="p-0 overflow-scroll">
        <table class="w-full mt-4 text-left table-auto min-w-max">
          <thead>
            <tr>
              <th class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                <p class="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                  Kategori
                </p>
              </th>
              <th class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                <p class="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                  Açıklama
                </p>
              </th>
              <th class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                <p class="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                  Miktar
                </p>
              </th>
              <th class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                <p class="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                  Tarih
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 text-gray-700 text-sm"
              >
                <td className="py-2 px-4 border-b border-gray-200">
                  {transaction.category}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {transaction.description}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  ₺{parseFloat(transaction.amount).toLocaleString()}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {transaction.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-between p-3">
        <p class="block text-sm text-slate-500">Sayfa 1 ile 10</p>
        <div class="flex gap-1">
          <button
            class="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Önceki
          </button>
          <button
            class="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Sonraki
          </button>
        </div>
      </div>

      {filteredTransactions.length === 0 && (
        <p className="text-gray-500 mt-4 text-center">
          Bu kategori için işlem bulunamadı.
        </p>
      )}
    </div>
  );
};

export default FinancialTransactions;
