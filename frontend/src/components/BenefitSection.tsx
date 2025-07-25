import { ChartPie, Clock3, Map, NotebookTabs } from "lucide-react";

const texts = [
  {
    icon: <Map className='text-white bg-blue-500 p-1 size-12 rounded inline' />,
    heading: "Optimised Workflow",
    desc: "Streamline legal processes with a digital solution to achieve maximum overall efficiency.",
  },
  {
    icon: (
      <Clock3 className='text-white bg-blue-500 p-1 size-12 rounded inline' />
    ),
    heading: "Time Efficiency",
    desc: "Automate repetitive legal tasks to significantly reduce turnaround time and manual effort.",
  },
  {
    icon: (
      <ChartPie className='text-white bg-blue-500 p-1 size-12 rounded inline' />
    ),
    heading: "Data Insights",
    desc: "Leverage smart analytics to gain actionable legal insights and make data-driven decisions faster.",
  },
  {
    icon: (
      <NotebookTabs className='text-white bg-blue-500 p-1 size-12 rounded inline' />
    ),
    heading: "Organised Tasks",
    desc: "Organize and centralize legal workflows to eliminate chaos and ensure seamless task management.",
  },
];

export default function BenefitSection() {
  return (
    <div className='px-16 py-12 bg-slate-100 flex'>
      <div className='flex justify-center items-center'>
        <div>
          <div className='text-lg text-blue-700'>Enjoy the Benefits</div>
          <h2 className='font-bold'>
            Legal work doesn't have to be overwhelming.
          </h2>
        </div>
      </div>
      <div className='basis-3/5 grid grid-cols-2 gap-8'>
        {texts.map((text, index) => (
          <div key={index}>
            {text.icon}
            <span className='text-blue-500 text-2xl ml-2'>{text.heading}</span>
            <p className='mt-2'>{text.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
