'use client'

import Link from 'next/link';
import { useEffect } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export default function CreateAccount() {

  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()


  useEffect(() => {
    if (account.status === "connected") {
      console.log(account.status)
      console.log(JSON.stringify(account.addresses))
      console.log(account.chainId)
    } else {
      console.log("Wallet not connected")
    }
  }, [account])



  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="flex items-center justify-center py-12">
        <div className="bg-black text-white rounded-lg w-full max-w-[600px]">
          <h1 className=" text-[60px] font-bold mb-6 text-center">Connect Wallet</h1>
          <p className="text-center text-gray-400 mb-4 max-w-[300px] mx-auto mb-5">Please connect your smart wallet to start recieving funds</p>
          {/* Get Started Button */}
          <div className='w-8/12 mx-auto mt-8'>
            {connectors.map((connector) => (
              <button
                key={connector.uid}
                className="w-full my-2 py-3 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors"
                onClick={() => connect({ connector })}
                type="button"
              >
                <div>{connector.name}</div>
              </button>
            ))}

          </div>
        </div>
      </div>
    </div >
  );
}
