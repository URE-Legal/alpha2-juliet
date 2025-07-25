"use client";

import { SquareCheckBig } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const texts = [
  {
    heading: "Contract Lifecycle",
    desc: "Enhance contract oversight and automate the full lifecycle using our user-friendly platform",
    points: [
      "Leverage AI technology to boost contract management efficiency",
      "Enable real-time collaboration for efficient contract edits",
      "Accelerate contract execution through e-signing",
      "Unlock valuable insights with comprehensive reporting features",
    ],
  },
  {
    heading: "Litigation Management",
    desc: "Revolutionize legal portfolio handling using automation for better insights and detailed reporting",
    points: [
      "Stay updated with live case tracking and instant notifications",
      "Maintain regulatory compliance and never miss key legal milestones",
      "Evaluate legal data effectively with tailored reporting tools",
      "Securely manage and retrieve all your essential legal data from a single platform",
    ],
  },
  {
    heading: "IPR Management",
    desc: "Boost your IP operations through powerful automation and AI integration",
    points: [
      "Simplify portfolio oversight using intelligent IP automation tools",
      "Protect your intellectual property with robust security features",
      "Easily organize and handle your critical IP assets effortlessly",
      "Leverage smart insights with powerful analytics and detailed reporting",
    ],
  },
  {
    heading: "Legal Notices Workflow",
    desc: "Modernize legal notices with a full-suite platform offering auto-generation, digital storage, and customizable workflows",
    points: [
      "Generate legal notices effortlessly with intelligent automation",
      "Accelerate notice creation with bulk upload support",
      "Expand your reach with multi-channel legal communication",
      "Monitor notices via read receipts and secure digital archives",
    ],
  },
  {
    heading: "Counsel Network Management",
    desc: "Elevate legal network oversight with advanced tech and AI-powered insights across matters and counsel",
    points: [
      "Find nearby legal experts with location-based search",
      "Effortlessly collaborate with your legal counsel",
      "Advanced legal project management built for efficiency",
      "Gain actionable insights with custom machine learning models",
    ],
  },
];

export default function FeatureSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <div className='px-16 py-12 bg-white'>
      <div className='text-center'>
        <div className='text-lg text-blue-700'>Explore the Features</div>
        <h2 className='font-bold'>
          Comprehensive Legal Solutions for Enterprise Scale
        </h2>
      </div>

      <div
        className='relative overflow-hidden w-full h-76 bg-white'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slider */}
        <div
          className='flex transition-transform duration-700 ease-in-out h-full'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {texts.map((text, index) => (
            <div
              key={index}
              className='min-w-full flex flex-col items-center justify-center text-lg font-medium text-gray-800 px-4'
            >
              <div className='text-center max-w-1/2'>
                <h1>{text.heading}</h1>
                <p className='pb-4'>{text.desc}</p>
                {text.points.map((_, index) => (
                  <p key={index} className='text-left'>
                    <SquareCheckBig className='inline mr-2 text-blue-500' />
                    <span className='text-gray-500'>{text.points[index]}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2'>
          {texts.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
