import { BarChart } from "../components/Dashboard/BarChart"

const Orders = () => {
    return (
        <div className="row-span-11 m-6">
            <h1 className="text-4xl font-semibold mb-5 bg-gradient-to-r from-indigo-300 to-indigo-500">Orders</h1>
            <div className="h-96 w-96 md:h-1/2 md:w-1/2">
            <BarChart />

            </div>
        </div>
    )
}

export default Orders
