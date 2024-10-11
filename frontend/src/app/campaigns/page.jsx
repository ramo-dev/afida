
import Link from 'next/link';

export default function Campaigns() {
  // Dummy data for campaigns
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

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Active Campaigns</h1>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <Link href={`/campaigns/${campaign.id}`} key={campaign.id}>
              <div className="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-700 transition-colors">
                <h2 className="text-2xl font-bold mb-2">{campaign.name}</h2>
                <p className="text-gray-400 mb-2">Goal: ${campaign.goal}</p>
                <p className="text-gray-400 mb-2">Raised: ${campaign.raised}</p>
                <p className="text-gray-400">End Date: {campaign.endDate}</p>
                <div className="mt-4">
                  {/* Progress Bar */}
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
