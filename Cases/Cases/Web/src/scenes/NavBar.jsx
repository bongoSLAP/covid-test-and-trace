import '../styling/NavBar.css'
import logo from '../assets/nhs-logo.jpeg'
import { Link } from "react-router-dom"
const NavBar = () => {
    return(
        <header>
            <img src={logo} alt='logo' />
            <nav>
                <Link className='link'>Home</Link>
                <Link className='link'>Book Test</Link>
                <Link className='link'>Symptom Survey</Link>
                <Link className='link'>Sign out</Link>
                </nav>
        </header>
        
    )
}

export default NavBar;