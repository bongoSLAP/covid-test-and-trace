import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import logo from '../assets/nhs-logo.jpeg'
import '../styling/Login.css'

const LoginPage = () => {
    const {username, setUsername} = useState(false);
    const {password, setPassword} = useState(false);

    function LoginForm(){
        const { register, formState: {errors} } = useForm()
        let handleSubmit = async (e) =>{
            e.preventDefault();
            try {
                let res = await fetch("https://localhost:7166/Login", {
                    method: "POST",
                    body: JSON.stringify({
                        username: username,
                        password: password
                    }),
                });
                let resJson = await res.json();
                if (res.status === 200) {
                    setUsername("");
                    setPassword("");
                }
            } catch (err){
                console.log(err);
            }
        }

        return (
            <form onSubmit={handleSubmit}>
                <label>Enter username</label>
                <br />
                <input onChange={(e) => setUsername(e.target.value)} className='inputText' id='Username' type='text' placeholder='Please enter username' {...register('Username', {required: true})} />
                {errors.Username && <p>Username is incorrect</p>}
                <br />
                <br />

                <label>Enter password</label>
                <br />
                <input onChange={(e) => setPassword(e.target.value)} className='inputText' id='Password' type='password' placeholder='Pleaser enter password' {...register('Password', {required: true})} />
                {errors.Password && <p>Password is incorrect</p>}
                <br />
                <br />
                <div id='onSuccess'></div>

                <input className='inputLogin' type='submit' value={"Login"} onClick={() => { document.getElementById("onSuccess").innerHTML = "Loading..." }} />
                <Link className='link'>Sign up</Link>

            </form>
        )
    }
    return(
        <div>
            <header>
                <img src={logo} alt='logo' />
            </header>
            <h2>Welcome to Cases - NHS Track & Trace</h2>
            <h3>Please Login to continue</h3>
            <LoginForm />

        </div>
    )
}

export default LoginPage;