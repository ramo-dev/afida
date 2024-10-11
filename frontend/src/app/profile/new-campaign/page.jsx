
import Link from 'next/link';


export default function CreateAccount() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="flex items-center justify-center py-12">
        <div className="bg-black text-white rounded-lg w-full max-w-[600px]">
          <h1 className=" text-[60px] font-bold mb-1 text-center leading-none">Let's create your campaign</h1>
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

            {/* Get Started Button */}
            <Link href="/onboard/connect-wallet">
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors"

              >
                Continue
              </button>
            </Link>
          </form>

        </div>
      </div>
    </div>
  );
}
