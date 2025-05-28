import React, { useState, useEffect } from 'react';
import AuthForm from './AuthForm';

const Authentication = () => {
  const MultilingualWelcome = () => {
    const welcomes = [
      "Welcome",    // English
      "नमस्ते",         // Hindi
      "வணக்கம்",        // Tamil (Vaṇakkam)
      "స్వాగతం",        // Telugu (Svāgataṁ)
      "স্বাগতম",         // Bengali (Shagotom)
      "സ്വാഗതം",         // Malayalam (Svāgataṁ)
      "ನಮಸ್ಕಾರ",        // Kannada (Namaskāra)
      "નમસ્તે",         // Gujarati (Namaste)
      "ਜੀ ਆਇਆਂ ਨੂੰ",     // Punjabi (Jī āiāṁ nū)
      "ସ୍ୱାଗତ",         // Odia (Swāgata)
      "خوش آمدید",      // Kashmiri (Khush āmdeed)
    ];
    
    const [currentWelcome, setCurrentWelcome] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWelcome((prev) => (prev + 1) % welcomes.length);
      }, 750);
      
      return () => clearInterval(interval);
    }, [welcomes.length]);
    
    return (
      <div className="welcome transition-all duration-1000 ease-in-out transform">
        {welcomes[currentWelcome]}
      </div>
    );
  };

  return (
    <div className="authentication-container flex h-screen">
      <section className="left w-3/5 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-8xl font-semibold mb-4 h-32 text-white opacity-70">
            <MultilingualWelcome />
          </h1>
        </div>
      </section>
      <section className="right w-2/5 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
          <AuthForm/>
        </div>
      </section>
    </div>
  );
};

export default Authentication;