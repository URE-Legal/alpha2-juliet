import { SquareCheckBig } from "lucide-react";

const sectionData = [
  {
    heading: "Enhance budget control",
    points: [
      "Streamline budgeting and uncover cost-saving insights",
      "Leverage advanced analytics with tailored, customizable reporting tools",
      "Monitor spending for smarter, data-driven financial choices",
      "Simplify audits to maintain precise and reliable financial records",
    ],
  },
  {
    heading: "Unlock process visibility",
    points: [
      "Align finance and legal teams through seamless collaboration",
      "Facilitate real-time contract sharing and collaborative editing",
      "Accelerate contract reviews and ensure version control",
      "Streamline approvals, maintain regulatory compliance",
    ],
  },
  {
    heading: "Robust protection and compliance",
    points: [
      "Safeguard critical financial data with advanced security protocols",
      "Maintain compliance with industry standards and regulations",
      "Protect confidential data, ensuring robust privacy controls",
      "Use advanced encryption to maintain data confidentiality and integrity",
    ],
  },
  {
    heading: "Unlock peak efficiency",
    points: [
      "Customize the platform to meet your finance team's specific needs",
      "Refine the platform to boost operational efficiency",
      "Maximize productivity and drive higher ROI",
      "Ensure smooth integration with your current financial systems",
    ],
  },
];

export default function FinanceSection() {
  return (
    <section className='bg-white'>
      {sectionData.map((section, index) => (
        <div key={index} className='text-center max-w-1/2 m-auto py-12'>
          <h2 className='font-bold pb-4'>{section.heading}</h2>
          {section.points.map((point, index) => (
            <p key={index} className='text-left pb-4'>
              <SquareCheckBig className='inline mr-2 text-blue-500' />
              <span className='text-gray-500'>{point}</span>
            </p>
          ))}
        </div>
      ))}
    </section>
  );
}
