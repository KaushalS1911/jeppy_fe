import './App.css'
import './responsive.css'
import Navbar from "./components/global/navbar.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/home.jsx";
import Ourprocess from "./pages/ourprocess.jsx";
import About from "./pages/about.jsx";
import OurProducts from "./pages/ourProducts.jsx";
import ProductDetails from "./pages/productDetails.jsx";
import Contactus from "./pages/contactus.jsx";
import Footer from "./components/global/footer.jsx";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import ProtectedRoute from "./pages/admin/ProtectedRoute.jsx";
import AdminShell from "./pages/admin/AdminShell.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminProducts from "./pages/admin/AdminProducts.jsx";
import AdminProductForm from "./pages/admin/AdminProductForm.jsx";
import AdminOrders from "./pages/admin/AdminOrders.jsx";
import AdminContent from "./pages/admin/AdminContent.jsx";
import AdminLeads from "./pages/admin/AdminLeads.jsx";


function App() {

   const location = useLocation();
   const isAdminRoute = location.pathname.startsWith('/admin');

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      offset: 120,
      easing: 'ease-in-out'
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

    return (
        <main>
            <ScrollToTop/>
            {!isAdminRoute && <Navbar/>}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<OurProducts/>}/>
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/process" element={<Ourprocess/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contactus/>}/>
                <Route path="/admin/login" element={<AdminLogin/>}/>
                <Route path="/admin" element={<ProtectedRoute/>}>
                    <Route element={<AdminShell/>}>
                        <Route index element={<AdminDashboard/>}/>
                        <Route path="products" element={<AdminProducts/>}/>
                        <Route path="products/new" element={<AdminProductForm/>}/>
                        <Route path="products/:productId" element={<AdminProductForm/>}/>
                        <Route path="orders" element={<AdminOrders/>}/>
                        <Route path="content" element={<AdminContent/>}/>
                        <Route path="leads" element={<AdminLeads/>}/>
                    </Route>
                </Route>
            </Routes>
            {!isAdminRoute && <Footer/>}
        </main>
    )
}

export default App
