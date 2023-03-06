import { useState } from 'react';
import { Calendar } from 'react-calendar';
import TimePicker from 'react-time-picker';
import { set, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import NavBar from '../scenes/NavBar'
import 'react-calendar/dist/Calendar.css';


const TestBooking = ({username}) => {
    
    const [date, onChange] = useState(new Date()); //Calendar Date
    const [time, onChangeTime] = useState('10:00'); //Booking Time
    const [location, setLocation] = useState(false); //Location selector
    const [formData, setFormData] = useState( //Radio Button
        {
            date: "", 
            time: "", 
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

    const { register, formState: {errors} } = useForm() //HTTP Request
        let handleSubmit = async (e) =>{
            e.preventDefault();
            try {
                let res = await fetch("https://localhost:7166/BookingTest", {
                    method: "POST",
                    body: JSON.stringify({
                        date: date,
                        time: time,
                        location: location,
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
            <form onSubmit={handleSubmit}>
                <h3>Select Your Location</h3>
                <fieldset>
                    <legend>Select a Location</legend>
                    <div>
                        <br />
                        <input 
                            type='radio' 
                            id="London" 
                            name="location" 
                            value="London"
                            checked={formData.location === "London"} 
                            onChange={handleChange}
                            />
                        <label for='London'>London</label>
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
                        <label for="Manchester">Manchester</label>
                        <br />
                        <br />
                    </div>
                </fieldset>

                <Calendar onChange={onChange} value={date}/>
                <TimePicker onChange={onChangeTime} value={time} disableClock='true' minTime={'09:00'} maxTime={'20:00'}/>

                <input className='inputLogin' type='submit' value={"Book Test"}  />
                <br />
                <Link className='link' to={"/Home"}>Cancel</Link>

            </form>
        )
    }

    //setFormData({date}, {time}, formData.location);
    console.log(formData);
    
    return (
        <div>
            <NavBar />
            <BookTest />
        </div>
    )
}

export default TestBooking;