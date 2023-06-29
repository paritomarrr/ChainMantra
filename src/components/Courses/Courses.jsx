import React from 'react'

function Courses() {

  const options = [
    'Ethereum',
    'Solana',
    'Casper'
  ]
  return (
    <div className='bg-gray flex'>
      <div className='text-xl flex w-8 text-white'>
        {options.map((option) => (
          <div className='bg-black border text-left m-8'>
            {option}
          </div>))}
      </div>
    </div>
  )
}

export default Courses