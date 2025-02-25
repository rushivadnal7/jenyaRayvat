import React, { useState } from 'react'
import { LoginWrapper } from '../wrappers/login'
import { useDispatch } from 'react-redux'
import { LoginUser } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

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
            email, password
        }
        dispatch(LoginUser(userCredential)).then((result) => {
            console.log(result)
            if (result.payload) {
                console.log('success')
                setEmail('')
                setPassword('')
                navigate('/')
            }
        })
    }

    return (
        <>
            <LoginWrapper>
                <div className="container">
                    <h1> Login Page </h1>
                    <form onSubmit={loginHandler}>
                        <label>email </label>
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>password </label>
                        <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button>login</button>
                    </form>
                </div>
            </LoginWrapper>
        </>
    )
}

export default Login