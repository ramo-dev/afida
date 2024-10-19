'use client'

import Link from 'next/link';
import { useEffect } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import Button from '../components/Button';
import { useRouter } from 'next/navigation';
import Loading from '../loading';

export default function CreateAccount() {

  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect();
  const router = useRouter();


  useEffect(() => {
    if (account.status === "connected") {
      setTimeout(() => {
        router.back();
      }, 2000);
      <Loading />
    }
  }, [])





  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="flex items-center justify-center py-12">
        <div className="bg-black text-white rounded-lg w-full max-w-[600px]">
          {account.status === "connected" ?
            <div className="w-[90%] mx-auto mt-8">
              <h1 className=" text-[60px] font-bold mb-4 text-center">Wallet Connected</h1>
              <p className="text-center text-gray-400 mb-6 max-w-[300px] mx-auto mb-5">You are already connected to a wallet.</p>
              <Button
                name="disconnect"
                variant="primary"
                className="w-full my-3"
                onClick={disconnect}
              />
              <Button
                name="Check out campaigns"
                variant="primary"
                href="/campaigns"
                className="w-full my-5 "
              />

            </div>
            :
            <>
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

            </>
          }
        </div>
      </div>
    </div >
  );
}
