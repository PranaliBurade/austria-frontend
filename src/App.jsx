import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import ScrollToTop from './Components/Layout/ScrollToTop'
import Layout from './Components/Layout/Layout'
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/About'
import Architecture from './Components/Pages/Architecture/Architecture'
import Features from './Components/Pages/Features/Features'
import Integration from './Components/Pages/Integration/Integration'
import UseCases from './Components/Pages/Usecases/UseCases'
import Contact from './Components/Pages/Contact/Contact'
import GetTrial from './Components/DemoVideos/GetTrial'
import DemoVideos from './Components/DemoVideos/DemoVideos'
import Login from './Components/DemoVideos/Login'
import FullVideos from './Components/DemoVideos/FullVideos'
import Pricing from './Components/DemoVideos/Pricing'
import IntegrationAll from './Components/Pages/Integration/IntegrationAll'
import Architecturebtn from './Components/Pages/Architecture/Architecturebtn'
import DemoPopup from './Components/DemoVideos/DemoPopup'
import Faq1 from './Components/Pages/FAQ/Faq1'





function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
   <BrowserRouter>
   <ScrollToTop/>
  <Layout>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/architecture' element={<Architecture/>}/>
    <Route path='/feature' element={<Features/>}/>
    <Route path='/integration' element={<Integration/>}/>
    <Route path='/usecases' element={<UseCases/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/gettrial' element={<GetTrial/>}/>
    <Route path='/demo-videos' element={<DemoVideos/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/full-videos' element={<FullVideos/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/integrationall' element={<IntegrationAll/>}/>
    <Route path='/architectureall'element={<Architecturebtn/>}/>
    <Route path='/demopopup' element={<DemoPopup/>}/>
    <Route path='/faq' element={<Faq1/>}/>
    
   </Routes>
   </Layout>
   </BrowserRouter>
  
    </>
  )
}

export default App;
