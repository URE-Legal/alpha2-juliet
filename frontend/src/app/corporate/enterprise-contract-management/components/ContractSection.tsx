import { SquareCheckBig } from "lucide-react";

const sectionData = [
  {
    heading: "Revolutionize contract management using our AI-driven tools",
    desc: "Streamline your Contract Management with smart AI-powered features and reduce time spent on drafting and auditing",
    points: [
      {
        heading: "Clause generation",
        desc: "AI-powered contract clauses in seconds",
      },
      {
        heading: "Clause paraphrasing",
        desc: "Quick and easy contract revisions",
      },
      {
        heading: "Contract review",
        desc: "AI-powered contract review and risk management",
      },
      {
        heading: "Smart insights",
        desc: "Actionable insights from your contracts",
      },
    ],
  },
  {
    heading: "Create contracts and automate templates",
    desc: "Easily create contracts using our automated templates and a built-in clause library for faster drafting",
    points: [
      {
        heading: "DIY contracts",
        desc: "Create custom contracts with ease",
      },
      {
        heading: "Contract templates",
        desc: "Save time with pre-built contract templates",
      },
      {
        heading: "Clause library",
        desc: "Access a library of standard contract clauses",
      },
      {
        heading: "Risk management",
        desc: "Review your contracts quickly with AI's help",
      },
    ],
  },
  {
    heading: "Edit your contracts and collaborate",
    desc: "Collaborate with your team to edit contracts using real-time tools, version control, and approval workflows",
    points: [
      {
        heading: "In-built editor",
        desc: "Edit contracts within the tool",
      },
      {
        heading: "Third party collab",
        desc: "Work together with third parties in real-time",
      },
      {
        heading: "Access control",
        desc: "Granular access controls for rights & permissions",
      },
      {
        heading: "Version control",
        desc: "Track changes and versions in the Contract Editor",
      },
    ],
  },
  {
    heading: "Seamless e-signing for contract execution",
    desc: "Simplify contract execution with seamless e-signatures, e-stamps, smart alerts, and obligation tracking - ensuring compliance and boosting efficiency",
    points: [
      {
        heading: "E-signing",
        desc: "Seamless digital signatures of contracts",
      },
      {
        heading: "E-stamps",
        desc: "Attach digitized stamp papers to your contracts",
      },
      {
        heading: "E-mail alerts",
        desc: "Receive notifications for key contract events",
      },
      {
        heading: "Approvals",
        desc: "Compliance instead of obligations & approvals",
      },
    ],
  },
  {
    heading: "Contract reporting & post-execution",
    desc: "Our intuitive platform streamlines reporting with customizable dashboards and ensures smooth, hassle-free post-execution contract management",
    points: [
      {
        heading: "Analytics dashboard",
        desc: "Gain valuable insights into contract data",
      },
      {
        heading: "MIS and reporting",
        desc: "Generate reports on contract performance",
      },
      {
        heading: "Counter parties",
        desc: "Contract segregation to identify valuable vendors",
      },
      {
        heading: "Renewals",
        desc: "Automatic reminders for upcoming contract renewals",
      },
    ],
  },
];

export default function ContractSection() {
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
