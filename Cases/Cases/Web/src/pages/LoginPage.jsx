import { useForm } from 'react-hook-form'
import logo from '../assets/nhs-logo.jpeg'
import '../styling/Login.css'

const LoginPage = () => {

    function LoginForm(){
        const { register, handleSubmit, formState: {errors}} = useForm()

        return (
            <form onSubmit={handleSubmit}>
                <label>Enter username</label>
                <br />
                <input className='inputText' id='Username' type='text' placeholder='Please enter username' {...register('Username', {required: true})} />
                {errors.Username && <p>Username is incorrect</p>}
                <br />
                <br />

                <label>Enter password</label>
                <br />
                <input className='inputText' id='Password' type='password' placeholder='Pleaser enter password' {...register('Password', {required: true})} />
                {errors.Password && <p>Password is incorrect</p>}
                <br />
                <br />
                <div id='onSuccess'></div>

                <input className='inputLogin' type='submit' value={"Login"} onClick={() => { document.getElementById("onSuccess").innerHTML = "Loading..." }} />
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