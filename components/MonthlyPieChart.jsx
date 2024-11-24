import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns"; 

const MonthlyPieChart = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    const processMonthlyData = () => {
      const incomeByMonth = Array(12).fill(0); // 12 ay için gelir verisi
      const expenseByMonth = Array(12).fill(0); // 12 ay için gider verisi

      transactions.forEach((transaction) => {
        const transactionDate = new Date(transaction.date);
        const transactionMonth = transactionDate.getMonth(); // Ay 0'dan başlar (Ocak: 0, Şubat: 1, ...)
        const transactionYear = transactionDate.getFullYear(); // Yıl bilgisi
        const currentYear = new Date().getFullYear(); // Mevcut yıl

        // Eğer işlem, son yıl (veya mevcut yıl) aitse
        if (transactionYear === currentYear) {
          if (transaction.category === "Gelir") {
            incomeByMonth[transactionMonth] += parseFloat(transaction.amount);
          } else if (transaction.category === "Gider") {
            expenseByMonth[transactionMonth] += parseFloat(transaction.amount);
          }
        }
      });

      const months = [
        "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", 
        "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
      ];

      // Gelir ve gider verilerini uygun formata dönüştürüyoruz
      const incomePieData = incomeByMonth.map((value, index) => ({
        name: months[index],
        value: value,
      }));

      const expensePieData = expenseByMonth.map((value, index) => ({
        name: months[index],
        value: value,
      }));

      setIncomeData(incomePieData);
      setExpenseData(expensePieData);
    };

    if (transactions.length) {
      processMonthlyData();
    }
  }, [transactions]);

  const COLORS = ["#82ca9d", "#ff7f50", "#8884d8", "#8dd1e1", "#d0ed57", "#ffc658"];

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Aylık Para Akışı Pasta Grafiği</h3>
      
      {/* Gelir Pasta Grafiği */}
      <div className="mb-6">
        <h4 className="text-md font-medium text-gray-700 mb-2">Gelir Aylık Dağılımı</h4>
        {incomeData.length === 0 ? (
          <p className="text-center text-gray-500">Gelir verisi bulunamadı.</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={incomeData}
                dataKey="value"
                nameKey="name"
                outerRadius="80%"
                label
                labelLine={false}
              >
                {incomeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Gider Pasta Grafiği */}
      <div>
        <h4 className="text-md font-medium text-gray-700 mb-2">Gider Aylık Dağılımı</h4>
        {expenseData.length === 0 ? (
          <p className="text-center text-gray-500">Gider verisi bulunamadı.</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseData}
                dataKey="value"
                nameKey="name"
                outerRadius="80%"
                label
                labelLine={false}
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default MonthlyPieChart;
