import { SquareCheckBig } from "lucide-react";

const sectionData = [
  {
    heading: "Streamlined contract creation",
    points: [
      "Generate tailored contracts to meet individual client needs",
      "Leverage smart templates and preset clauses for faster drafting",
      "Accelerate sales cycles with efficient deal closures",
      "Boost sales momentum with custom contracts",
    ],
  },
  {
    heading: "Streamlined e-signing process",
    points: [
      "Incorporate e-signatures to speed up approvals and reduce delays",
      "Seamless collaboration through real-time editing and version tracking",
      "Adopt e-signatures to accelerate deals and boost revenue",
      "Streamline multi-user e-signatures to drive sales performance",
    ],
  },
  {
    heading: "Close deals seamlessly and efficiently",
    points: [
      "Ensure compliance and reduce risks with updated sales contracts",
      "Unified repository for secure, easy storage and quick retrieval",
      "Enhancing organization and simplifying document searchability",
      "Achieve full transparency across the entire contract lifecycle",
    ],
  },
  {
    heading: "Enhance performance and streamline productivity",
    points: [
      "Increase sales productivity with prompt activity notifications",
      "AI-driven reporting and analytics delivering actionable business insights",
      "Make informed sales decisions with data-backed strategies",
      "Leverage seamless integrations to streamline business operations",
    ],
  },
];

export default function SalesSection() {
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
