import { Toaster } from 'react-hot-toast'
import AppRoutes from './routes/AppRoutes'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Toaster position='top-right' reverseOrder={false}/>
      <AppRoutes/>
    </div>
  )
}

export default App
