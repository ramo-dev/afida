"use client";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { DownloadCloud, HandCoins, Search, Share2, UploadCloud } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard({ params }) {
  const { campaign } = params;

  const [transactions, setTransactions] = useState([
    { id: 1, address: "0x123...abc", time: "10:30 AM", amount: 100 },
    { id: 2, address: "0x273...dfs", time: "01:22 PM", amount: 300 },
    { id: 3, address: "0x023...abc", time: "1:00 PM", amount: 50 },
    { id: 4, address: "0x123...bct", time: "11:30 AM", amount: 400 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Dummy data for the chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Funding Progress (USD)",
        data: [5000, 10000, 15000, 20000, 25000, 30000], // dummy data
        backgroundColor: "#6D31ED",
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Dummy data for funding progress
  const goal = 50000;
  const raised = 30000;
  const progress = (raised / goal) * 100;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-black text-white rounded-lg w-full md:max-w-[700px] w-full md:py-0 py-8">
          {/* Greeting */}
          <h1 className="md:text-[40px] text-3xl font-bold mb-2 text-center ">{campaign} Campaign</h1>
          <p className="text-center text-gray-400 mb-6">{campaign} campaign progress</p>

          {/* Metrics Section */}
          <div className="space-y-7 md:w-10/12 w-full mx-auto px-2 h-full">
            {/* Progress Chart */}
            <div>
              <h3 className="text-xl font-semibold md:mb-4 mb-1 md:text-center text-neutral-300">Funding Progress</h3>
              <Bar data={data} options={options} className="md:my-0 mb-8 md: border border-neutral-700 rounded-lg md:p-4 p-2 " />

              {/* Funding Info */}
              <div className="mt-6 flex justify-between">
                <p className="text-gray-400  md:text-md text-sm">
                  Goal:<br /> <span className="text-white">${goal}</span>
                </p>
                <p className="text-gray-400  md:text-md text-sm">
                  Raised:<br /> <span className="text-white">${raised}</span>
                </p>
                <p className="text-gray-400  md:text-md text-sm">
                  End Date: <br /><span className="text-white">Dec 31, 2024</span>
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mt-6 md:px-0 px-1">
                <div className="w-full bg-neutral-700 rounded-full h-4">
                  <div className="bg-primary h-4 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-gray-400 mt-2 text-center">{progress.toFixed(2)}% of goal reached</p>
              </div>
              <div className="flex space-x-4 mt-6 md:hidden block">
                <button className="w-full py-2 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors flex items-center justify-center space-x-2">
                  <Share2 size={18} />
                  <span>Share</span>
                </button>
                <button className="w-full py-2 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors flex items-center justify-center space-x-2">
                  <HandCoins size={18} />
                  <span>Contribute</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-1/3 p-6 space-y-4 lg:sticky h-auto lg:h-screen top-0 md:py-12 py-5">
        <div className="bg-black py-2 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Transaction History</h2>


          <div className="relative w-full mb-3">
            <input
              type="text"
              placeholder="Search by address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 px-3 bg-transparent border-2 border-neutral-700 text-white rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          {/* Transaction List */}
          <ul className="space-y-2 text-gray-300 max-h-[300px] overflow-y-auto">
            {filteredTransactions.map((transaction) => (
              <li key={transaction.id} className="bg-neutral-700 p-3 rounded-md">
                <p className="text-sm mb-1">
                  Address: {transaction.address} • {transaction.time}
                </p>
                <p className="text-xs text-gray-400">Contributed {transaction.amount} USD</p>
              </li>
            ))}

            {filteredTransactions.length === 0 && (
              <p className="text-center text-gray-400">No transactions found</p>
            )}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-x-4 mt-6 md:flex hidden">
          <button className="w-full py-2 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors flex items-center justify-center space-x-2">
            <Share2 size={18} />
            <span>Share</span>
          </button>
          <button className="w-full py-2 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors flex items-center justify-center space-x-2">
            <HandCoins size={18} />
            <span>Contribute</span>
          </button>
        </div>
      </div>
    </div>
  );
}
