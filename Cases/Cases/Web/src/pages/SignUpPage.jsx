import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import logo from '../assets/nhs-logo.jpeg'
import '../styling/SignUp.css'

const SignUpPage = () => {

    function SignUpForm() {
        const { register, formState: {errors}} = useForm()
        let handleSubmit = async (e) =>{
            console.log(e);

            e.target.forEach(element => {
                console.log(element.value)
            });

            e.preventDefault();
            try {
                let res = await fetch("https://localhost:7166/Signup", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        FirstName: e.target[0].value,
                        LastName: e.target[1].value,
                        NhsNumber: e.target[2].value,
                        Username: e.target[3].value,
                        Password: e.target[4].value,
                        Email: e.target[5].value,
                        Telephone: e.target[6].value,
                        Postcode: e.target[7].value,
                        LastInfected: null,
                        LastTested: null,
                        LastContacted: null, 
                        AuthFailCount: 0,
                        AccountStatus: "open"
                    }),
                });
                if (res.status === 200) {

                }
            } catch (err){
                console.log(err);
            }
        }

        return(
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Enter your first name</label>
                <br />
                <input className='inputText' id='FirstName' type='text' placeholder='Please enter your first name' {...register('FirstName', {required: true})}/>
                {errors.FirstName && <p>First name is incorrect</p>}
                <br />
                <br />

                <label>Enter your last name</label>
                <br />
                <input className='inputText' id='LastName' type='text' placeholder='Please enter your last name' {...register('LastName', {required: true})}/>
                {errors.LastName && <p>Last name is incorrect</p>}
                <br />
                <br />

                <label>Enter your NHS number</label>
                <br />
                <input className='inputText' id='NhsNumber' type='number' placeholder='Please enter your Nhs number' {...register('NhsNumber', {required: true})}/>
                {errors.NhsNumber && <p>Nhs number is incorrect</p>}
                <br />
                <br />

                <label>Enter your Username</label>
                <br />
                <input className='inputText' id='Username' type='text' placeholder='Please enter your new username' {...register('Username', {required: true})}/>
                {errors.Username && <p>Username is incorrect</p>}
                <br />
                <br />

                <label>Enter your Password</label>
                <br />
                <input className='inputText' id='Password' type='password' placeholder='Please enter your new password' {...register('Password', {required: true})}/>
                {errors.Password && <p>Password is incorrect</p>}
                <br />
                <br />

                <label>Enter your Email</label>
                <br />
                <input className='inputText' id='Email' type='email' placeholder='Please enter your email' {...register('Email', {required: true})}/>
                {errors.Email && <p>Email is incorrect</p>}
                <br />
                <br />

                <label>Enter your Telephone</label>
                <br />
                <input className='inputText' id='Telephone' type='text' placeholder='Please enter your telephone number' {...register('Telephone', {required: true})}/>
                {errors.Telephone && <p>Telephone number is incorrect</p>}
                <br />
                <br />

                <label>Enter your Postcode</label>
                <br />
                <input className='inputText' id='Postcode' type='text' placeholder='Please enter your postcode' {...register('Postcode', {required: true})}/>
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