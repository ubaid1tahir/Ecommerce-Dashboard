import Header from "../components/Header"
import Sidebar from "../components/Sidebar"



const Layout = ({component}: any) => {
    return (
        <>
        <div className="max-w-screen-xl grid md:grid-cols-6 grid-cols-4">
        <Sidebar />
        <div className="md:col-span-5 col-span-3 grid grid-rows-12">
        <Header />
        {component}
        </div>
        </div>
        </>

    )
}

export default Layout
