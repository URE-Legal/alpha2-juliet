import {
  DollarSign,
  Headset,
  Lock,
  ShieldCheck,
  Stamp,
  TrendingUpDown,
} from "lucide-react";

const texts = [
  {
    icon: <DollarSign className='size-12 inline text-blue-500' />,
    heading: "Revenue Preservation",
    desc: "Comprehensive contract lifecycle—from auto-generation to execution, collaboration, and obligation tracking. Accelerate revenue growth with faster contract cycles.",
  },
  {
    icon: <Lock className='size-12 inline text-blue-500' />,
    heading: "Risk Mitigation",
    desc: "Monitor legal matters and streamline stakeholder interactions with automation. Minimize risks by addressing obligations promptly.",
  },
  {
    icon: <Stamp className='size-12 inline text-blue-500' />,
    heading: "Brand Protection",
    desc: "Safeguard your brand assets and detect infringements with ease. Strengthen identity and build lasting brand value.",
  },
  {
    icon: <TrendingUpDown className='size-12 inline text-blue-500' />,
    heading: "Future Prediction",
    desc: "Utilize data from all touchpoints to enhance efficiency and maximize ROI. Anticipate actions through historical insights to protect your business.",
  },
  {
    icon: <ShieldCheck className='size-12 inline text-blue-500' />,
    heading: "Data Security",
    desc: "Robust end-to-end encryption, SSL protocols, automated backups, and ISO standards to ensure complete data security and threat protection.",
  },
  {
    icon: <Headset className='size-12 inline text-blue-500' />,
    heading: "24/7 Support",
    desc: "24/7 customer support backed by domain experts to ensure seamless onboarding and rapid issue resolution.",
  },
];

export default function URETrakSection() {
  return (
    <div className='px-16 py-12 bg-white'>
      <div className='text-center'>
        <div className='text-lg text-blue-700'>One Stop Solution</div>
        <h2 className='font-bold'>
          URETrak: Your Control Center for Legal Workflows
        </h2>
      </div>

      <div className='grid grid-cols-3 gap-8 mt-12'>
        {texts.map((text, index) => (
          <div
            key={index}
            className='border border-slate-300 rounded shadow-lg p-8 text-center'
          >
            {text.icon}
            <span className='text-blue-500 text-2xl ml-2'>{text.heading}</span>
            <p className='mt-4'>{text.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
