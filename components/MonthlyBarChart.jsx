import React, { useEffect, useState, useMemo } from "react";
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

const MonthlyBarChart = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const [monthlyData, setMonthlyData] = useState([]);
  const currentYear = useMemo(() => new Date().getFullYear(), []); 

  useEffect(() => {
    const processMonthlyData = () => {
      const monthlyIncome = Array(12).fill(0);
      const monthlyExpense = Array(12).fill(0);

      transactions.forEach((transaction) => {
        const transactionDate = new Date(transaction.date);
        const transactionYear = transactionDate.getFullYear();
        const transactionMonth = transactionDate.getMonth();

        if (transactionYear === currentYear) {
          if (transaction.category === "Gelir") {
            monthlyIncome[transactionMonth] += parseFloat(transaction.amount);
          } else if (transaction.category === "Gider") {
            monthlyExpense[transactionMonth] += parseFloat(transaction.amount);
          }
        }
      });

      const months = [
        "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", 
        "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
      ];

      const monthlyChartData = months.map((month, index) => ({
        month,
        gelir: monthlyIncome[index],
        gider: monthlyExpense[index],
      }));

      setMonthlyData(monthlyChartData);
    };

    if (transactions.length) {
      processMonthlyData();
    }
  }, [transactions, currentYear]); 

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Aylık Para Akışı Çubuk Grafiği</h3>

      {monthlyData.length === 0 ? (
        <p className="text-center text-gray-500">Veri bulunamadı.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
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

export default MonthlyBarChart;
