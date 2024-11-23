import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-green-50 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sol Kartlar: Bütçe, Gelir, Gider */}
            <div className="grid grid-cols-1 gap-6">
              {/* Bütçe Kartı */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-xl font-medium text-gray-700">Bütçe</h1>
                    <p className="text-4xl font-bold text-blue-500 mt-2">
                      ₺5,300
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-medium text-gray-700">
                      Bütçe Limiti
                    </h1>
                    <p className="text-4xl font-bold text-blue-500 mt-2">
                      ₺5,300
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
                    placeholder="₺"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="button"
                    className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow mt-3 hover:bg-blue-600 w-full"
                  >
                    Limiti Güncelle
                  </button>
                </div>
              </div>

              {/* Gelir Kartı */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-medium text-gray-700">Gelir</h2>
                <p className="text-xl font-bold text-green-500 mt-2">₺12,500</p>
              </div>

              {/* Gider Kartı */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-medium text-gray-700">Gider</h2>
                <p className="text-xl font-bold text-red-500 mt-2">₺7,200</p>
              </div>
            </div>

            {/* Sağ Kart: Gelir/Gider Ekle */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-700 mb-4">
                Gelir/Gider Ekle
              </h3>
              <form>
                {/* Kategori Seçimi */}
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="category"
                  >
                    Kategori
                  </label>
                  <select
                    id="category"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Gelir</option>
                    <option>Gider</option>
                  </select>
                </div>
                {/* Açıklama */}
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
                    placeholder="Açıklama girin"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                {/* Tutar */}
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
                    placeholder="₺"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                {/* Tarih */}
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
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                {/* Gönder Butonu */}
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-600 w-full"
                >
                  Kaydet
                </button>
              </form>
            </div>
          </div>

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
    </div>
  );
}
