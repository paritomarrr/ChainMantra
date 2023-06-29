import React from 'react'

function Menu() {
  const options = [
    'Self-Paced Courses',
    'Resources',
    'Contribute'
  ]
  return (
    <>
    <div className='pt-16 text-lg text-white text-center'>
      Discover the world of <span className='text-regalblue'>Blockchain</span>.
    </div>
    <div className='bg-gray flex'>
      <div className='text-xl flex w-8 text-white'>
        {options.map((option) => (
          <div className='bg-black border text-left m-8'>
            {option}
          </div>))}
      </div>
    </div>
    </>
  )
}

export default Menu