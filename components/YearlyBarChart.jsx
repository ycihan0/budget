import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns"; // date-fns ile tarih formatlama

const YearlyBarChart = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const [yearlyData, setYearlyData] = useState([]);

  useEffect(() => {
    // Veri işleme (Yıllık gelir ve gider)
    const processYearlyData = () => {
      const yearly = {};

      transactions.forEach((transaction) => {
        const year = format(new Date(transaction.date), "yyyy"); // Yıl bazında

        if (!yearly[year]) yearly[year] = { year, gelir: 0, gider: 0 };

        if (transaction.category === "Gelir") {
          yearly[year].gelir += parseFloat(transaction.amount);
        } else if (transaction.category === "Gider") {
          yearly[year].gider += parseFloat(transaction.amount);
        }
      });

      setYearlyData(Object.values(yearly)); // Yıllık verileri dizi haline getiriyoruz
    };

    if (transactions.length) {
      processYearlyData();
    }
  }, [transactions]);

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Yıllık Grafik</h3>

      {yearlyData.length === 0 ? (
        <p className="text-center text-gray-500">Veri bulunamadı.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={yearlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="gelir" fill="#82ca9d" name="Gelir" />
            <Bar dataKey="gider" fill="#ff7f50" name="Gider" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default YearlyBarChart;
