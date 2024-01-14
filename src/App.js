import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Reg from './Reg'


let App=()=>{
  return(
    <BrowserRouter>
    <Nav/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/reg" element={<Reg/>}/>
     
    </Routes>
    </BrowserRouter>
  )
}
export default App
