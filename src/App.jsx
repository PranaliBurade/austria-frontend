import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/About'
import Architecture from './Components/Pages/Architecture/Architecture'
import Features from './Components/Pages/Features/Features'
import Integration from './Components/Pages/Integration/Integration'
import UseCases from './Components/Pages/Usecases/UseCases'
import Contact from './Components/Pages/Contact/Contact'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
   <BrowserRouter>
  <Layout>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/architecture' element={<Architecture/>}/>
    <Route path='/feature' element={<Features/>}/>
    <Route path='/integration' element={<Integration/>}/>
    <Route path='/usecases' element={<UseCases/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </Layout>
   </BrowserRouter>
  
    </>
  )
}

export default App;
