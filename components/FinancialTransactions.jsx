import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const FinancialTransactions = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 
  const [isClient, setIsClient] = useState(false);


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

  // Sayfa numaralarına göre veri bölmek
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);

  // Toplam sayfa sayısını hesapla
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mt-8">
      <div className="flex items-center justify-between ">
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-4">Son işlemler</h3>
        </div>
        <div className="flex flex-col gap-2 shrink-0 sm:flex-row mr-4">
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <option value="all">Tümü</option>
            <option value="Gelir">Gelir</option>
            <option value="Gider">Gider</option>
          </select>
        </div>
      </div>

      <div className="p-0 overflow-scroll">
        <table className="w-full mt-4 text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-y border-slate-200 bg-slate-50">Kategori</th>
              <th className="p-4 border-y border-slate-200 bg-slate-50">Açıklama</th>
              <th className="p-4 border-y border-slate-200 bg-slate-50">Miktar</th>
              <th className="p-4 border-y border-slate-200 bg-slate-50">Tarih</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((transaction, index) => (
              <tr key={index} className="hover:bg-gray-50 text-gray-700 text-sm">
                <td className="py-2 px-4 border-b border-gray-200">{transaction.category}</td>
                <td className="py-2 px-4 border-b border-gray-200">{transaction.description}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  ₺{parseFloat(transaction.amount).toLocaleString()}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between p-3">
        <p className="block text-sm text-slate-500">
          Sayfa {currentPage} ile {totalPages}
        </p>
        <div className="flex gap-1">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 disabled:opacity-50"
          >
            Önceki
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 disabled:opacity-50"
          >
            Sonraki
          </button>
        </div>
      </div>

      {filteredTransactions.length === 0 && (
        <p className="text-gray-500 mt-4 text-center">Bu kategori için işlem bulunamadı.</p>
      )}
    </div>
  );
};

export default FinancialTransactions;
