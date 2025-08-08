import { SquareCheckBig } from "lucide-react";

const sectionData = [
  {
    heading: "Litigation management for enterprises made simpler",
    desc: "Simplify litigation with unified case tracking, automated alerts, and all-India court search—everything in one streamlined platform.",
    points: [
      {
        heading: "Litigation management",
        desc: "Manage the entire lifecycle of your matters",
      },
      {
        heading: "New case alerts",
        desc: "AI-powered new cases discovery based across India",
      },
      {
        heading: "Auto-updates",
        desc: "Orders, judgements and case hearing dates alerts",
      },
      {
        heading: "Litigation search",
        desc: "Search our vast database covering 200 Mn+ cases",
      },
    ],
  },
  {
    heading: "Refine your legal strategy using powerful AI-driven insights",
    desc: "Boost efficiency and reduce risk with lawyer analytics, win predictions, and budget tracking tools tailored for your legal team",
    points: [
      {
        heading: "Lawyer insights",
        desc: "Optimize legal strategy with valuable lawyer insights",
      },
      {
        heading: "Payments & budget",
        desc: "Efficiently process payments, manage expenses",
      },
      {
        heading: "Win prediction",
        desc: "AI-based case result prediction for faster decisions",
      },
      {
        heading: "Obligations",
        desc: "Stay compliant and meet legal deadlines effortlessly",
      },
    ],
  },
  {
    heading: "Smart tools for efficient litigation management",
    desc: "Streamline your litigation management with intelligent tools, so you can focus on priorities that drive results",
    points: [
      {
        heading: "Real-time insights",
        desc: "Monitor performance with data analysis",
      },
      {
        heading: "Email alerts",
        desc: "Stay informed effortlessly with timely notifications",
      },
      {
        heading: "MIS & reporting",
        desc: "Custom reports for precise litigation analysis",
      },
      {
        heading: "Secure storage",
        desc: "Safely store and access litigation data in one place",
      },
    ],
  },
];

export default function LitigationSection() {
  return (
    <section className='bg-white'>
      {sectionData.map((section, index) => (
        <div key={index} className='text-center max-w-1/2 m-auto py-12'>
          <h2 className='font-bold pb-2'>{section.heading}</h2>
          <p className='pb-8'>{section.desc}</p>
          {section.points.map((point, index) => (
            <p key={index} className='text-left pb-4'>
              <SquareCheckBig className='inline mr-2 text-blue-500' />
              <span className='font-bold mr-1.5'>{`${point.heading}:`}</span>
              <span className='text-gray-500'>{point.desc}</span>
            </p>
          ))}
        </div>
      ))}
    </section>
  );
}
