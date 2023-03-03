import '../styling/NavBar.css'
import logo from '../assets/nhs-logo.jpeg'
import { Link } from "react-router-dom"
const NavBar = () => {
    return(
        <header>
            <img src={logo} alt='logo' />
            <nav>
                <Link className='linkNav' to='/Home'>Home</Link>
                <Link className='linkNav'>Book Test</Link>
                <Link className='linkNav'>Symptom Survey</Link>
                <Link className='linkNav'>Sign out</Link>
                </nav>
        </header>
        
    )
}

export default NavBar;