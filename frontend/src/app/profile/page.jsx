"use client"
import Image from 'next/image';
import useSWR from "swr";
import { fetcher } from '../lib/data';
import Button from '../components/Button';
import useAccountStore from '../store/store';
import Loading from '../loading';
import { useRouter } from 'next/navigation';
import Campaign from '../components/Campaign';
import { useAccount } from 'wagmi';

export default function Profile() {
  const { address } = useAccount();
  const { data, isError, isLoading, mutate } = useSWR(['/contributions/my',{wallet:address}], fetcher,{
    // revalidateOnFocus: false,
    // revalidateOnReconnect: false,
    // revalidateOnMount: true,
    // errorRetryInterval: 15000
  })
  const dicebearAvatar = `https://api.dicebear.com/9.x/identicon/svg?seed=Felix`;

  const { user, loading } = useAccountStore();
  const route = useRouter()

  if ((loading && !user) || isLoading) {
    return <Loading />
  }

  if (isError) {
    return <div>Error loading data</div>
  }

  if (!loading && !user) {
    route.replace("/");
    return null
  }

  console.log(data)
  let today = new Date()

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
            <p className="text-gray-400">Wallet Address: <span className="text-white">{user.smartWalletAddress}</span></p>
          </div>
        </div>

        {/* Campaigns Section */}
        <div className="space-y-8">
          {/* Current Campaigns */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Current Campaigns</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {
                data.filter(campaign=>new Date(campaign.date)>today)
                .map((campaign) => (
                  <Campaign key={campaign.id} campaign={campaign} />
                ))
              }
            </div>
          </div>

          {/* Previous Campaigns */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Previous Campaigns</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {
                data.filter(campaign=>new Date(campaign.date)<today)
                .map((campaign) => (
                  <Campaign key={campaign.id} campaign={campaign} />
                ))
              }
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
