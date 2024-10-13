

"use client"
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard({ params }) {

  const { campaign } = params;

  useEffect(() => {
    console.log(params);
  }, [])

  // Dummy data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Funding Progress (USD)',
        data: [5000, 10000, 15000, 20000, 25000, 30000], // dummy data
        backgroundColor: '#6D31ED',
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
    <div className="min-h-screen bg-black text-white flex">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="bg-black text-white rounded-lg w-full max-w-[800px]">
          {/* Greeting */}
          <h1 className="text-[40px] font-bold mb-2 text-center">{campaign} Campaign</h1>
          <p className="text-center text-gray-400 mb-6">Track Bizna's campaign progress</p>

          {/* Metrics Section */}
          <div className="space-y-7 w-10/12 mx-auto">
            {/* Progress Chart */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">Funding Progress</h3>
              <Bar data={data} options={options} />

              {/* Funding Info */}
              <div className="mt-6 flex justify-between">
                <p className="text-gray-400">Goal: <span className="text-white">${goal}</span></p>
                <p className="text-gray-400">Raised: <span className="text-white">${raised}</span></p>
                <p className="text-gray-400">End Date: <span className="text-white">Dec 31, 2024</span></p>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="w-full bg-neutral-700 rounded-full h-4">
                  <div
                    className="bg-primary h-4 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-gray-400 mt-2 text-center">{progress.toFixed(2)}% of goal reached</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}

      <div className="w-1/3 p-6 space-y-4 sticky h-screen top-0 py-12">
        <div className="bg-black py-2 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="bg-neutral-700 p-3 rounded-md">
              <p className="text-sm  mb-1">Address: 0x123...abc • 10:30 AM</p>
              <p className="text-xs text-gray-400">Contributed 100 USD</p>
            </li>
            <li className="bg-neutral-700 p-3 rounded-md">
              <p className="text-sm  mb-1 ">Address: 0x273...dfs • 01:22 PM</p>
              <p className="text-xs text-gray-400">Contributed 300 USD</p>
            </li>
            <li className="bg-neutral-700 p-3 rounded-md">
              <p className="text-sm  mb-1 ">Address: 0x023...abc • 1:00 PM</p>
              <p className="text-xs text-gray-400">Contributed 50 USD</p>
            </li>
            <li className="bg-neutral-700 p-3 rounded-md">
              <p className="text-sm mb-1 ">Address: 0x123...bct • 11:30 AM</p>
              <p className="text-xs text-gray-400">Contributed 400 USD</p>
            </li>
          </ul>
        </div>
        {/* Action Buttons */}
        <div className="flex space-x-4 mt-6">
          <button className="w-full py-2 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors">
            Share
          </button>
          <button className="w-full py-2 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors">
            Deposit
          </button>
          <button className="w-full py-2 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors">
            Withdraw
          </button>
        </div>


      </div>
    </div>
  );
}
