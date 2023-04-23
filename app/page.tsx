'use client'
import { Inter } from 'next/font/google'
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState({
    name: '',
    gender: 'MALE'
  })
  const [errors, setErrors] = useState({
    name: '',
    gender: ''
  })

  const { push } = useRouter()

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()

    fetch('/api/diagnose', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(response => {
      if(response.status == 400) {
        setErrors(response.errors)
      } else {
        push(`/result?name=${data.name}&gender=${data.gender}`)
      }
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.name, data)
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md max-mobile:max-w-[95%] m-auto h-max absolute top-0 bottom-0 left-0 right-0 bg-white shadow-1 rounded-lg py-3 px-4">
      <h1 className='text-center font-medium text-xl'>Your life in Genshin Impact</h1>
      <div className="relative z-0 mt-2">
        <input type="text" id="name" name='name' onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your name for diagnose</label>
      </div>
      {errors.name && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{errors.name}</p>}
      <div className='mt-2'>
        <h3>Gender</h3>
        <div className="flex items-center mt-1">
          <input id="gender-male" type="radio" value="MALE" name="gender" onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" checked={data.gender == 'MALE'} />
          <label htmlFor="gender-male" className="ml-2 text-sm font-medium text-gray-900">Male</label>
        </div>
        <div className="flex items-center mt-1">
          <input id="gender-female" type="radio" value="FEMALE" name="gender" onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" checked={data.gender == 'FEMALE'} />
          <label htmlFor="gender-female" className="ml-2 text-sm font-medium text-gray-900">Female</label>
        </div>
      </div>
      {errors.gender && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{errors.gender}</p>}
      <button type='submit' className='bg-blue-500 py-1 w-full mt-2 rounded-full text-white'>Submit</button>
    </form>
  )
}
