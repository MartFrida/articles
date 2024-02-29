import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-header-color text-white text-center '>
      <div className='w-full bg-hero-pattern  bg-cover bg-gray-50 h-screen p-36 flex align-center '>
        <div className='mx-auto flex flex-col gap-y-10'>
          <h1 className='text-6xl font-bold'>
            Publish your passions
          </h1>
          <blockquote >
            <p className=" text-3xl">"Words are a lens to focus one's mind."</p>
            <footer className='text-right text-2xl'>- Ayn Rand</footer>
          </blockquote>
          <button className='transition ease-in-out delay-150 bg-medium-purple rounded-full py-3 px-6 max-w-48 mx-auto text-lg font-medium tracking-wide hover:-translate-y-1 hover:scale-105 hover:bg-medium-purple-hover duration-300'>Write article</button>


        </div>
      </div>
    </div>

  )
}

export default HomePage