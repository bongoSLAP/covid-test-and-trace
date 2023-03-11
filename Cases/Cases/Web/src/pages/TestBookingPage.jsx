import { useState } from 'react';
import { Calendar } from 'react-calendar';
import TimePicker from 'react-time-picker';
import { Link } from 'react-router-dom'
import NavBar from '../scenes/NavBar'
import 'react-calendar/dist/Calendar.css';
import '../styling/Booking.css';


const TestBooking = ({username, token}) => {
    
    const [date, onChange] = useState(new Date()); //Calendar Date
    const [time, onChangeTime] = useState('10:00'); //Booking Time
    const [formData, setFormData] = useState( //Radio Button
        {
            location: ""
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


        let handleSubmit = async (e) =>{
            e.preventDefault();
            
            try {
                let res = await fetch("https://localhost:7166/BookingTest", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        "authorization": token
                    },
                    body: JSON.stringify({
                        date: date.toLocaleDateString(),
                        time: time,
                        location: formData.location,
                        username: username
                    }),
                });
                if (res.status === 200) {
                    
                }
            } catch (err){
                console.log(err);
            }
        }

    function BookTest () {
        return (
            <form onSubmit={handleSubmit} className='bookingForm'>
                <h3 className='bookingFormTitle'>Select Your Location</h3>
                <fieldset>
                    <div className='radioDiv'>
                        <br />
                        <input 
                            type='radio' 
                            id="London" 
                            name="location" 
                            value="London"
                            checked={formData.location === "London"} 
                            onChange={handleChange}
                            />
                        <label htmlfor='London'>London</label>
                        <br />
                        <br />
                        
                        <br />
                        <input 
                            type='radio' 
                            id="Manchester" 
                            name="location" 
                            value="Manchester"
                            checked={formData.location === "Manchester"} 
                            onChange={handleChange}
                        />
                        <label htmlfor="Manchester">Manchester</label>
                        <br />
                        <br />
                    </div>
                </fieldset>

                <Calendar onChange={onChange} value={date}/>
                <TimePicker onChange={onChangeTime} value={time} disableClock='true' minTime={'09:00'} maxTime={'20:00'}/>

                <br />
                <input className='inputLogin' type='submit' value={"Book Test"}  />
                <br />
                <Link className='link' to={"/Home"}>Cancel</Link>

            </form>
        )
    }
    
    return (
        <div>
            <NavBar />
            <h1 className='bookingTitle'>Book a Covid Test</h1>
            <BookTest />
        </div>
    )
}

export default TestBooking;