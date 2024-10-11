import React from "react";

export default function CreateAccount() {
  return (
    <div className="rg-black text-white">
      {/* Main Content */}
      <div className="flex items-center justify-center py-12">
        <div className="bg-black text-white rounded-lg w-full max-w-[600px]">
          <h1 className=" text-[60px] font-bold mb-2 text-center">Forgot Password?</h1>
          <p className="text-center text-gray-400 mb-6 ">No worries, we'll send you reset insructions</p>


          <form className="space-y-7 w-8/12 mx-auto">


            {/* Username or Email */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Username or email"
                className="w-full p-3 rounded-md bg-transparent ring-2 ring-neutral-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Get Started Button */}
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors"
            >
              Reset Password
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
