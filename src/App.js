import './App.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Couter from './Componants/Counter';
import Home from './Componants/Home';
import Error from './Componants/Error';
import Navbar from './Componants/Navbar';
import Product from './Componants/Product';
import Products from './Componants/Products';
import Todo from './Componants/Todo/Todo';
import RegisterForm from './Componants/RegisterForm/RegisterForm';

function App() {
  const value = 20;
  return (
    <div className='container text-center'>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="counter" element={<Couter value={value} />} />
          <Route path="products" element={<Products />} />
          <Route path="todo" element={<Todo />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
