import { Outlet } from 'react-router-dom'
import './App.css'
import Head from './Components/Head'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Head/>
      <Outlet/>
      <Navbar/>
    </>
  )
}

export default App
