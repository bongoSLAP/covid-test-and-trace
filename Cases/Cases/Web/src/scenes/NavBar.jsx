import '../styling/NavBar.css'
import logo from '../assets/nhs-logo.jpeg'
import { Link } from "react-router-dom"
import { useState } from 'react'
const NavBar = () => {
    const [postcodeAlert, setPostcodeAlert] = useState(false);
    const [proximityAlert, setProximityAlert] = useState(false);

    function Postcode() {
        if (!postcodeAlert) {
            return(
                <div></div>
            )
        }

        return(
            <div className='alert'>
                <h3>Your postcode is on High alert</h3>
            </div>
        )
        
    }

    function Proximity() {
        if (!proximityAlert) {
            return(
                <div></div>
            )
        }

        return(
            <div className='alert'>
                <h3>Someone that has been in your proximity has contracted Covid-19</h3>
            </div>
        )
    }
    
    

    function handlePostcode() {
        if (!postcodeAlert) {
            setPostcodeAlert(true)
        }

        if (postcodeAlert) {
            setPostcodeAlert(false)
        }
        console.log(postcodeAlert)
    }
    
    function handleProximity() {
        if (!proximityAlert) {
            setProximityAlert(true)
        }
        if (proximityAlert) {
            setProximityAlert(false)
        }
        console.log(proximityAlert)
    }

    return(
        <div>
            <div className='header'>
                <img src={logo} alt='logo' />
                <nav>
                    <Link className='linkNav' to='/Home'>Home</Link>
                    <Link className='linkNav' to='/BookTest'>Book Test</Link>
                    <Link className='linkNav'>Symptom Survey</Link>
                    <Link className='linkNav'>Sign out</Link>
                    <button onClick={handlePostcode}>Post</button>
                    <button onClick={handleProximity}>Prox</button>
                </nav>
            </div>
            <Postcode />
            <Proximity />
        </div>
    )
}

export default NavBar;