import {Link} from 'react-router-dom'
import './Home.css'
const Nav=()=>{
    return(
      <nav>
        <Link to="/">Home</Link>
        <Link to="/reg">Registration</Link>
      </nav>
    )
}
export default Nav