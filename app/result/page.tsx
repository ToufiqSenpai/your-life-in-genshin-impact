import DownloadImage from "./DownloadImage"

async function getDiagnose(name: string, gender: string) {
  return fetch(`${process.env.APP_URL}/api/diagnose?name=${name}&gender=${gender}`, { method: "GET", cache: 'no-store' })
    .then(response => response.json())
}

async function Result({ searchParams }) {
  const { status, data } = await getDiagnose(searchParams.name, searchParams.gender)

  if(status != 200) {
    return (
      <h1 className="text-3xl font-bold text-black">Namanya ga ada bangsat</h1>
    )
  }

  return (
    <main className='max-w-2xl mx-auto'>
      <section className='bg-blue-300' id="main-result">
        <h1 className='text-white font-medium text-xl text-center'>Result</h1>
        <div className='bg-white mx-3 text-center'>
          <h2 className='text-xl'><span className='font-semibold'>{data.name}</span> is an {data.characterType}</h2>
          <h2 className='text-xl'><span className='font-semibold'>{data.name}</span> has a {data.vision} Vision</h2>
          <h2 className='text-xl'><span className='font-semibold'>{data.name}</span> uses a {data.weapon}</h2>
          <h2 className='text-xl'><span className='font-semibold'>{data.name}</span> is from {data.country}</h2>
          <h2 className='text-xl'><span className='font-semibold'>{data.name}</span> is in love with {data.loveWith}</h2>
          <h2 className='text-xl'>{data.bestFriend} is <span className='font-semibold'>{data.name}</span> best friend</h2>
          <h2 className='text-xl'>{data.lovedBy} is in love with you</h2>
          <h2 className='text-xl'>{data.hatedBy} hate you</h2>
        </div>
        <br className="h-3" />
      </section>
      <DownloadImage />
    </main>
  )
}

export default Result