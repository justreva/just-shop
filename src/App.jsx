import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Info from "./pages/info/Info";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/info/:id" element={<Info />} />
            </Routes>
          </Router>
        </div>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
