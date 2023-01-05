import type { NextPage } from 'next'
import Dashboard from '../component/dashboard'

const Home: NextPage = () => {
  return (
    <div className="p-4">
      <div style={{display: 'none'}} 
      className='my-6'></div>
      <Dashboard />
    </div>
  )
}

export default Home
