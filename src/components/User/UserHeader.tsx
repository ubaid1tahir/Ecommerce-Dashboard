import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, NavLink } from "react-router-dom";

const activeStyle = "underline decoration-gray-400 underline-offset-8"

const UserHeader = () => {
    
    const [isLogin, setIsUserLogin] = useState(false);
    useEffect(() => {
        const cookie = document.cookie;

        const keyValuePairs = cookie.split(';');


        const accessToken = keyValuePairs.map(pair => pair.split('=')[1]);

        // console.log(accessToken);

        // event.preventDefault();
        axios.post('/api/v1/users/isActiveUser', {}, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }).then(() => {
            setIsUserLogin(true)
        })
            .catch(() => {
                setIsUserLogin(false);
            })
    })
    const navigate = useNavigate()
    const handleLogout = (event: any) => {
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
    const [click, setClick] = useState(false)
    const accountDetails = () => {
        setClick(!click)
    }
    const [url] = React.useState(window.location)
    return (
        <>
            <div className="flex justify-between items-center my-auto">
                <p className="text-md lg:text-2xl font-bold">Exclusive</p>
                <nav className="lg:block hidden">
                    <ul className="flex space-x-8">
                        <NavLink to='/' className={`cursor-pointer ${url.pathname === '/' ? activeStyle : 'hover:underline hover:decoration-gray-400 hover:underline-offset-8 hover:'}`}>Home</NavLink>
                        <NavLink to='/contact' className={`cursor-pointer ${url.pathname === '/contact' ? activeStyle : 'hover:underline hover:decoration-gray-400 hover:underline-offset-8'}`}>Contact</NavLink>
                        <NavLink to='/about' className={`cursor-pointer ${url.pathname === '/about' ? activeStyle : 'hover:underline hover:decoration-gray-400 hover:underline-offset-8'}`}>About</NavLink>
                        <NavLink to='/register' className={`cursor-pointer ${url.pathname === '/register' ? activeStyle : 'hover:underline hover:decoration-gray-400 hover:underline-offset-8'}`}>Sign Up</NavLink>
                    </ul>
                </nav>

                <div className="flex justify-between space-x-3">
                    <div className="relative">
                        <input type="text" placeholder="What are you looking for" className="px-3 md:pr-20 text-xs md:text-lg py-1 rounded-md bg-[#F5F5F5]" />
                        <svg width="24" height="24" className="absolute right-1 hover:cursor-pointer bg-[#F5F5F5] top-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                        </svg>

                    </div>
                    <svg className="hover:cursor-pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <div className="relative">
                        <svg className="hover:cursor-pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3 5H7L10 22H26" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="px-1.5 py-0.5 absolute text-[9px] top-0 right-0 rounded-full bg-[#DB4444] text-white">0</span>
                    </div>

                    <svg onClick={accountDetails} className="cursor-pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16" fill="#DB4444" />
                        <path d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>


            </div>
            <div className={`absolute ${click ? '' : 'hidden'} right-0 z-50 mr-24 bg-gradient-to-r from-gray-500 to-black`}>
                <div className="text-center my-4 text-white w-[192px] max-h-[180px]">
                    <ul className="space-y-2">
                        <div className={`justify-start items-center mx-1 ${isLogin ? 'flex' : 'hidden'}`}>
                            <svg className="" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <li className="cursor-pointer">Manage My Account</li>

                        </div>
                        <div className={`justify-start items-center mx-1 ${isLogin ? 'flex' : 'hidden'}`}>
                            <svg width="22" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.3V19.5C1 19.7652 1.10536 20.0196 1.29289 20.2071C1.48043 20.3946 1.73478 20.5 2 20.5H18C18.2652 20.5 18.5196 20.3946 18.7071 20.2071C18.8946 20.0196 19 19.7652 19 19.5V5.3H1Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linejoin="round" />
                                <path d="M19 5.3L16.1665 1.5H3.8335L1 5.3M13.7775 8.6C13.7775 10.699 12.0865 12.4 10 12.4C7.9135 12.4 6.222 10.699 6.222 8.6" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <li className="mx-2 cursor-pointer">My Order</li>

                        </div>
                        <div className={`justify-start items-center mx-1 ${isLogin ? 'flex' : 'hidden'}`}>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                            <li className="mx-2 cursor-pointer" onClick={handleLogout}>Logout</li>

                        </div>
                        <div className={`justify-start items-center mx-1 ${isLogin ? 'hidden' : 'flex'}`}>

                            <svg className="" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                            <li className="mx-2 cursor-pointer" onClick={() => navigate('/login')}>Login</li>

                        </div>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default UserHeader
