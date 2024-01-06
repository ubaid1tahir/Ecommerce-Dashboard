
const Footer = () => {
    return (
        <div className="bg-black items-center text-white min-h-56 mt-20">
            <div className="mx-24 flex justify-between pt-6">
                <h1 className="text-2xl font-semibold cursor-pointer">Exclusive</h1>
                <div className="flex flex-col">
                    <h1 className="text-xl">Quick Links</h1> 
                    <ul className="mt-5 space-y-2">
                        <li className="cursor-pointer hover:underline hover:underline-offset-4">Home</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4">Contact</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4">About</li>
                        <li className="cursor-pointer hover:underline hover:underline-offset-4">Sign Up</li>
                    </ul>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Footer
