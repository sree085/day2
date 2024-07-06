import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Add from './components/Add'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import MediaCard from './components/Cards'
import MediaCard2 from './components/Card2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to React</h1>
      {/* <img src="" alt="" /> */}
      <Navbar/>
      {/* <View/>
      <Add/> */}
      <Routes>
        <Route path='/'element={<View/>}></Route>
        <Route path='/add' element={<Add person={{name:'sreedev',
          email:'dssds@sfsa',
          phone:'345435'}}/>}>
        </Route>
        <Route path='/m' element={<MediaCard/>}></Route>      
        <Route path='/m2' element={<MediaCard2/>}></Route>
        </Routes>
    </>
  )
}

export default App
