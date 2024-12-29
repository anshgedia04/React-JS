import { Route , Routes } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/AboutUs'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'

function App() {
 

  return (
    <>
      <Header></Header>
      
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/aboutus' element={<AboutUs></AboutUs>}> </Route>
      <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
    </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
