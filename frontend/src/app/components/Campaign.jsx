"use client"

import Link from 'next/link';
import { useAccount, useReadContract } from 'wagmi';
import {afridaAddress, AfridaABI} from '../abis/Afrida.json';
import { config } from '../lib/wagmi';
import { formatEther } from "ethers";

export default function Campaign({key, campaign}){
    const { address } = useAccount();
    const {data, isPending:campaignsLoading, error:campaignReadError} = useReadContract({
        config,
        abi:AfridaABI,
        address: afridaAddress,
        functionName: 'getDonation',
        account: address,
        args:[campaign.id],
    })

    if(campaignsLoading) return <div>Loading...</div>
    if(campaignReadError) return <div>Error loading onchain data</div>

    if(data)
    return(
        <Link href={`/campaigns/${campaign.id}`} key={key}>
            <div className="bg-neutral-800 p-5 rounded-lg hover:bg-neutral-700 transition-colors">
                <h3 className="text-xl font-semibold my-2">{campaign.name}</h3>
                <p className="text-gray-400 my-2">Goal: ${campaign.goal}</p>
                <p className="text-gray-400 my-2">Raised: ${formatEther(data.amount)}</p>
                <p className="text-gray-400 my-2">End Date: {campaign.date}</p>
                <div className="mt-2 w-full my-2 bg-neutral-700 rounded-full h-3">
                <div
                    className="bg-primary h-3 rounded-full"
                    style={{ width: `${(formatEther(data.amount) / campaign.goal) * 100}%` }}
                ></div>
                </div>
            </div>
        </Link>
    )
}