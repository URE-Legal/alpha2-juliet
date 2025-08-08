import { SquareCheckBig } from "lucide-react";

const sectionData = [
  {
    heading: "Smart debt recovery solutions",
    desc: "Gain complete visibility into borrower profiles, overdue payments, and missed installments for a faster, more effective recovery process",
    points: [
      {
        heading: "Efficient Data Handling",
        desc: "Real-time delinquency updates with automated borrower allocation",
      },
      {
        heading: "Monitor Communication",
        desc: "Dispatch bulk reminders via channels such as SMS, email, WhatsApp and much more",
      },
      {
        heading: "Delay Prevention",
        desc: "Use pre-designed notice templates to avoid delaying your collection process",
      },
      {
        heading: "Safeguard Data",
        desc: "Ensure data compliance with privacy regulations and quality standards with role-based access controls",
      },
    ],
  },
  {
    heading: "Leverage smart workflows for recovery",
    desc: "Streamline your collections process with intuitive automated workflows, minimizing manual effort and boosting efficiency",
    points: [
      {
        heading: "Escalation Protocols",
        desc: "Timely resolution with automated scalation workflow for overdue accounts",
      },
      {
        heading: "Dynamic Payment Plans",
        desc: "Manage dynamic payment plans tailored to each customer for improved debt recovery",
      },
      {
        heading: "Efficient Notice Creation",
        desc: "Generate and send bulk legal notices, reminders, coupled with automated task assignments",
      },
      {
        heading: "Never miss updates",
        desc: "Keep a tab on notices' delivery with real-time notifications",
      },
    ],
  },
  {
    heading: "Comprehensive arbitration tracking",
    desc: "Track and manage collections cases efficiently on a unified platform, enabling instant access to critical data for faster resolution",
    points: [
      {
        heading: "Document Management",
        desc: "Centralized platform for storage, and retrieval of legal documents whenever required",
      },
      {
        heading: "Quick Details",
        desc: "Easily retrieve case details, parties, dates and historical data to resolve disputes quickly",
      },
      {
        heading: "Stage Tracking",
        desc: "Monitor progress of any dispute based on stages with real-time updates for all stakeholders",
      },
      {
        heading: "Audit Trail",
        desc: "Maintain an audit trail of actions and communications for transparency and compliance purposes",
      },
    ],
  },
  {
    heading: "Strategic analytics and reporting",
    desc: "Gain valuable insights with robust analytics and reporting tools, empowering you to optimize collections strategies and make informed decisions",
    points: [
      {
        heading: "Data Analytics",
        desc: "Gain insights into collection performance with detailed analytics and reporting tools",
      },
      {
        heading: "Performance Monitoring",
        desc: "Measure the effectiveness of various collection strategies and channels",
      },
      {
        heading: "Trend Analysis",
        desc: "Identify trends and patterns to optimize debt recovery processes",
      },
      {
        heading: "Advanced Reporting",
        desc: "Generate comprehensive reports for informed decision-making and compliance",
      },
    ],
  },
];

export default function CollectionSection() {
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
