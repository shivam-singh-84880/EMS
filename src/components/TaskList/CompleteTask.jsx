import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div id='tasklist' className='flex-shrink-0 h-full w-[300px] bg-yellow-400 p-5 rounded-xl overflow-y-auto'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription} 
            </p>
            <div className='rounded bg-green-500 py-1 mt-4 px-2 text-sm'>
            <button className='w-full'>Complete</button>
            </div>
        </div>
  )
}

export default CompleteTask