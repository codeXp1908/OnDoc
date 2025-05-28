import React, { useState } from 'react';

const AuthForm = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [authMethod, setAuthMethod] = useState('email'); // 'email' or 'phone'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasAccount) {
      console.log(authMethod === 'phone' ? 
        `Logging in with phone: ${phone}` : 
        `Logging in with email: ${email}`);
    } else {
      console.log(`Signing up with ${name}, ${email}, ${password}`);
    }
  };

  return (
<div className="flex items-center justify-center mt-[-1rem]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-sky-500 to-sky-600 p-6 text-center">
          <h2 className="text-2xl font-bold text-white">
            {hasAccount ? 'Welcome Back' : 'Join Us Today'}
          </h2>
          <p className="text-sky-100 mt-1">
            {hasAccount ? 'Login to continue' : 'Create your account'}
          </p>
        </div>

        <div className="p-8">
          {/* Toggle buttons */}
          <div className="flex mb-8 bg-sky-50 rounded-full p-1">
            <button
              className={`flex-1 py-3 rounded-full text-sm font-medium transition-all ${hasAccount ? 'bg-white text-sky-600 shadow-md' : 'text-sky-800 hover:text-sky-600'}`}
              onClick={() => setHasAccount(true)}
            >
              Sign In
            </button>
            <button
              className={`flex-1 py-3 rounded-full text-sm font-medium transition-all ${!hasAccount ? 'bg-white text-sky-600 shadow-md' : 'text-sky-800 hover:text-sky-600'}`}
              onClick={() => setHasAccount(false)}
            >
              Sign Up
            </button>
          </div>

          {/* Auth method selector */}
          <div className="flex mb-6 border-b border-sky-100">
            <button
              className={`pb-2 px-4 text-sm font-medium ${authMethod === 'email' ? 'text-sky-600 border-b-2 border-sky-500' : 'text-gray-500 hover:text-sky-500'}`}
              onClick={() => setAuthMethod('email')}
            >
              <i className="mr-2">✉️</i> Email
            </button>
            <button
              className={`pb-2 px-4 text-sm font-medium ${authMethod === 'phone' ? 'text-sky-600 border-b-2 border-sky-500' : 'text-gray-500 hover:text-sky-500'}`}
              onClick={() => setAuthMethod('phone')}
            >
              <i className="mr-2">📱</i> Phone
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {!hasAccount && (
              <div className="mb-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-sky-100 focus:border-sky-300 focus:ring-2 focus:ring-sky-200 transition-all"
                  placeholder="Full Name"
                  required
                />
              </div>
            )}

            {authMethod === 'email' ? (
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-sky-100 focus:border-sky-300 focus:ring-2 focus:ring-sky-200 transition-all"
                  placeholder="Email Address"
                  required
                />
              </div>
            ) : (
              <div className="mb-4">
                <div className="flex">
                  <select className="w-1/4 px-3 py-3 rounded-l-lg border border-sky-100 bg-sky-50 text-sky-700 focus:outline-none">
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-r-lg border-t border-r border-b border-sky-100 focus:border-sky-300 focus:ring-2 focus:ring-sky-200 transition-all"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
            )}

            <div className="mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-sky-100 focus:border-sky-300 focus:ring-2 focus:ring-sky-200 transition-all"
                placeholder="Password"
                required
                minLength="6"
              />
            </div>

            {hasAccount && (
              <div className="flex justify-between items-center mb-6">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 text-sky-500 focus:ring-sky-400 border-gray-300 rounded" 
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-sky-600 hover:underline">Forgot password?</a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-3 px-4 rounded-lg hover:from-sky-600 hover:to-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 transition-all shadow-md mb-4"
            >
              {hasAccount ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-sky-100"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-white text-sm text-gray-400">OR CONTINUE WITH</span>
            </div>
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center py-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
              <svg className="w-5 h-5 mr-2 text-[#4285F4]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
              </svg>
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center py-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
              <svg className="w-5 h-5 mr-2 text-[#1877F2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
              </svg>
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>

          <div className="text-center text-sm text-gray-500 mt-6">
            {hasAccount ? (
              <>
                Don't have an account?{' '}
                <button 
                  className="text-sky-600 font-medium hover:underline"
                  onClick={() => setHasAccount(false)}
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button 
                  className="text-sky-600 font-medium hover:underline"
                  onClick={() => setHasAccount(true)}
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;