import { SquareCheckBig } from "lucide-react";

const sectionData = [
  {
    heading: "Complete legal operations oversight",
    points: [
      "Live case monitoring for strategic decision-making",
      "Simplify notice management using bulk uploads, minimize manual mistakes",
      "Protect and manage your critical intellectual property assets",
      "Sync calendars to stay aligned with legal deadlines",
    ],
  },
  {
    heading: "Streamlined contract management",
    points: [
      "Seamless contract creation using intuitive, ready-to-use templates",
      "Smooth collaboration for prompt edits and approvals",
      "On-time alerts for key milestones, renewals, and expirations",
      "Safe repository enabling quick access, retrieval, and audits",
    ],
  },
  {
    heading: "Actionable analytics and insightful reporting",
    points: [
      "Insight-led strategies enabling proactive legal decisions",
      "Effortlessly sync key milestones to enhance time management",
      "Comprehensive reporting to optimize workflows",
      "Access real-time insights through a dynamic dashboard",
    ],
  },
  {
    heading: "Customizable workflows, robust data security",
    points: [
      "Safeguard confidential legal data with advanced security protocols",
      "Enforce role-based access controls to protect sensitive data",
      "Tailor workflows to match your team’s unique operational needs",
      "Reduce compliance risks and prevent legal complications",
    ],
  },
];

export default function LegalSection() {
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
