import { SquareCheckBig } from "lucide-react";

const sectionData = [
  {
    heading: "Streamline HR functions",
    points: [
      "Streamline document drafting for precision and legal compliance",
      "Ensure legal accuracy with built-in checks",
      "Speed up operations with intelligent automated workflows",
      "Strengthen HR strategies using data-driven trend insights",
    ],
  },
  {
    heading: "Accelerate approvals and streamline signing workflows",
    points: [
      "Speed up approvals with e-signatures and automated workflows",
      "Track signing progress to reduce delays and boost efficiency",
      "Quickly obtain signed contracts to speed up hiring processes",
      "Streamline approvals and signing with automated workflows for efficiency",
    ],
  },
  {
    heading: "Simplified centralized access",
    points: [
      "Manage and retrieve files with streamlined organization",
      "Securely store documents for streamlined, clutter-free access",
      "Foster an organized HR workspace to boost team productivity",
      "Locate files fast with efficient storage and easy retrieval",
    ],
  },
  {
    heading: "Effortless management of employee documents",
    points: [
      "Seamlessly connect with your current HR software systems",
      "Leverage AI to align HR strategies with core business objectives",
      "Unlock contract insights to enhance employee management decisions",
      "Keep contracts current with automated notifications and reminders",
    ],
  },
];

export default function HRSection() {
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
