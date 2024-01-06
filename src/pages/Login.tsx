import axios from "axios"
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {assignRole} from '../app/roleSlice'


const Login = () => {
    const dispatch = useDispatch() 
    const navigate = useNavigate()
    const role = useSelector((store:any) => store.role)
    const [user, setUser] = React.useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event: any) => {
        event.preventDefault();
        axios.post('/api/v1/users/login', {
            email: user.email,
            password: user.password
        },{
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response =>{ 
            dispatch(assignRole(response.data.data.user.role))
            // console.log(response.data.data.user.role);
            const userRole = response.data.data.user.role
            
            
            
            const expirationDate1 = new Date(Date.now() + 7200000); //  2 hours
            // console.log(response.data.data.refreshToken)
            document.cookie = `accessToken=${encodeURIComponent(response.data.data.accessToken)}; expires=${expirationDate1.toUTCString()}`;

            const expirationDate2 = new Date(Date.now() + 172800000); // 2 days
            document.cookie = `refreshToken=${encodeURIComponent(response.data.data.refreshToken)}; expires=${expirationDate2.toUTCString()}`;
            if(userRole === "admin") navigate('/dashboard')
            else if(userRole === "user") navigate('/')
        })
        .catch(err => {
            console.log(err)
            toast('Email or password is incorrect')
            setUser({email: '', password: ''})
        })
    }
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="bg-gray-100 flex items-center justify-center h-screen">
                <div className="bg-white p-8 md:mt-5 rounded-lg shadow-lg max-w-sm w-full">
                    <div className="flex justify-center mb-6">
                        <span className="inline-block bg-gray-200 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
                        </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                    {/* <p className="text-gray-600 text-center mb-6">Enter your details to Login.</p> */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
                            <input type="email" value={user.email} onChange={e=> setUser({...user, email: e.target.value})} id="email" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="hello@alignui.com" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
                            <input type="password" value={user.password} onChange={e=> setUser({...user, password: e.target.value})} id="password" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="••••••••" />
                        </div>
                        <p className="text-sm my-2">Don`t have an account <Link to="/register" className="text-blue-500 underline">Register</Link> </p>
                        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
                        {/* <p className="text-gray-600 text-xs text-center mt-4">
                            By clicking Register, you agree to accept Apex Financial's
                            <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>.
                        </p> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
