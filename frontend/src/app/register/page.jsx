"use client"
import { useState } from 'react';
import Link from 'next/link';
import useAccountStore from '../store/store';
import { Loader2 } from 'lucide-react';
import Button from '../components/Button';


export default function CreateAccount() {

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const { register, loading, error } = useAccountStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, fullName } = form;
    if (email.trim === "" || password.trim === "" || fullName === "") {
      return
    } else {
      register(fullName, email, password);
      console.log(form)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="flex items-center justify-center py-12">
        <div className="bg-black text-white rounded-lg w-full max-w-[600px]">
          <h1 className=" text-[60px] font-bold mb-1 text-center">Create Account</h1>
          <p className="text-center text-gray-400 mb-4 max-w-[200px] mx-auto">Create an account to start receiving funds</p>


          <form className="space-y-7 w-8/12 mx-auto" onSubmit={handleSubmit}>
            {error && <div className='rounded-lg text-red-400 my-2 border-primary border w-full bg-purple-400/20 p-4'>
              {error}
            </div>}



            {/* Full Names */}

            <input
              type="text"
              name="fullName"
              onChange={handleChange}
              value={form.fullName}
              placeholder="Full Names"
              className="w-full p-3 rounded-md bg-transparent ring-2 ring-neutral-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />


            {/* Username or Email */}

            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email}
              placeholder="Username or email"
              className=" w-full p-3 rounded-md bg-transparent ring-2 ring-neutral-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />


            {/* Password */}
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 rounded-md bg-transparent text-gray-300 ring-2 ring-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Terms and Conditions */}
            <div className="flex items-center mb-6 w-full text-sm">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-gray-400 flex gap-1">
                By checking, you agree to the
                <Link href="/terms">
                  <p className="text-primary">terms and conditions</p>
                </Link>
              </label>
            </div>

            {/* Get Started Button */}
            <Button
              name="Get Started"
              variant="primary"
              type="submit"
              className="w-full"
              loading={loading}
              disabled={loading}
            />
          </form>

        </div>
      </div>
    </div>
  );
}
