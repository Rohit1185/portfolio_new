import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/Project' element={<Skills/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App;
