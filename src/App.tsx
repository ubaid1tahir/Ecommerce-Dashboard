
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Layout from "./pages/Layout"
import Products from "./pages/Products"
import Orders from "./pages/Orders"
import Customers from "./pages/Customers"
import Transactions from "./pages/Transactions"
import Messages from "./pages/Messages"


const App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout component={<Dashboard />} />} path="/"></Route>
          <Route element={<Layout component={<Products />} />} path="/products"></Route>
          <Route element={<Layout component={<Orders />} />} path="/orders"></Route>
          <Route element={<Layout component={<Customers />} />} path="/customers"></Route>
          <Route element={<Layout component={<Transactions />} />} path="/transactions"></Route>
          <Route element={<Layout component={<Messages />} />} path="/messages"></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
