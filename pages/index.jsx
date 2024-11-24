import AddNewItem from "@/components/AddNewItem";
import BudgetDashboard from "@/components/BudgetDashboard";
import FinancialTransactions from "@/components/FinancialTransactions";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-green-50 p-4">
        <div className="max-w-7xl mx-auto mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BudgetDashboard />
            <AddNewItem />
          </div>
          
            <FinancialTransactions/>
          
          {/* Grafikler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Harcama Kategorileri
              </h3>
              <div
                id="pie-chart"
                className="h-64 flex items-center justify-center"
              >
                {/* Chart.js ile Pasta Grafiği Eklenecek */}
              </div>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Aylık Trendler
              </h3>
              <div
                id="bar-chart"
                className="h-64 flex items-center justify-center"
              >
                {/* Chart.js ile Çubuk Grafiği Eklenecek */}
              </div>
            </div>
          </div>

          {/* Ayrıntılı Harcama Listesi */}
          <div className="bg-white p-6 shadow-lg rounded-lg mt-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Ayrıntılı Harcamalar
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="text-gray-700">Market Alışverişi</span>
                <span className="text-red-500 font-medium">-₺350</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700">Elektrik Faturası</span>
                <span className="text-red-500 font-medium">-₺200</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700">Maaş</span>
                <span className="text-green-500 font-medium">+₺10,000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
