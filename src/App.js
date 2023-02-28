import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<CartWidget />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};


