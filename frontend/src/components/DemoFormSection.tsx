export default function DemoFormSection() {
  return (
    <div className='px-16 py-12 flex bg-slate-200'>
      <div className='basis-1/2'>
        <h2 className='font-bold'>
          Need clarity? Simplify your legal operations with expert guidance.
        </h2>
        <p className='text-slate-700 mt-4'>
          Schedule a personalized demo with our product specialist.
        </p>
        <ul className='mt-4 pl-4 text-slate-700'>
          <li>• Customized to your unique workflow</li>
          <li>• Get clear answers to your queries</li>
          <li>• No purchase obligation</li>
        </ul>
      </div>

      <div className='basis-1/2 size-full p-6 border bg-white rounded'>
        <div className='text-lg'>Schedule your free live demo</div>
        <div className='flex mt-4 space-x-2'>
          <div className='flex justify-center items-center size-6 bg-blue-600 rounded-full text-white font-bold'>
            1
          </div>
          <div>Fill out the form</div>
          <div className='flex justify-center items-center size-6 bg-blue-600 rounded-full text-white font-bold'>
            2
          </div>
          <div>Book a time slot</div>
          <div className='flex justify-center items-center size-6 bg-blue-600 rounded-full text-white font-bold'>
            3
          </div>
          <div>Attend a demo</div>
        </div>
        <div className='flex flex-wrap gap-4 mt-4'>
          <input
            type='text'
            placeholder='Name'
            className='w-[calc(50%-0.5rem)] h-12 p-2 rounded-sm border border-slate-300'
          />
          <input
            type='text'
            placeholder='Business Email'
            className='w-[calc(50%-0.5rem)] h-12 p-2 rounded-sm border border-slate-300'
          />
          <input
            type='text'
            placeholder='Company Name'
            className='w-[calc(50%-0.5rem)] h-12 p-2 rounded-sm border border-slate-300'
          />
          <div className='w-[calc(50%-0.5rem)] h-12 rounded-sm border border-slate-300 flex overflow-hidden'>
            <select className='flex-1'>
              <option value='+91'>+91</option>
              <option value='+1'>+1</option>
              <option value='+44'>+44</option>
            </select>
            <input
              type='text'
              maxLength={10}
              className='flex-1 px-2 rounded-r-sm outline-none'
            />
          </div>
          <button className='bg-blue-600 w-full text-white h-12 rounded-sm'>
            Schedule your Demo
          </button>
          <div className='w-full text-center text-sm'>
            By submitting, you accept our Privacy Policy and Terms.
          </div>
        </div>
      </div>
    </div>
  );
}
