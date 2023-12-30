
import svg from '../assets/react.svg'

const Header = () => {
    return (
        <div className="bg-gray-400 flex justify-between px-4">
            <div className="my-auto">
                <input type="text" placeholder="Search" className={`h-9 md:max-w-4xl md:m-2 rounded-xl md:p-3 p-1 m-1`} />
            </div>
            <div className='text-end my-auto'>
                <img src={svg} alt="" className='bg-white rounded-2xl cursor-pointer' />
            </div>

        </div>
    )
}

export default Header
