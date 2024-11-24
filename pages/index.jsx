import AddNewItem from "@/components/AddNewItem";
import BudgetDashboard from "@/components/BudgetDashboard";
import FinancialTransactions from "@/components/FinancialTransactions";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MonthlyBarChart from "@/components/MonthlyBarChart";
import MonthlyPieChart from "@/components/MonthlyPieChart";
import YearlyBarChart from "@/components/YearlyBarChart";
import YearlyPieChart from "@/components/YearlyPieChart";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-green-50 p-4 ">
        <div className="max-w-7xl mx-auto mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BudgetDashboard />
            <AddNewItem />
          </div>
          <FinancialTransactions />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8  ">
          <MonthlyBarChart/>
            <YearlyBarChart/>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <MonthlyPieChart/>
             <YearlyPieChart/>
          </div>

       
        </div>
      </div>
      <Footer/>
    </>
  );
}
