import PieChart from '../components/Dashboard/PieChart'
import Table from '../components/Dashboard/Table'
import Form from '../components/Form'
const Products = () => {
    return (
        <div className="row-span-11 m-6">
            <h1 className="text-4xl font-semibold mb-5 bg-gradient-to-r from-blue-300 to-blue-600" >Products</h1>
            <div className='grid md:grid-cols-2 gap-3'>
                <div>
                    <Form />
                </div>
                <div className='h-80 m-auto my-0'>
                    <PieChart />
                </div>
            </div>
            <div>
                <Table />
            </div>
        </div>
    )
}

export default Products
