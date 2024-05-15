import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
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
              <Route path="/info" />
            </Routes>
          </Router>
        </div>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
