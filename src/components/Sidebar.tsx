import axios from "axios"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
const Sidebar = () => {


    const navigate = useNavigate()
    const [url] = React.useState(window.location)
    const handleSubmit = (event: any) => {
        const cookie = document.cookie;

        const keyValuePairs = cookie.split(';');


        const accessToken = keyValuePairs.map(pair => pair.split('=')[1]);
        event.preventDefault();
        axios.post('/api/v1/users/logout', {}, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }).then((res) => {
            console.log(res)
            
            navigate('/login')

        })
    }
    const activeStyle = "bg-gray-700 rounded-sm py-1"
    return (
        <div className="min-h-screen flex flex-col justify-between bg-black sm:text-sm md:text-lg text-center p-2 text-white">
            <div>
                <h1 className="">OpenShop</h1>
                <ul className="mt-10 space-y-4 flex flex-col">
                    <Link to='/dashboard' className={`${url.pathname === '/dashboard' ? activeStyle : ""}`}>Dashboard</Link>
                    <Link to='/products' className={`${url.pathname === '/products' ? activeStyle : ""}`}>Products</Link>
                    <Link to='/orders' className={`${url.pathname === '/orders' ? activeStyle : ""}`}>Orders</Link>
                    <Link to='/customers' className={`${url.pathname === '/customers' ? activeStyle : ""}`}>Customers</Link>
                    <Link to='/transactions' className={`${url.pathname === '/transactions' ? activeStyle : ""}`}>Transactions</Link>
                    <Link to='/messages' className={`${url.pathname === '/messages' ? activeStyle : ""}`}>Messages</Link>
                </ul>
            </div>
            <div>
                <ul className="mt-10 space-y-4 flex flex-col pb-2">
                    <Link to='/admin/dashboard'>Settings</Link>
                    <Link to='/admin/products'>Help & Support</Link>
                    <button onClick={handleSubmit} className="text-red-700">Logout</button>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
