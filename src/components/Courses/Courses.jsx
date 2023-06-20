import React from 'react'

function Courses() {

  const options = [
    'Self-Paced Courses',
    'Resources',
    'Contribute'
  ]
  return (
    <div className='bg-gray flex justify-center'>
      <div className='text-xl flex w-8 text-white'>
        {options.map((option) => (
          <div className='pr-16 bg-black border text-left m-8'>
            {option}
          </div>))}
      </div>
    </div>
  )
}

export default Courses