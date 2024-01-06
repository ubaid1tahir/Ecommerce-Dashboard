import product1 from '../../assets/g92-2-500x500 1.png'
import product2 from '../../assets/ak-900-01-500x500 1.png'
import product3 from '../../assets/g27cq4-500x500 1.png'
import product4 from '../../assets/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png'
import product5 from '../../assets/2593105.webp'
import mobile from '../../assets/Frame 560.png'
import { useState } from 'react'
const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleMove = (direction : string) => {
        if(direction === 'next'){
            if(currentIndex === images.length - 1){
                setCurrentIndex(0)
            }else{
                setCurrentIndex(currentIndex + 1)
            }
        }
        else if(direction === 'prev'){
            if(currentIndex === 0){
                setCurrentIndex(images.length - 1)
            }
            else{
                setCurrentIndex(currentIndex - 1)
            }
        }
    }
    let images = [mobile, product5,product1, product2, product3, product4]

    
    
    return (
        <div className='relative'>
            <img className='w-[892px] h-[344px]' src={images[currentIndex]} alt="" />
            <div className="md:flex absolute top-[40%] hidden justify-end items-end text-end space-x-1">
                <button onClick={() => handleMove('prev')} className="hover:bg-[#F5F5F5] rounded-full w-[46px] h-[46px]">
                    <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11 5L4 12L11 19M4 12H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="md:flex absolute right-0 top-[40%] hidden justify-end items-end text-end space-x-1" >
                <button onClick={() => handleMove('next')} className="hover:bg-[#F5F5F5] rounded-full w-[46px] h-[46px]">
                    <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default Slider
