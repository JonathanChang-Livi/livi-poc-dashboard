import type { NextPage } from 'next'
import Dashboard from '../component/dashboard'

const Home: NextPage = () => {
  return (
    <div className="p-4">
      <div style={{display: 'none'}} 
      className='my-6 flex flex-col rounded-lg filter drop-shadow-md bg-white pt-8  
      w-full gap-5 text-secondary text-sm font-semibold mt-4
      bg-gradient-to-tr from-primary via-primary to-secondary-dark h-full justify-between items-end justify-end
      p-2 px-3 bg-primary text-secondary font-black w-2/12 w-6/12 text-green-700 text-red-700
      rounded-tr-lg rounded-bl-lg p-4
      '></div>
      <Dashboard />
    </div>
  )
}

export default Home
