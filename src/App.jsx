
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactUs from './pages/ContactUs'
import OurStory from './pages/OurStory'
import TipsAndTicks from './pages/TipsAndTicks'
import Search from './pages/Search'



function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/TipsAndTicks' element={<TipsAndTicks/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/ourStory' element={<OurStory/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
