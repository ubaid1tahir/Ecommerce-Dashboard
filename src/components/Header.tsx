import { useNavigate } from "react-router-dom"


const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-gray-200 flex justify-between px-4">
            <div className="my-auto">
                <input type="text" placeholder="Search" className={`h-9 md:max-w-4xl md:m-2 rounded-xl md:p-3 p-1 m-1`} />
            </div>
            <div className='text-end my-auto'>
                <button onClick={() => navigate('/')} className='bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50  cursor-pointer border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500 text-white m-auto'>Home Page</button>
            </div>

        </div>
    )
}

export default Header
