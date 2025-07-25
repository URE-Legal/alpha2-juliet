export default function CopyrightPageSkeleton() {
  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white rounded-lg shadow p-6 h-80 animate-pulse'>
          <div className='h-6 w-1/3 bg-gray-300 rounded mb-4'></div>
          <div className='h-4 w-2/3 bg-gray-300 rounded mb-2'></div>
          <div className='h-4 w-1/2 bg-gray-300 rounded mb-2'></div>
          <div className='h-4 w-1/4 bg-gray-300 rounded' />
        </div>

        <div className='flex flex-col gap-6 h-80'>
          <div className='bg-white rounded-lg shadow p-6 flex-1 animate-pulse'>
            <div className='h-5 w-1/2 bg-gray-300 rounded mb-4'></div>
            <div className='h-4 w-full bg-gray-300 rounded' />
          </div>
          <div className='bg-white rounded-lg shadow p-6 flex-1 animate-pulse'>
            <div className='h-5 w-1/3 bg-gray-300 rounded mb-4'></div>
            <div className='h-4 w-2/3 bg-gray-300 rounded' />
          </div>
        </div>
      </div>
    </div>
  );
}
