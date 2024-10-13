"use client"
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import useAccountStore from '../store/store';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Dummy data for campaigns
const currentCampaigns = [
  { id: 'bizna-campaign', name: 'Bizna Campaign', goal: 50000, raised: 30000, endDate: 'Dec 31, 2024' },
];

const previousCampaigns = [
  { id: 'plant-trees', name: 'Plant Trees Initiative', goal: 10000, raised: 10000, endDate: 'Jan 15, 2024' },
];

export default function Profile() {
  const walletAddress = '0x123...abc';
  const dicebearAvatar = `https://api.dicebear.com/9.x/identicon/svg?seed=Felix`;

  const { user, loading } = useAccountStore();
  const route = useRouter()

  if (loading) {
    return <Loader2 className="animate-spin scale-125" />
  }

  if (!loading && !user) {
    route.replace("/");
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Profile Section */}
        <div className="p-6 rounded-lg mb-6 flex items-center space-x-6">
          {/* Dicebear Avatar */}
          <div className="relative w-32 h-32">
            <Image
              src={dicebearAvatar}
              alt="Profile avatar"
              width={80}
              height={80}
              className="rounded-full bg-neutral-700 w-full h-full"
            />
          </div>
          {/* Wallet Address */}
          <div>
            <h1 className="text-3xl font-bold">Your Profile</h1>
            <p className="text-gray-400">Wallet Address: <span className="text-white">{walletAddress}</span></p>
          </div>
        </div>

        {/* Campaigns Section */}
        <div className="space-y-8">
          {/* Current Campaigns */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Current Campaigns</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentCampaigns.map((campaign) => (
                <Link href={`/campaigns/${campaign.id}`} key={campaign.id}>
                  <div className="bg-neutral-800 p-5 rounded-lg hover:bg-neutral-700 transition-colors">
                    <h3 className="text-xl font-semibold my-2">{campaign.name}</h3>
                    <p className="text-gray-400 my-2">Goal: ${campaign.goal}</p>
                    <p className="text-gray-400 my-2">Raised: ${campaign.raised}</p>
                    <p className="text-gray-400 my-2">End Date: {campaign.endDate}</p>
                    <div className="mt-2 w-full my-2 bg-neutral-700 rounded-full h-3">
                      <div
                        className="bg-primary h-3 rounded-full"
                        style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Previous Campaigns */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Previous Campaigns</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {previousCampaigns.map((campaign) => (
                <Link href={`/campaigns/${campaign.id}`} key={campaign.id}>
                  <div className="bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 transition-colors">
                    <h3 className="text-xl font-semibold my-2">{campaign.name}</h3>
                    <p className="text-gray-400 my-2">Goal: ${campaign.goal}</p>
                    <p className="text-gray-400 my-2">Raised: ${campaign.raised}</p>
                    <p className="text-gray-400 my-2">End Date: {campaign.endDate}</p>
                    <div className="mt-2 w-full bg-neutral-700 rounded-full h-3 my-2">
                      <div className="bg-primary h-3 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="bg-neutral-800 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-bold mb-4">Settings</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Add a campaign</span>
              <Button href="/new-campaign" variant="primary" name="New Campaign" className="w-[160px]" />

            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-400">Change Wallet Address</span>
              <Button variant="primary" href="/connect-wallet" name="Edit" className="w-[160px]" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Notification Preferences</span>
              <Button variant="primary" name="Edit" className="w-[160px]" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Log Out</span>
              <Button variant="danger" name="Logout" className="w-[160px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
