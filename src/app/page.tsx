"use client"
import { useState } from 'react'
import { slides } from '../data/carouselData.json'
import imageDark from '../../public/images/image-about-dark.jpg'
import imageLight from '../../public/images/image-about-light.jpg'
import Image from 'next/image'

export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
  }

  return (
    <>
      <nav className='absolute left-56 z-10 text-white pt-6 ml-10'>
        <ul className='flex items-center'>
          <a className='text-3xl' href='#'>room</a>
          <div className='mt-2 ml-9 flex gap-6'>
            <a className='hover:border-solid hover:border-2' href='#'>home</a>
            <a href='#'>shop</a>
            <a href='#'>about</a>
            <a href='#'>contact</a>
          </div>
        </ul>
      </nav>
      <main className='grid grid-cols-2 max-w-[1440px] w-full m-auto items-center gap-10 relative'>
        <div className="flex justify-center items-center overflow-hidden">
          {slides.map((item, id) => <img src={item.src} alt={item.alt} key={id} className={currentSlide === id ? "block" : "hidden"} />)}
        </div>
        <div className='p-16 relative'>
          <h1 className='text-5xl font-semibold'>Discover innovative ways to decorate
          </h1>
          <p className='text-gray-400 text-sm mt-7 mb-6'>
            We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
          </p>
          <a href="#" className='flex items-center uppercase tracking-[1rem] hover:text-gray-400 hover:fill-slate-400'>Shop Now
            <svg width="40" height="15" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill-rule="nonzero" />
            </svg>
          </a>
          <div className=' absolute start-[-40px] bottom-[-42px] bg-black items-center justify-between h-16 pt-1 px-3 flex w-32'>
            <button onClick={nextSlide}><svg className='cursor-pointer' width="14" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#fff" fill="none" fill-rule="evenodd" /></svg></button>
            <button onClick={prevSlide}><svg className='cursor-pointer' width="14" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#fff" fill="none" fill-rule="evenodd" /></svg></button>
          </div>
        </div>
      </main>
      <div className='flex m-auto h-full max-w-[1440px]'>
        <Image className='w-1/3' src={imageDark} alt='stool and center table' />
        <div className='w-1/3 p-5 align-middle'>
          <h2 className='uppercase font-bold tracking-[.5rem]'>
            About our furniture
          </h2>
          <p className='text-gray-400 text-sm'>
            Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>
        <Image className='w-1/3' src={imageLight} alt='stool' />
      </div>
      <div>
      </div>
    </>
  )
}
