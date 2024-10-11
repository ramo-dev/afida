
import Link from 'next/link';


export default function CreateAccount() {
  return (
    <div className="min-h-screen bg-black text-white">


      {/* Main Content */}
      <div className="flex items-center justify-center py-12">
        <div className="bg-black text-white rounded-lg w-full max-w-[600px]">
          <h1 className=" text-[60px] font-bold mb-2 text-center">Welcome Back</h1>
          <p className="text-center text-gray-400 mb-6 ">Please enter your credentials</p>


          <form className="space-y-7 w-8/12 mx-auto">


            {/* Username or Email */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Username or email"
                className="w-full p-3 rounded-md bg-transparent ring-2 ring-neutral-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-md bg-transparent text-gray-300 ring-2 ring-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center mb-6 w-full text-sm flex justify-between">
              <div>
                <input type="checkbox" id="remember-me" className="mr-2" />
                <label htmlFor="remember-me" className="text-gray-400">
                  Remember me
                </label>
              </div>
              <Link href="/reset-password">
                <p className="text-primary ms-auto">forgot password?</p>
              </Link>
            </div>

            {/* Get Started Button */}
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors"
            >
              Get Started
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
