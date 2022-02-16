import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ContenedorProductos from './components/ContenedorProductos/ContenedorProductos';
import Carousel from './components/Carousel/Carousel';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path ='/' element={<Carousel/>} />
            <Route exact path ='/productos' element={<ContenedorProductos />} />
            <Route exact path ='/productos/:idCategoria' element={<ContenedorProductos />} />
            <Route exact path ='/cart' element={<Cart />} />
            <Route exact path ='/detailContainer/:idProducto' element={<ItemDetailContainer />} />
            
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
    
  );
}

export default App;
