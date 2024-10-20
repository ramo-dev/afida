"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useAccountStore from '../store/store';
import Button from '../components/Button';
import { useAccount, useWriteContract } from 'wagmi';
import { config } from '../lib/wagmi';
import {afridaAddress, AfridaABI} from '../abis/Afrida.json';
import Loading from '../loading';
import { postData } from '../lib/data';
import { popupE } from '../lib/trigger';
import { parseEther } from 'ethers';

export default function CreateCampaign() {
  let route = useRouter();
  const { user, loading } = useAccountStore();
  const { address, status } = useAccount();
  const { writeContract, data:txHash, status:writeStatus, error:writeError, isPending:writePending } = useWriteContract({config,mutation:{
      onSuccess:()=>{
        route.replace('/profile')
      }
  }})
  if(writePending) popupE('Processing', 'Accept transaction in wallet')
  if(writeError) popupE('Error',writeError.message)

  let [name, setName] = useState('');
  let [category, setCategory] = useState('');
  let [description, setDescription] = useState('');
  let [goal, setGoal] = useState();
  let [endDate, setEndDate] = useState('');

  let submit = (e) => {
    e.preventDefault();
    postData((response)=>{
      if(response.id){
        alert('Campaign did successfully')
        if(status=='connected')
        writeContract({ 
            abi:AfridaABI,
            address: afridaAddress,
            functionName: 'createDonation',
            value:parseEther('0.000000000005'),
            args: [
                response.id,
                parseEther(goal)
            ],
        })
      }
    },{
      wallet:address,
      name,
      category,
      description,
      goal:parseFloat(goal),
      date:endDate
    },'/contributions')
  }

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
            {/* Campaign Name */}
            <div className="mb-4">
              <label htmlFor='CampaignName' className='font-bold my-2'>Campaign name:</label>
              <input
                id="CampaignName"
                type="text"
                placeholder="Eg. Tusome Initiative"
                className="w-full p-3 rounded-md bg-transparent ring-2 ring-neutral-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                value={name}
                onChange={e=>setName(e.target.value)}
              />
            </div>

            {/*Category */}
            <div className="mb-4">
              <label htmlFor='CampaignCategory'
                className='font-bold my-2'>Campaign Category:</label>
              <input
                type="text"
                placeholder="Eg. Education"
                className="w-full p-3 rounded-md bg-transparent ring-2 ring-neutral-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                value={category}
                onChange={e=>setCategory(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label htmlFor='CampaignDescription' className='font-bold my-2'>Campaign description:</label>

              <textarea
                type="text"
                placeholder="Eg. Contribution to build classes"
                className="w-full p-3 rounded-md bg-transparent text-gray-300 ring-2 ring-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
                value={description}
                onChange={e=>setDescription(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor='CampaignGoal' className='font-bold my-2'>Campaign Goal:</label>

              <input
                type="text"
                placeholder="Eg. 200,000"
                className="w-full p-3 rounded-md bg-transparent text-gray-300 ring-2 ring-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
                value={goal}
                onChange={e=>setGoal(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor='CampaignEnd' className='font-bold my-2'>Campaign End Date:</label>

              <input
                type="date"
                placeholder="Eg. 200,000"
                className="mb-4 w-full p-3 rounded-md bg-transparent text-gray-300 ring-2 ring-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
                value={endDate}
                onChange={e=>setEndDate(e.target.value)}
              />
            </div>
            <button onClick={e=>submit(e)} className="bg-primary text-white block w-full py-3 rounded-xl">Continue</button>
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
