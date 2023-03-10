import { Link } from 'react-router-dom'
import NavBar from '../scenes/NavBar'
import '../styling/Home.css'
import banner from '../assets/nhs-banner.png'
import arrow from '../assets/arrow-right-solid.svg'

const HomePage = ({isLoggedIn}) => {

    /* Displays nothing if the user is not logged in */
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
                <div className='homeInfoContainer'>
                    <div className='HowAreWeTacklingCovid'>
                        <h3>How are we tackling Covid?</h3>
                        <p>By signing up to our new Covid track & trace system you can help reduce the spread of the virus</p>
                    </div>
                    <div className='HowCanYouHelp'>
                        <h3>How can you help?</h3>
                        <p>Using the Cases website to track & trace all of the COVID-19 cases to help reduce the risk of spreading the virus</p>
                    </div>
                </div>
                
            </div>
        )
    }

    function VenueTracking(){

        return(
            <div className='VenueTrackingContainer'>
                <h3>Venue Tracking</h3>
                <p>If you're visiting a venue or business not owned by your household, you will need to check-in upon entry</p>
                <div className='homeLinkDiv'>
                    <img src={arrow} alt="arrow" className='arrow' />   
                    <Link to='/CheckIn' className='homeLink'>Check-in here</Link>
                </div>
            </div>
        )
    }

    function SelfIsolation(){

        return(
            <div className='VenueTrackingContainerGrey'>
                <h3>Self Isolation</h3>
                <p>You must self isolate until ??? @ ???</p>
                <div className='homeLinkDiv'>
                    <img src={arrow} alt="arrow" className='arrow' />
                    <Link to='/Countdown' className='homeLink'>See more info</Link>
                </div>
            </div>
        )
    }

    function MessagingService() {

        return(
            <div className='VenueTrackingContainer'>
                <h3>Live Chat</h3>
                <p>If you have any concerns that require additional help, please use our live chat services to speak to a member of the team</p>
                <div className='homeLinkDiv'>
                    <img src={arrow} alt="arrow" className='arrow' />
                    <Link to='/MessagingService' className='homeLink'>Live chat now</Link>
                </div>
            </div>
        )
    }

    return(
        <div className='homePageContainer'>
            <NavBar />
            <SubHeading />
            <VenueTracking />
            <SelfIsolation />
            <MessagingService />
        </div>
    )
}

export default HomePage;