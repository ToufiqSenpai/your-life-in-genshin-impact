import country from "@/data/country"
import femaleCharacter from "@/data/femaleCharacter"
import mainCharacter from "@/data/mainCharacter"
import maleCharacter from "@/data/maleCharacter"
import visions from "@/data/visions"
import weapons from "@/data/weapons"
import randomArrayEl from "@/utils/randomArrayEl"

function Result() {
  return (
    <main className='max-w-2xl mx-auto'>
      <section className='bg-blue-300'>
        <h1 className='text-white font-medium text-xl text-center'>Result</h1>
        <div className='bg-white mx-3 text-center'>
          <h2 className='text-xl'><span className='font-semibold'>name</span> is an {randomArrayEl(mainCharacter)}</h2>
          <h2 className='text-xl'><span className='font-semibold'>name</span> has a {randomArrayEl(visions)} Vision</h2>
          <h2 className='text-xl'><span className='font-semibold'>name</span> uses a {randomArrayEl(weapons)}</h2>
          <h2 className='text-xl'><span className='font-semibold'>name</span> is from {randomArrayEl(country)}</h2>
          <h2 className='text-xl'><span className='font-semibold'>name</span> is in love with {randomArrayEl(femaleCharacter)}</h2>
          <h2 className='text-xl'>{randomArrayEl(maleCharacter.concat(femaleCharacter))} is <span className='font-semibold'>name</span> best friend</h2>
          <h2 className='text-xl'>{randomArrayEl(femaleCharacter)} is in love with you</h2>
          <h2 className='text-xl'>{randomArrayEl(maleCharacter.concat(femaleCharacter))} hate you</h2>
        </div>
      </section>
    </main>
  )
}

export default Result