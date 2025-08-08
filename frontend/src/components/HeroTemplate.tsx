type HeroTemplate = {
  bluehead?: string;
  heading: string;
  desc: string;
};

export default function HeroTemplate({ text }: { text: HeroTemplate }) {
  return (
    <section className='bg-slate-300 text-center py-24 px-48'>
      {text.bluehead && (
        <div className='w-fit text-center font-bold bg-blue-700 text-white px-4 py-1 m-auto rounded-4xl'>
          {text.bluehead}
        </div>
      )}
      <div className='text-6xl font-bold text-gray-900 my-8'>
        {text.heading}
      </div>
      <p className='text-gray-600 max-w-4xl mx-auto mb-12'>{text.desc}</p>
      <div className='flex justify-center space-x-4'>
        <button className='text-2xl text-white bg-slate-800 p-4 border border-slate-800 rounded hover:bg-blue-800 hover:border-blue-800 shadow-lg'>
          Book Demo
        </button>
        <button className='text-2xl text-white bg-slate-800 p-4 border border-slate-800 rounded hover:bg-blue-800 hover:border-blue-800 shadow-lg'>
          Play Live Demo
        </button>
      </div>
    </section>
  );
}
