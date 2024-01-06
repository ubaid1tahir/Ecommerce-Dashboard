
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Layout from "./pages/Layout"
import Products from "./pages/Products"
import Orders from "./pages/Orders"
import Customers from "./pages/Customers"
import Transactions from "./pages/Transactions"
import Messages from "./pages/Messages"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useSelector } from "react-redux"
import Home from "./pages/User/Home"


const App = () => {
  const role = useSelector((store:any) => store.role)
  
  return (
    <>
      
      <Router>
        {role==="admin" ? (
          
          <Routes>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Register />} path="/register"></Route>
          <Route element={<Layout component={<Dashboard />} />} path="/dashboard"></Route>
          <Route element={<Layout component={<Products />} />} path="/products"></Route>
          <Route element={<Layout component={<Orders />} />} path="/orders"></Route>
          <Route element={<Layout component={<Customers />} />} path="/customers"></Route>
          <Route element={<Layout component={<Transactions />} />} path="/transactions"></Route>
          <Route element={<Layout component={<Messages />} />} path="/messages"></Route>
          </Routes>
        ) : (
          <Routes>

            <Route element={<Home />} path="/"></Route>
            <Route element={<Login />} path="/login"></Route>
            <Route element={<Register />} path="/register"></Route>
          </Routes>
        )}
          
      </Router>
    </>
  )
}

export default App
