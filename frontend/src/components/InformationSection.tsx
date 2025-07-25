export default function InformationSection() {
  return (
    <div className='px-16 py-12 bg-white'>
      <div className='text-center'>
        <div className='text-lg text-blue-700'>Information Center</div>
        <h2 className='font-bold'>Learn what makes our platform a success</h2>
      </div>

      <div className='mt-12 flex flex-col gap-8 *:*:h-72'>
        <div className='flex gap-8 *:hover:transition-transform *:duration-300 *:hover:scale-101'>
          <div className='basis-3/5 p-8 border border-blue-500 rounded-lg shadow-lg bg-blue-500 text-white'>
            <p className='font-bold text-xl mb-4'>Blogs</p>
            <p>
              Gain expert perspectives on legal technology, contract workflows,
              compliance strategies, and beyond
            </p>
          </div>
          <div className='basis-1/4 p-8 border border-slate-200 rounded-lg shadow-lg bg-slate-200'>
            <p className='font-bold text-xl mb-4'>Press Release</p>
            <p>
              Discover how URE IPR enables legal teams to achieve measurable
              outcomes and boost business performance.
            </p>
          </div>
          <div className='basis-1/4 p-8 border border-blue-500 rounded-lg shadow-lg bg-blue-500 text-white'>
            <p className='font-bold text-xl mb-4'>Product Tour</p>
            <p>
              Explore groundbreaking innovations reshaping legal tech and
              enhancing operational processes.
            </p>
          </div>
        </div>

        <div className='flex gap-8 *:hover:transition-transform *:duration-300 *:hover:scale-101'>
          <div className='basis-1/4 p-8 border border-slate-200 rounded-lg shadow-lg bg-slate-200'>
            <p className='font-bold text-xl mb-4'>API</p>
            <p>
              Utilize robust APIs to effortlessly embed URE IPR’s features into
              your existing workflows.
            </p>
          </div>
          <div className='basis-1/4 p-8 border border-blue-500 rounded-lg shadow-lg bg-blue-500 text-white'>
            <p className='font-bold text-xl mb-4'>News</p>
            <p>
              Stay informed with the latest news, insights, and updates from URE
              IPR.
            </p>
          </div>
          <div className='basis-3/5 p-8 border border-slate-200 rounded-lg shadow-lg bg-slate-200'>
            <p className='font-bold text-xl mb-4'>Help Center</p>
            <p>
              Get support, browse helpful guides, and find answers—all in one
              place at our Help Center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
