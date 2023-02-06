import { Card, CardBody } from 'livi-poc-core'
import type { NextPage } from 'next'
import Dashboard from '../component/dashboard'

const Home: NextPage = () => {
  return (
    <Card>
      <CardBody>
        <div style={{ display: 'none' }}
          className='my-6 flex flex-col rounded-lg filter drop-shadow-md bg-white overflow-y-auto items-center
          bg-[#EEB155] w-3 h-3 rounded-full
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-black text-left font-normal  relative max-w-[150px]
      w-full h-full grid grid-cols-2 gap-5 my-1 my-2 h-[1px] text-blue-600 bg-primary bg-secondary
      mx-2 w-4 h-4 rounded-[4px] mx-4 rounded-b-lg mx-3
      p-3 pt-8 p-4 mt-4 p-2 px-3
      text-base text-white bg-primary hover:scale-110 bg-secondary
       text-secondary text-sm font-semibold
      bg-gradient-to-tr from-primary via-primary to-secondary-dark h-full justify-between items-end justify-end
      bg-primary text-secondary font-black text-green-700 text-red-700
      rounded-tr-lg rounded-bl-lg
      grid-cols-12
      col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6
      gap-1 gap-2 gap-3 gap-4 gap-5
      space-x-1 space-x-2 space-x-3 space-x-4 space-x-5
      space-y-1 space-y-2 space-y-3 space-y-4 space-y-5
      bg-[#EEB155] bg-[#A796CC] bg-[#88b1DB] bg-[#CD808B] bg-[#D3BC8D] 
      bg-slate-200 border-slate-100 my-2 text-slate-600 text-slate-700 p-5 w-1/2 pr-4 rounded-tl-lg rounded-tr-lg rounded-t-lg mr-2 border-r-2 shadow-lg grid-cols-3
      '></div>
        <Dashboard />
      </CardBody>
    </Card>
  )
}

export default Home
