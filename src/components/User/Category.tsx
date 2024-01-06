import { useState } from 'react'
import product1 from '../../assets/Category-CellPhone.png'
import product2 from '../../assets/Category-Computer.png'
import product3 from '../../assets/Category-SmartWatch.png'
import product5 from '../../assets/Category-Headphone.png'
import product6 from '../../assets/Category-Gamepad.png'
import product7 from '../../assets/Category-Camera.png'

const Category = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    let products = 4;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === products - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? products - 1 : prevIndex - 1));
    };

    const moveBy = 100; // Adjust the value based on your preference

    const handleMove = (direction: any) => {
        setCurrentIndex((prevIndex) => {
            const newIndex = direction === 'next' ? prevIndex + 1 : prevIndex - 1;
            return newIndex < 0 ? products - 1 : newIndex % products;
        });
    };

    const sliderStyle = {
        transform: `translateX(-${currentIndex * moveBy}px)`,
        transition: 'transform 0.5s ease-in-out', // Smooth transition
    };
    return (
        <>
            <div className="md:mt-12 mt-8 grid grid-cols-2 md:my-10">
                <div>
                    <div className="flex">
                        <svg width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="40" rx="4" fill="#DB4444" />
                        </svg>
                        <p className="ml-4 m-auto text-[#DB4444]">Categories</p>
                    </div>
                    <div className="mt-6 flex justify-between items-end align-middle">
                        <p className="md:text-3xl text-xl font-semibold tracking-wide">Browse By Category</p>
                    </div>
                </div>
                <div className="md:flex hidden justify-end items-end text-end space-x-1">
                    <button onClick={() => { handleMove('prev') }} className="bg-[#F5F5F5] rounded-full w-[46px] h-[46px]">
                        <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11 5L4 12L11 19M4 12H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button onClick={() => { handleMove('next') }} className="bg-[#F5F5F5] rounded-full w-[46px] h-[46px]">
                        <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>

            </div>
            <div className="flex lg:w-[1308px] gap-[30px] mb-12" style={sliderStyle}>
                <div className='w-[170px] border px-[55px] py-[25px] border-gray-500 rounded-md'>
                    <img src={product1} alt="" />
                    <p>Phones</p>
                </div>
                <div className='w-[170px] border px-[55px] py-[25px] border-gray-500 rounded-md'>
                    <img src={product2} alt="" />
                    <p>Computer</p>
                </div>
                <div className='w-[170px] border px-[55px] py-[25px] border-gray-500 rounded-md'>
                    <img src={product7} alt="" />
                    <p>Camera</p>
                </div>
                <div className='w-[170px] text-center border px-[55px] py-[25px] border-gray-500 rounded-md'>
                    <img src={product3} alt="" />
                    <p className='m-auto'>SmartWatch</p>
                </div>
                <div className='w-[170px] border px-[55px] py-[25px] border-gray-500 rounded-md'>
                    <img src={product5} alt="" />
                    <p>HeadPhones</p>
                </div>
                <div className='w-[170px] border px-[55px] py-[25px] border-gray-500 rounded-md'>
                    <img src={product6} alt="" />
                    <p>Gaming</p>
                </div>

            </div>
            <hr />
            
        </>
    )
}

export default Category
