import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Pages/Products/Products/Products';
import ProductDetails from './Pages/Products/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="productDetails/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
