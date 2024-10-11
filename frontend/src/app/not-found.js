
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">


      {/* Main Content */}
      <div className="flex items-center justify-center h-full">
        <div className="bg-black text-white rounded-lg w-full max-w-[400px] text-center">
          <h1 className="text-[100px] font-bold mb-2">404</h1>
          <p className="text-gray-400 mb-7 text-lg">Oops! Page not found.</p>

          {/* Back to Home Button */}
          <Link href="/">
            <button
              className="mt-5 w-full py-3 bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary transition-colors"
            >
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
