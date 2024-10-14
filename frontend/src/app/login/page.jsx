"use client"
import Link from 'next/link';
import { useState } from 'react';
import useAccountStore from '../store/store';
import Button from '../components/Button';


export default function CreateAccount() {

  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const { login, loading, error } = useAccountStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    if (email.trim === "" || password.trim === "") {
      return
    } else {
      login(email, password);
    }
  }



  return (
    <div className="min-h-screen bg-black text-white">


      {/* Main Content */}
      <div className="flex items-center justify-center py-12">
        <div className="bg-black text-white rounded-lg w-full max-w-[600px]">
          <h1 className=" text-[60px] font-bold mb-2 text-center">Welcome Back</h1>
          <p className="text-center text-gray-400 mb-6 ">Please enter your credentials</p>


          <form className="space-y-7 w-8/12 mx-auto" onSubmit={handleSubmit}>
            {error && <div className='rounded-lg text-red-400 my-2 border-primary border w-full bg-purple-400/20 p-4'>
              {error}
            </div>}

            {/* Username or Email */}
            <div className="mb-4">
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Username or email"
                className="w-full p-3 rounded-md bg-transparent ring-2 ring-neutral-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
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
