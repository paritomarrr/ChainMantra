import React from 'react'

function Articles() {
  const topics = [
    'What is Blockchain?',
    'What is Ethereum?',
    'What is Solana?',
    'What is Casper?',
    'What is Proof of Stake?'
  ]
  return (
    <div className='bg-gray flex'>
      <div className='text-xl flex w-8 text-white'>
        {topics.map((topic) => (
          <div className='bg-black border text-left m-8'>
            {topic}
          </div>))}
      </div>
    </div>
  )
}
export default Articles