import React, { useState } from 'react'
import { LoginWrapper } from '../wrappers/login'
import { useDispatch } from 'react-redux'
import { LoginUser } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { toast } from 'react-toastify'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(import.meta.env.VITE_BACKEND_URL)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginHandler = (e) => {
        e.preventDefault();

        console.log(email, password)
        let userCredential = {
            username:email, password
        }
        dispatch(LoginUser(userCredential)).then((result) => {
            if (LoginUser.fulfilled.match(result)) { 
                console.log('Login success');
                setEmail('');
                setPassword('');
                toast.success('login successful')
                navigate('/');
            } else {
                toast.error(`login ${result.error.message}`)
                console.error('Login failed:', result.error.message);
            }
        });
        
    }

    return (
        <>
            <Navbar/>
            <LoginWrapper>
                <div className="container">
                    <h1> Login Page </h1>
                    <form onSubmit={loginHandler}>
                        <label>email </label>
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>password </label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button>login</button>
                    </form>
                </div>
            </LoginWrapper>
        </>
    )
}

export default Login