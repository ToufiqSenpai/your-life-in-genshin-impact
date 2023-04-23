'use client'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()

  }


  return (
    <form className="max-w-md max-mobile:max-w-[95%] m-auto h-max absolute top-0 bottom-0 left-0 right-0 bg-white shadow-1 rounded-lg py-3 px-4">
      <h1 className='text-center font-medium text-xl'>Your life in Genshin Impact</h1>
      <div className="relative z-0 mt-2">
        <input type="text" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your name for diagnose</label>
      </div>
      <div className='mt-2'>
        <h3>Gender</h3>
        <div className="flex items-center mt-1">
          <input id="gender-male" type="radio" value="" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
          <label htmlFor="gender-male" className="ml-2 text-sm font-medium text-gray-900">Male</label>
        </div>
        <div className="flex items-center mt-1">
          <input id="gender-female" type="radio" value="" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
          <label htmlFor="gender-female" className="ml-2 text-sm font-medium text-gray-900">Female</label>
        </div>
      </div>
      <button type='submit' className='bg-blue-500 py-1 w-full mt-2 rounded-full text-white'>Submit</button>
    </form>
  )
}
