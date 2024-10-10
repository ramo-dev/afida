import Link from 'next/link';
import Logo from '@/app/assets/logo';


export default function CreateAccount() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 sticky top-0 w-full">
        <Logo className="flex items-center gap-3" />
        <Link href="/login" className='border-2 border-primary py-2 px-8 text-purple-500 transition-all rounded-full hover:bg-primary hover:text-gray-200'>
          <p className=" text-lg">Login</p>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center">
        <div className="bg-black text-white rounded-lg w-full max-w-[600px]">
          <h1 className=" text-[60px] font-bold mb-1 text-center">Create Account</h1>
          <p className="text-center text-gray-400 mb-4 max-w-[200px] mx-auto">Create an account to start receiving funds</p>


          <form className="space-y-7 w-8/12 mx-auto">
            {/* Full Names */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Names"
                className="w-full p-3 rounded-md bg-transparent ring-2 ring-neutral-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

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
            <div className="flex items-center mb-6 w-full text-sm">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-400 flex gap-1">
                By checking, you agree to the
                <Link href="/terms">
                  <p className="text-primary">terms and conditions</p>
                </Link>
              </label>
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
