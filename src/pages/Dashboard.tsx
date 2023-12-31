import LineChart, { DoughnutChart } from "../components/Dashboard/LineChart";
import { FaUsers } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FiMessageSquare } from "react-icons/fi";



const Dashboard = () => {
    return (
        <div className="row-span-11 m-6">
            <h1 className="text-4xl font-semibold mb-5 bg-gradient-to-r from-indigo-300 to-indigo-500" >Dashboard</h1>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 mb-10">
                <div className="bg-gray-200 rounded-lg text-center cursor-pointer">
                    <h1 className="text-2xl font-semibold relative"><div className="absolute left-6 hidden lg:block top-1"><FaUsers /></div>Customers</h1>
                    <p>Numbers : <span className="font-medium">45</span> </p>
                </div>
                <div className="bg-gray-200 rounded-lg text-center cursor-pointer">
                    <h1 className="text-2xl font-semibold relative"><div className="absolute left-6 hidden lg:block top-1"><FaCartShopping /></div>Total Sales</h1>
                    <p>Numbers : <span className="font-medium">$4500</span> </p>
                </div>
                <div className="bg-gray-200 rounded-lg text-center cursor-pointer">
                    <h1 className="text-2xl font-semibold relative"><div className="absolute left-6 hidden lg:block top-1"><HiMiniShoppingBag /></div>Products</h1>
                    <p>Numbers : <span className="font-medium">35</span> </p>
                </div>
                <div className="bg-gray-200 rounded-lg text-center cursor-pointer">
                    <h1 className="text-2xl font-semibold relative"><div className="absolute left-6 hidden lg:block top-1"><FiMessageSquare /></div>Messages</h1>
                    <p>Numbers : <span className="font-medium">45</span> </p>
                </div>
            </div>

            <div className="md:flex items-center">
                <LineChart />
                <DoughnutChart />
            </div>

        </div>
    )
}

export default Dashboard
