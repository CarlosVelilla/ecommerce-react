import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Contact from "./pages/Contact/Contact"
import PageNotFound from "./pages/PageNotFound/PageNotFound"
import Footer from "./components/Footer/Footer"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import ShoppingCart from "./contexts/ShoppingCart"

export const currency = "$"

function App() {
  return (
    <Router>
      <ShoppingCart>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </ShoppingCart>
    </Router>
  );
}

export default App;