//react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CheckOut from "./pages/CheckOut";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
//components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className=" overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/electronics" element={<Electronics />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}
