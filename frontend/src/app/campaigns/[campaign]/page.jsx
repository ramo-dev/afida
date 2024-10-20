"use client";
import { useState, useEffect } from "react";
import { DownloadCloud, HandCoins, Search, Share2, UploadCloud } from "lucide-react";
import useAccountStore from "@/app/store/store";

export default function Dashboard({ params }) {
  const { campaign } = params;
  const { user } = useAccountStore();
  const [campaignData, setCampaignData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        const response = await fetch("https://afida-backend-c9432f18675a.herokuapp.com/api/project");
        const data = await response.json();

        const campaignData = data.find((itm) => itm.id === campaign);
        setCampaignData(campaignData);

        if (campaignData) {
          setTransactions(campaignData.transactions || []);
        } else {
          setTransactions([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching campaign data:", error);
        setLoading(false);
      }
    };

    fetchCampaignData();
  }, [campaign]);

  if (loading) return <div>Loading...</div>;

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goal = campaignData?.goal || 50000;
  const raised = campaignData?.raised || 30000;
  const progress = (raised / goal) * 100;

  const endDate = new Date(campaignData?.endDate);
  const currentDate = new Date();
  const timeRemaining = Math.max(0, Math.ceil((endDate - currentDate) / (1000 * 60 * 60 * 24))); // Days left

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-black text-white rounded-lg w-full md:max-w-[700px] md:py-0 py-8">
          {/* Greeting */}
          <h1 className="md:text-[40px] text-3xl font-bold mb-2 text-center">{campaign.name} Campaign</h1>
          <p className="text-center text-gray-400 mb-6">Support the {campaignData?.title} campaign progress</p>

          {/* Metrics Section */}
          <div className="space-y-7 md:w-10/12 w-full mx-auto px-2 h-full">
            {/* Funding Info */}
            <div className="mt-6 flex justify-between">
              <p className="text-gray-400  md:text-md text-sm">
                Goal:<br /> <span className="text-white">${goal}</span>
              </p>
              <p className="text-gray-400  md:text-md text-sm">
                Raised:<br /> <span className="text-white">${raised}</span>
              </p>
              <p className="text-gray-400  md:text-md text-sm">
                Days Left:<br /><span className="text-white">{timeRemaining} days</span>
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 md:px-0 px-1">
              <div className="w-full bg-neutral-700 rounded-full h-4">
                <div className="bg-primary h-4 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
              <p className="text-gray-400 mt-2 text-center">{progress.toFixed(2)}% of goal reached</p>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <p className="text-center text-lg font-semibold text-neutral-300">
                Help us reach our goal! Every contribution matters.
              </p>

              {/* Action Buttons */}
              <div className="flex space-x-4 justify-center">
                <button className="w-1/2 py-2 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors flex items-center justify-center space-x-2">
                  <HandCoins size={18} />
                  <span>Contribute Now</span>
                </button>
                <button className="w-1/2 py-2 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors flex items-center justify-center space-x-2">
                  <Share2 size={18} />
                  <span>Share Campaign</span>
                </button>
              </div>

              <div className="text-center mt-4 flex-1">
                <button className="w-full py-2 px-4 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors flex items-center justify-center space-x-2">
                  <UploadCloud size={18} />
                  <span>Download Campaign Assets</span>
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
      </div>
    </div>
  );
}
