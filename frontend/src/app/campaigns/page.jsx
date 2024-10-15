"use client"
import Link from 'next/link';
import { Search, SortAsc, DollarSign, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function Campaigns() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('name');

  const campaigns = [
    {
      id: 'bizna-campaign',
      name: 'Bizna Campaign',
      goal: 50000,
      raised: 30000,
      endDate: 'Dec 31, 2024',
    },
    {
      id: 'tusome-initiative',
      name: 'Tusome Initiative',
      goal: 20000,
      raised: 12000,
      endDate: 'Nov 15, 2024',
    },
    {
      id: 'water-project',
      name: 'Water Project',
      goal: 150000,
      raised: 80000,
      endDate: 'Jan 20, 2025',
    },
  ];

  const filteredCampaigns = campaigns
    .filter((campaign) =>
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortType) {
        case 'goal':
          return b.goal - a.goal;
        case 'raised':
          return b.raised - a.raised;
        case 'endDate':
          return new Date(a.endDate) - new Date(b.endDate);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col  justify-between items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0 self-start">Active Campaigns</h1>
          <div className="flex items-center gap-4 md:flex-row flex-col w-full mt-5 ">
            {/* Search Bar */}
            <div className="relative text-black md:w-full w-full items-center">
              <input
                type="text"

                className="w-full py-2 px-3 bg-transparent border-2 border-neutral-700 text-white rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="text-neutral-500 absolute top-3 left-3 text-white w-5 h-5" />
            </div>

            {/* Sort Dropdown */}
            <div className="relative md:w-max w-full min-w-[300px]">
              <select
                className="bg-neutral-700 text-white p-3 rounded-full focus:outline-none cursor-pointer w-full"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="goal">Sort by Goal</option>
                <option value="raised">Sort by Raised</option>
                <option value="endDate">Sort by End Date</option>
              </select>
              <SortAsc className="absolute top-3 right-5 text-white w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign) => (
            <Link href={`/campaigns/${campaign.id}`} key={campaign.id}>
              <div className="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-700 transition-colors">
                <h2 className="text-xl font-bold mb-4">{campaign.name}</h2>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="text-teal-400 w-4 h-4" />
                  <p className="text-gray-400">Goal: <span className="text-white">${campaign.goal.toLocaleString()}</span></p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="text-teal-400 w-4 h-4" />
                  <p className="text-gray-400">Raised: <span className="text-white">${campaign.raised.toLocaleString()}</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-teal-400 w-4 h-4" />
                  <p className="text-gray-400">End Date: <span className="text-white">{campaign.endDate}</span></p>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-neutral-700 rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full"
                      style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-400 mt-2 text-sm text-center">
                    {((campaign.raised / campaign.goal) * 100).toFixed(2)}% of goal reached
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
