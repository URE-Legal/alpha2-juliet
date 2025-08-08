import { SquareCheckBig } from "lucide-react";

const sectionData = [
  {
    heading: "Enterprise notice management platform",
    desc: "Efficiently manage legal notices with early warning alerts, enabling timely action and better decision-making for reduced risk and enhanced compliance",
    points: [
      {
        heading: "Notice lifecycle",
        desc: "Manage your entire notice lifecycle at one place",
      },
      {
        heading: "Automate notices",
        desc: "Create custom notice templates to save time",
      },
      {
        heading: "Bulk upload",
        desc: "Bulk upload notices using our AI-backed uploading tool",
      },
      {
        heading: "Secure storage",
        desc: "Securely store and track all notice data in one place",
      },
    ],
  },
  {
    heading: "Optimize your notice workflows with our tools",
    desc: "Collaborate seamlessly with your team to manage legal notices using approval workflows, escalation protocols, and integrated collaboration tools for efficient resolution",
    points: [
      {
        heading: "Approvals",
        desc: "Streamline approvals with automated workflow",
      },
      {
        heading: "Obligations",
        desc: "Stay compliant and meet legal deadlines effortlessly",
      },
      {
        heading: "Escalations",
        desc: "Optimize your legal workflows with proper escalations",
      },
      {
        heading: "Expense management",
        desc: "Efficient Payment Processing for Control",
      },
    ],
  },
  {
    heading: "Single integrated suite for legal teams",
    desc: "Stay on top of every task with real-time collaboration tools, integrated calendars, customizable workflows, insightful reports, timely alerts, and more",
    points: [
      {
        heading: "Dashboard",
        desc: "Real-time Insights for monitoring notice performance",
      },
      {
        heading: "Email alerts",
        desc: "Stay up-to-date with timely notifications and alerts",
      },
      {
        heading: "MIS & reporting",
        desc: "Analyze legal notice data effectively",
      },
      {
        heading: "Courier tracking",
        desc: "Keep track of all notice courier dockets at one place",
      },
    ],
  },
];

export default function NoticeSection() {
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
