
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import Navbar from './components/Navbar'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Header from './components/Header'
import SpecialityMenu from './components/SpecialityMenu'
import TopDoctor from './components/TopDoctor'

function App() {


  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/doctors' element = {<Doctors/>}/>
        <Route path = '/doctor/:spaciality' element = {<Doctors/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/my-profile' element = {<MyProfile/>}/>
        <Route path = '/my-appointments' element = {<MyAppointment/>}/>
        <Route path = '/appointment/:docId' element = {<Appointment/>}/>
      </Routes>
      <Header />
      <SpecialityMenu />
      <TopDoctor/>

    </div>
  )
}

export default App
