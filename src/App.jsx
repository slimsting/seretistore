//react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


//pages
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import CheckOut from "./pages/CheckOut"

//components 
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className=" overflow-hidden">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>

    </div>
  )
}