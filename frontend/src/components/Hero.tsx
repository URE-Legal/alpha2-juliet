"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={`bg-slate-300 text-center py-24 px-48 transform transition-all duration-500 ease-out ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className='text-6xl font-bold text-gray-900 mb-8'>
        AI-Driven Legal Workflow Platform
        <br />
        <span className='text-5xl'>Designed for Modern Enterprises</span>
      </div>
      <p className='text-gray-600 max-w-4xl mx-auto mb-12'>
        URE IPR is an AI-powered legal tech platform that enables enterprises to
        streamline legal operations, automate routine tasks, and improve
        efficiency for managing legal workflows at scale.
      </p>
      <div className='flex justify-center space-x-4'>
        <button className='text-2xl text-white bg-slate-800 p-4 border border-slate-800 rounded hover:bg-blue-800 hover:border-blue-800 shadow-lg'>
          Book Demo
        </button>
        <button className='text-2xl text-white bg-slate-800 p-4 border border-slate-800 rounded hover:bg-blue-800 hover:border-blue-800 shadow-lg'>
          Play Live Demo
        </button>
      </div>
    </section>
  );
}
