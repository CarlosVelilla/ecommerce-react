import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Contact from "./pages/Contact/Contact"
import Footer from "./components/Footer/Footer"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;