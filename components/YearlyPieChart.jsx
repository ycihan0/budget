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
import { format } from "date-fns"; // date-fns ile tarih formatlama

const YearlyPieChart = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    const processYearlyData = () => {
      const incomeByYear = {};
      const expenseByYear = {};

      transactions.forEach((transaction) => {
        const year = format(new Date(transaction.date), "yyyy");

        if (transaction.category === "Gelir") {
          if (!incomeByYear[year]) incomeByYear[year] = 0;
          incomeByYear[year] += parseFloat(transaction.amount);
        } else if (transaction.category === "Gider") {
          if (!expenseByYear[year]) expenseByYear[year] = 0;
          expenseByYear[year] += parseFloat(transaction.amount);
        }
      });

      // Veriyi yıl bazında gelir ve gider olarak ayırıyoruz
      const incomePieData = Object.entries(incomeByYear).map(([year, value]) => ({
        name: year,
        value: value,
      }));

      const expensePieData = Object.entries(expenseByYear).map(([year, value]) => ({
        name: year,
        value: value,
      }));

      setIncomeData(incomePieData);
      setExpenseData(expensePieData);
    };

    if (transactions.length) {
      processYearlyData();
    }
  }, [transactions]);

  const COLORS = ["#82ca9d", "#ff7f50", "#8884d8", "#8dd1e1", "#d0ed57", "#ffc658"];

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Yıllık Para Akışı Pasta Grafiği</h3>
      <div className="mb-6">
        <h4 className="text-md font-medium text-gray-700 mb-2">Gelir Yıllık Dağılımı</h4>
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
        <h4 className="text-md font-medium text-gray-700 mb-2">Gider Yıllık Dağılımı</h4>
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

export default YearlyPieChart;
