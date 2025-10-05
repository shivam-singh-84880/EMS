import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)
  return (
    <div id='tasklist' className='bg-[#1c1c1c] p-5 mt-5 rounded h-50'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded items-center'>
            <h2 className='text-lg font-medium w-1/5'>Employee</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active</h5>
            <h5 className='text-lg font-medium w-1/4'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div id='tasklist' className='h-[80%] overflow-y-auto'>
            {authData.employees.map((elem,idx)=>{
            return <div key={idx} className='mb-2 border border-emerald-200 py-2 px-4 flex justify-between rounded items-center'>
            <h2 className='w-1/5'>{elem.firstName}</h2>
            <h3 className='w-1/5 !text-blue-600'>{elem.taskCounts.newTask}</h3>
            <h5 className='w-1/5 !text-yellow-400'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 !text-red-400'>{elem.taskCounts.active}</h5>
        </div>
        })}
        </div>
    </div>
  )
}

export default AllTask