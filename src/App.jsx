import './App.css'
import './responsive.css'
import Navbar from "./components/global/navbar.jsx";
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./pages/home.jsx";
import Ourprocess from "./pages/ourprocess.jsx";
import About from "./pages/about.jsx";
import OurProducts from "./pages/ourProducts.jsx";
import ProductDetails from "./pages/productDetails.jsx";
import Contactus from "./pages/contactus.jsx";
import Footer from "./components/global/footer.jsx";
import ProductSlider from "./components/productDetails/productSlider.jsx";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

    function ScrollToTop() {
        const {pathname} = useLocation();
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

        return () => {
        };
    }, []);

    return (
        <main>
            <ScrollToTop/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<OurProducts/>}/>
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/product/:id" element={<ProductSlider />} />
                <Route path="/process" element={<Ourprocess/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contactus/>}/>
            </Routes>
            <Footer/>
        </main>
    )
}

export default App
