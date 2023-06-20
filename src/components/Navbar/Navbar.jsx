import React from 'react'

function Navbar() {
  return (
    <div className='m-16 flex justify-between'>
        <div className='text-regalblue text-base'>
            ChainMantra
        </div>
        <div className='text-white text-sm mr-16'>
            <ul className='flex flex-row'>
                <li>Courses</li>
                <li className='ml-8'>Tutorials</li>
                <li className='ml-8'>Resources</li>
                <li className='ml-8'>Jobs</li>
                <li className='ml-8'>Events</li>
            </ul>
        </div>
        <div>
            <button className='text-white border border-[#3EDAD8]-300 p-2 pl-4 pr-4 rounded-md text-sm mr-4 font-["Open_Sans"]'>
                Login
            </button>
        </div>
    </div>
  )
}

export default Navbar