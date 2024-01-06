import axios from "axios"
import React from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {
    // useEffect(()=>{
    //     axios.get('/api/v1/products/all-products')
    //     .then((res) => console.log(res))
    //     .catch(err => console.log(err))
    // })
    const [product, setProduct] = React.useState({
        name: '',
        price: '',
        category: '',
    });
    let image: any;

    const handleSubmit = (e: any) => {
        e.preventDefault();

        axios.post('/api/v1/products/add-product', {
            name: product.name,
            price: product.price,
            image: image,
            category: '657f4e5e79095646a5786823'
        }, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTgwOTE2MTAxOWU2NjYwZGJhOGQxNjQiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE3MDQxMTc0MTgsImV4cCI6MTcwNDEyNDYxOH0.Uf7M5EqhR5wu6_mTZUvipbeJspG-eUV5PljJVCHkZH8"
            }
        }).then(() => {
            // console.log(response);
            toast('Succesfully added the product')
            setProduct({ name: '', price: '', category: '' })
            setTimeout(() => {
                location.reload()
            }, 5000)
        }).catch(() => {
            // console.log("Error", err);
            toast('Error in adding the product')
            setProduct({ name: '', price: '', category: '' })
        })
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <form className="w-full max-w-lg mt-[1.5rem]" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Product Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} placeholder="Camera" />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Product Price
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="$1200" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Product Image
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" onChange={(e) => {
                            image = e.target?.files[0]
                        }} type="file" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Category
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>Food</option>
                                <option>Drinks</option>
                                <option>Vehicles</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                            Stock
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="25" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            Add Product
                        </label>
                        <input className="appearance-none block w-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white cursor-pointer border border-gray-200 rounded py-3 px-4 leading-tight focus:bg-white focus:border-gray-500" id="grid-city" type="submit" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form
