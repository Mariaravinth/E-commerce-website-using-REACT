import { Routes, Route } from 'react-router-dom';
import './App.css';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import ProductDetails from './pages/ProductDetails';
import ProductListPage from './pages/ProductListPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/account" element={<LoginRegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product-details/" element={<ProductDetails />} />
      </Routes>      
    </div>
  );
}

export default App;
