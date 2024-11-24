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

  const filteredTransactions = [...(filter === "all"
    ? transactions
    : transactions.filter((t) => t.category === filter))]
    .sort((a, b) => new Date(b.date) - new Date(a.date)); 

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Finansal işlemler</h3>
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="filter" className="mr-2 font-medium">
            Filtre:
          </label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Tümü</option>
            <option value="Gelir">Gelir</option>
            <option value="Gider">Gider</option>
          </select>
        </div>
      </div>

      <div class="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div class="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
            <div class="flex items-center justify-between ">
                <div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">Finansal işlemler</h3>
                    
                </div>
            <div class="flex flex-col gap-2 shrink-0 sm:flex-row">
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
        
        </div>
        <div class="p-0 overflow-scroll">
            <table class="w-full mt-4 text-left table-auto min-w-max">
            <thead>
                <tr>
                <th
                    class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p
                    class="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                    Kategori
            
                    </p>
                </th>
                <th
                    class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p
                    class="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                    Function
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                    </svg>
                    </p>
                </th>
                <th
                    class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p
                    class="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                    Status
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                    </svg>
                    </p>
                </th>
                <th
                    class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p
                    class="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                    Employed
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                    </svg>
                    </p>
                </th>
                <th
                    class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p
                    class="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                    </p>
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td class="p-4 border-b border-slate-200">
                    <div class="flex items-center gap-3">
                    <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                        alt="John Michael" class="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                    <div class="flex flex-col">
                        <p class="text-sm font-semibold text-slate-700">
                        John Michael
                        </p>
                        <p
                        class="text-sm text-slate-500">
                        john@creative-tim.com
                        </p>
                    </div>
                    </div>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <div class="flex flex-col">
                    <p class="text-sm font-semibold text-slate-700">
                        Manager
                    </p>
                    <p
                        class="text-sm text-slate-500">
                        Organization
                    </p>
                    </div>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <div class="w-max">
                    <div
                        class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                        <span class="">online</span>
                    </div>
                    </div>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <p class="text-sm text-slate-500">
                    23/04/18
                    </p>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <button
                    class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        class="w-4 h-4">
                        <path
                            d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                        </path>
                        </svg>
                    </span>
                    </button>
                </td>
                </tr>
                <tr>
                <td class="p-4 border-b border-slate-200">
                    <div class="flex items-center gap-3">
                    <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg"
                        alt="Alexa Liras" class="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                    <div class="flex flex-col">
                        <p class="text-sm font-semibold text-slate-700">
                        Alexa Liras
                        </p>
                        <p
                        class="text-sm text-slate-500">
                        alexa@creative-tim.com
                        </p>
                    </div>
                    </div>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <div class="flex flex-col">
                    <p class="text-sm font-semibold text-slate-700">
                        Designer
                    </p>
                    <p
                        class="text-sm text-slate-500">
                        Marketing
                    </p>
                    </div>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <div class="w-max">
                    <div
                        class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap bg-slate-100 text-slate-500">
                        <span class="">offline</span>
                    </div>
                    </div>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <p class="text-sm text-slate-500">
                    23/04/18
                    </p>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <button
                    class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        class="w-4 h-4">
                        <path
                            d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                        </path>
                        </svg>
                    </span>
                    </button>
                </td>
                </tr>
                <tr>
                <td class="p-4 border-b border-slate-200">
                    <div class="flex items-center gap-3">
                    <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg"
                        alt="Laurent Perrier"
                        class="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                    <div class="flex flex-col">
                        <p class="text-sm font-semibold text-slate-700">
                        Laurent Perrier
                        </p>
                        <p
                        class="text-sm text-slate-500">
                        laurent@creative-tim.com
                        </p>
                    </div>
                    </div>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <div class="flex flex-col">
                    <p class="text-sm font-semibold text-slate-700">
                        Executive
                    </p>
                    <p
                        class="text-sm text-slate-500">
                        Projects
                    </p>
                    </div>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <div class="w-max">
                    <div
                        class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap bg-slate-100 text-slate-500">
                        <span class="">offline</span>
                    </div>
                    </div>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <p class="text-sm text-slate-500">
                    19/09/17
                    </p>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <button
                    class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        class="w-4 h-4">
                        <path
                            d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                        </path>
                        </svg>
                    </span>
                    </button>
                </td>
                </tr>
                <tr>
                <td class="p-4 border-b border-slate-200">
                    <div class="flex items-center gap-3">
                    <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg"
                        alt="Michael Levi" class="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                    <div class="flex flex-col">
                        <p class="text-sm font-semibold text-slate-700">
                        Michael Levi
                        </p>
                        <p
                        class="text-sm text-slate-500">
                        michael@creative-tim.com
                        </p>
                    </div>
                    </div>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <div class="flex flex-col">
                    <p class="text-sm font-semibold text-slate-700">
                        Designer
                    </p>
                    <p
                        class="text-sm text-slate-500">
                        Developer
                    </p>
                    </div>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <div class="w-max">
                    <div
                        class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                        <span class="">online</span>
                    </div>
                    </div>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <p class="text-sm text-slate-500">
                    24/12/08
                    </p>
                </td>
                <td class="p-4 border-b border-slate-200">
                    <button
                    class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-dialog-target="dialog"
                    >
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        class="w-4 h-4">
                        <path
                            d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                        </path>
                        </svg>
                    </span>
                    </button>
                </td>
                </tr>
            
            </tbody>
            </table>
        </div>
        <div class="flex items-center justify-between p-3">
            <p class="block text-sm text-slate-500">
            Page 1 of 10
            </p>
            <div class="flex gap-1">
            <button
                class="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                Previous
            </button>
            <button
                class="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                Next
            </button>
            </div>
        </div>
        </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border-b border-gray-300">Kategori</th>
              <th className="py-2 px-4 border-b border-gray-300">Açıklama</th>
              <th className="py-2 px-4 border-b border-gray-300">Miktar</th>
              <th className="py-2 px-4 border-b border-gray-300">Tarih</th>
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

      {filteredTransactions.length === 0 && (
        <p className="text-gray-500 mt-4 text-center">
          Bu kategori için işlem bulunamadı.
        </p>
      )}
    </div>
  );
};

export default FinancialTransactions;
