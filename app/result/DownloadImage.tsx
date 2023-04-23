'use client'
import uuid from '@/utils/uuid'
import * as htmlToImg from 'html-to-image'

function DownloadImage() {
  return (
    <button 
    className='bg-green-400 mx-auto w-[95%] py-1 rounded-full mt-4'
    onClick={() => {
      const targetElement = document.getElementById('main-result')
      htmlToImg.toPng(targetElement as HTMLElement).then(url => {
        const link = document.createElement('a')

        link.download = uuid() + '.png'
        link.href = url
        link.click()
      })
    }}>Download Image</button>
  )
}

export default DownloadImage