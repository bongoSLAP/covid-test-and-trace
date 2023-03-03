import { useState } from 'react'
import { useForm } from 'react-hook-form'
import NavBar from '../scenes/NavBar'

const VenueCheckIn = () => {
  const [venueID, setVenueID] = useState(false);
  function CheckInForm() {
        const { register, formState: {errors} } = useForm()
        let handleSubmit = async (e) =>{
            e.preventDefault();
            try {
                let res = await fetch("https://localhost:7166/CheckIn", {
                    method: "POST",
                    body: JSON.stringify({
                        venueID: venueID
                    }),
                });
                if (res.status === 200) {
                  setVenueID("");
                }
            } catch (err){
                console.log(err);
            }
        }

        return (
            <form onSubmit={handleSubmit}>
                <label>Enter venue ID</label>
                <br />
                <input onChange={(e) => setVenueID(e.target.value)} className='inputText' id='venueID' type='text' placeholder='Please enter venue ID' {...register('venueID', {required: true})} />
                {errors.Username && <p>Not a valid venue ID</p>}
                <br />
                <br />
                <div id='onSuccess'></div>

                <input className='inputLogin' type='submit' value={"Submit"} onClick={() => { document.getElementById("onSuccess").innerHTML = "Loading..."; }} />

            </form>
        )
    }
  
  return (
    <div>
      <NavBar />
      <h1>Venue Tracker</h1> 
      
      <h2>Enter the venue ID displayed at the entrance</h2>
      <CheckInForm />
    </div>);
}

export default VenueCheckIn;