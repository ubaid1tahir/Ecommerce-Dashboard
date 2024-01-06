import { useState } from 'react'
import heroImage from '../../assets/Frame 560.png'
import Slider from './Slider'
const Hero = () => {
    const [isHover, setIsHover] = useState(false)
    return (
        <div className='flex flex-col md:flex-row justify-between shrink-0 mt-16'>

            <div className="flex flex-col gap-4 w-full text-center md:text-start md:w-[217px] mb-6 md:mb-0">
                <div className="flex justify-center md:justify-between">
                    <p className="leading-[19px] cursor-pointer">Women`s Fashion</p>
                    <svg onMouseEnter={() => setIsHover(true)} className="my-auto rotate-90 md:rotate-0 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="black" />
                    </svg>
                    
                </div>
                <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={`${isHover ? 'block' : 'hidden'} space-y-2`}>
                    <p className="leading-[19px] cursor-pointer">Brand</p>
                    <p className="leading-[19px] cursor-pointer">Gul Ahmed</p>
                    <p className="leading-[19px] cursor-pointer">Gul Ahmed</p>
                    <p className="leading-[19px] cursor-pointer">Gul Ahmed</p>
                    <p className="leading-[19px] cursor-pointer">Gul Ahmed</p>
                </div>
                <div className="flex float-start justify-center  md:justify-between">
                    <p className="leading-[19px] cursor-pointer">Men`s Fashion</p>
                    <svg className="my-auto rotate-90 md:rotate-0 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="black" />
                    </svg>
                </div>
                <p className="leading-[19px] cursor-pointer">Electronics</p>
                <p className="leading-[19px] cursor-pointer">Home & Lifestyle</p>
                <p className="leading-[19px] cursor-pointer">Medicine</p>
                <p className="leading-[19px] cursor-pointer">Sports & Outdoor</p>
                <p className="leading-[19px] cursor-pointer">Baby`s & Toys</p>
                <p className="leading-[19px] cursor-pointer">Groceries & Pets</p>
                <p className="leading-[19px] cursor-pointer">Health & Beaty</p>
            </div>
            <div className='w-[0.5px] h-[384px] hidden md:flex bg-black mx-5 opacity-50'>
            </div>
            <div>
                <Slider />
            </div>
        </div>

    )
}

export default Hero
