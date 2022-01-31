import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';

import ContenedorProductos from './components/ContenedorProductos/ContenedorProductos';
import Carousel from './components/Carousel/Carousel';
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          {/* <Route exact path ='/' element={<ItemListContainer />} /> */}
          <Route exact path ='/' element={<Carousel/>} />
          <Route exact path ='/productos' element={<ContenedorProductos />} />
          <Route exact path ='/productos/:idCategoria' element={<ContenedorProductos />} />
          <Route exact path ='/cart' element={<CartWidget />} />
          <Route exact path ='/detailContainer/:idProducto' element={<ItemDetailContainer />} />
          
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
