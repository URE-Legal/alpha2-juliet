import { SquareCheckBig } from "lucide-react";

const sectionData = [
  {
    heading: "Trademark Management Suite for enterprises",
    desc: "Effectively manage and safeguard your trademark portfolio with our IP management suite, offering smart IP search, real-time monitoring, and insightful analytics",
    points: [
      {
        heading: "Trademark search",
        desc: "AI-powered search for quick and accurate results",
      },
      {
        heading: "Image Defense",
        desc: "Image infringement protection for visual assets",
      },
      {
        heading: "Phonetic Safety",
        desc: "Utilize phonetic search capabilities for your brand",
      },
      {
        heading: "Intelligent repository",
        desc: "Centralized secure storage and easy access",
      },
    ],
  },
  {
    heading: "AI-powered Patent Management Suite",
    desc: "Simplify patent management with AI-driven tracking, smart search, and optimized workflows to boost efficiency and safeguard your IP assets",
    points: [
      {
        heading: "Patent portfolio management",
        desc: "Access AI-based patent management",
      },
      {
        heading: "Automated tracking",
        desc: "Keep track of your patents at every stage",
      },
      {
        heading: "Workflows",
        desc: "Streamlined management with efficient patent workflows",
      },
      {
        heading: "Email Alerts",
        desc: "Keep track of changes to your IP assets with email alerts",
      },
    ],
  },
  {
    heading: "Copyright and Design Management Suite",
    desc: "Our copyright and design management suite simplifies the protection and handling of creative assets through automated workflows and insightful analytics",
    points: [
      {
        heading: "Copyright monitoring",
        desc: "Effortlessly track & prevent infringement",
      },
      {
        heading: "Design tracking",
        desc: "Protect design rights and monitor infringement",
      },
      {
        heading: "Intelligent repository",
        desc: "Access IP information with smart search",
      },
      {
        heading: "IP protection",
        desc: "Protect your IP, detect infringement and take actions",
      },
    ],
  },
  {
    heading: "Manage International Trademarks with ease",
    desc: "Simplify global trademark management with our all-in-one suite designed to give you full control over IP assets and ensure worldwide protection",
    points: [
      {
        heading: "Smart search",
        desc: "Get instant international trademark search results",
      },
      {
        heading: "WIPO integration",
        desc: "Manage international trademarks with WIPO",
      },
      {
        heading: "Automated alerts",
        desc: "Stay informed with timely updates and alerts",
      },
      {
        heading: "MIS and reporting",
        desc: "Analyze trademark data and get real-time insights",
      },
    ],
  },
];

export default function IPRSection() {
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
