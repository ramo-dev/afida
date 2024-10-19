"use client"
import Link from 'next/link';
import useAccountStore from '../store/store';
import Button from '../components/Button';
import { useAccount } from 'wagmi';
import Loading from '../loading';


export default function CreateAccount() {
  const { user, loading } = useAccountStore();
  const { address } = useAccount();

  if (!address && loading) {
    return <Loading />
  }


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="flex items-center justify-center py-12">
        {address ? <div className="bg-black text-white rounded-lg w-full max-w-[600px]">
          <h1 className=" text-[60px] font-bold mb-1 text-center leading-none">Let's start your Journey</h1>
          <p className="text-center text-gray-400 mb-4 max-w-[200px] mx-auto">Please enter your campaign details</p>


          <form className="space-y-7 w-8/12 mx-auto">
            {/* Full Names */}
            <div className="mb-4">
              <label htmlFor='CampaignName' className='font-bold my-2'>Campaign name:</label>
              <input
                id="CampaignName"
                type="text"
                placeholder="Eg. Tusome Initiative"
                className="w-full p-3 rounded-md bg-transparent ring-2 ring-neutral-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Username or Email */}
            <div className="mb-4">
              <label htmlFor='CampaignCategory'
                className='font-bold my-2'>Campaign Category:</label>
              <input
                type="text"
                placeholder="Eg. Education"
                className="w-full p-3 rounded-md bg-transparent ring-2 ring-neutral-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor='CampaignDescription' className='font-bold my-2'>Campaign description:</label>

              <textarea
                type="text"
                placeholder="Eg. Contribution to build classes"
                className="w-full p-3 rounded-md bg-transparent text-gray-300 ring-2 ring-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-4">
              <label htmlFor='CampaignGoal' className='font-bold my-2'>Campaign Goal:</label>

              <input
                type="text"
                placeholder="Eg. 200,000"
                className="w-full p-3 rounded-md bg-transparent text-gray-300 ring-2 ring-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-4">
              <label htmlFor='CampaignEnd' className='font-bold my-2'>Campaign End Date:</label>

              <input
                type="date"
                placeholder="Eg. 200,000"
                className="mb-4 w-full p-3 rounded-md bg-transparent text-gray-300 ring-2 ring-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button name="continue" href="/" variant="primary" type="submit" className="w-full mt-3" />
          </form>

        </div>
          :
          <div className='max-w-2xl py-12'>
            <h1 className=" text-[60px] font-bold mb-1 text-center leading-none">Wallet not connected</h1>
            <p className="text-center text-gray-400 mb-4 max-w-[300px] mx-auto">You need to connect to a smart wallet to recieve funds</p>
            <Button name="Connect a wallet" variant="primary" href="/connect-wallet" className="w-full" />
          </div>
        }
      </div>
    </div>
  );
}
