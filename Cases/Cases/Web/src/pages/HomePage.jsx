import { Link } from 'react-router-dom'
import NavBar from '../scenes/NavBar'
import '../styling/Home.css'
import banner from '../assets/nhs-banner.png'

const HomePage = ({isLoggedIn}) => {

    {/* Displays nothing if the user is not logged in */}
    if (!isLoggedIn) {
        return(
            <div>
            </div>
        )
    }

    function SubHeading() {

        return(
            <div>
                <h1 className='homeH1'>Covid-19</h1>
                <h2 className='homeH2'>Track & Trace</h2>
                <img src={banner} alt='banner' className='bannerImg'/>
                <div className='HowCanYouHelp'>
                    <h3>How can you help?</h3>
                    <p>Using the Cases website to track & trace all of the COVID-19 cases to help reduce the risk of spreading the virus</p>
                </div>
                <div className='HowAreWeTacklingCovid'>
                    <h3>How are we tackling Covid?</h3>
                    <p>By signing up to our new Covid track & trace system you can help reduce the spread of the virus</p>
                </div>
            </div>
        )
    }

    function VenueTracking(){

        return(
            <div className='VenueTrackingContainer'>
                <h3>Venue Tracking</h3>
                <p>If you're visiting a venue or business not owned by your household, you will need to check-in upon entry</p>
                <Link to='/CheckIn'>Check-in here</Link>
            </div>
        )
    }

    function SelfIsolation(){

        return(
            <div className='VenueTrackingContainer'>
                <h3>Self Isolation</h3>
                <p>You must self isolate until ??? @ ???</p>
                <Link to='/Countdown'>See more info</Link>
            </div>
        )
    }

    return(
        <div className='homePageContainer'>
            <NavBar />
            <SubHeading />
            <VenueTracking />
            <SelfIsolation />
        </div>
    )
}

export default HomePage;