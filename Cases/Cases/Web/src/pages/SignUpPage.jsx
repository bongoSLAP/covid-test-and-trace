import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import logo from '../assets/nhs-logo.jpeg'
import '../styling/SignUp.css'

const SignUpPage = () => {
    const [firstname, setFirstname] = useState(false);
    const [lastname, setLastname] = useState(false);
    const [nhsnumber, setNhsnumber] = useState(false);
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);
    const [email, setEmail] = useState(false);
    const [telephone, setTelephone] = useState(false);
    const [posstcode, setPostcode] = useState(false);

    function SignUpForm() {
        const { register, formState: {errors}} = useForm()
        let handleSubmit = async (e) =>{
            e.preventDefault();
            try {
                let res = await fetch("https://localhost:7166/Signup", {
                    method: "POST",
                    body: JSON.stringify({
                        FirstName: firstname,
                        LastName: lastname,
                        NhsNumber: nhsnumber,
                        username: username,
                        password: password,
                        Email: email,
                        Telephone: telephone,
                        Postcode: posstcode,
                        LastInfected: null,
                        LastTested: null,
                        LastContacted: null, 
                        AuthFailCount: 0,
                        AccountStatus: "open"
                    }),
                });
                let resJson = await res.json();
                if (res.status === 200) {
                    setFirstname("");
                    setLastname("");
                    setNhsnumber("");
                    setUsername("");
                    setPassword("");
                    setEmail("");
                    setTelephone("");
                    setTelephone("");
                }
            } catch (err){
                console.log(err);
            }
        }

        return(
            <form onSubmit={handleSubmit}>
                <label>Enter your first name</label>
                <br />
                <input onChange={(e) => setFirstname(e.target.value)} className='inputText' id='FirstName' type='text' placeholder='Please enter your first name' {...register('FirstName', {required: true})}/>
                {errors.FirstName && <p>First name is incorrect</p>}
                <br />
                <br />

                <label>Enter your last name</label>
                <br />
                <input onChange={(e) => setLastname(e.target.value)} className='inputText' id='LastName' type='text' placeholder='Please enter your last name' {...register('LastName', {required: true})}/>
                {errors.LastName && <p>Last name is incorrect</p>}
                <br />
                <br />

                <label>Enter your NHS number</label>
                <br />
                <input onChange={(e) => setNhsnumber(e.target.value)} className='inputText' id='NhsNumber' type='number' placeholder='Please enter your Nhs number' {...register('NhsNumber', {required: true})}/>
                {errors.NhsNumber && <p>Nhs number is incorrect</p>}
                <br />
                <br />

                <label>Enter your Username</label>
                <br />
                <input onChange={(e) => setUsername(e.target.value)} className='inputText' id='Username' type='text' placeholder='Please enter your new username' {...register('Username', {required: true})}/>
                {errors.Username && <p>Username is incorrect</p>}
                <br />
                <br />

                <label>Enter your Password</label>
                <br />
                <input onChange={(e) => setPassword(e.target.value)} className='inputText' id='Password' type='password' placeholder='Please enter your new password' {...register('Password', {required: true})}/>
                {errors.Password && <p>Password is incorrect</p>}
                <br />
                <br />

                <label>Enter your Email</label>
                <br />
                <input onChange={(e) => setEmail(e.target.value)} className='inputText' id='Email' type='email' placeholder='Please enter your email' {...register('Email', {required: true})}/>
                {errors.Email && <p>Email is incorrect</p>}
                <br />
                <br />

                <label>Enter your Telephone</label>
                <br />
                <input onChange={(e) => setTelephone(e.target.value)} className='inputText' id='Telephone' type='text' placeholder='Please enter your telephone number' {...register('Telephone', {required: true})}/>
                {errors.Telephone && <p>Telephone number is incorrect</p>}
                <br />
                <br />

                <label>Enter your Postcode</label>
                <br />
                <input onChange={(e) => setPostcode(e.target.value)} className='inputText' id='Postcode' type='text' placeholder='Please enter your postcode' {...register('Postcode', {required: true})}/>
                {errors.Postcode && <p>Postcode is incorrect</p>}
                <br />
                <br />

                <div id='onSuccess'></div>
                <input className='inputLogin' type='submit' value={"Sign Up"} onClick={() => { document.getElementById("onSuccess").innerHTML = "Loading..." }} />

                <Link className='link' to={"/"}>Cancel</Link>
            </form>
        )
    }

    return(
        <div>
            <header>
                <img src={logo} alt='logo' />
            </header>
            <h2>Sign up to Cases - Track & Trace</h2>
            <SignUpForm />
        </div>
    )
}

export default SignUpPage;