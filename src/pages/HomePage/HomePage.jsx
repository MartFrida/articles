import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-header-color'>
      <div className='w-full bg-hero-pattern  bg-cover bg-gray-50 h-screen p-36 flex align-center '>
        <div className='mx-auto'>
          <h1 className='text-8xl text-white'>
            Publish your passions
          </h1>
          <h2 className="font-display">
            This uses the Oswald font
          </h2>
          <blockquote className="text-base md:text-md 3xl:text-lg">
            Oh I gotta get on that internet, I'm late on everything!
          </blockquote>
        </div>
      </div>
    </div>

  )
}

export default HomePage