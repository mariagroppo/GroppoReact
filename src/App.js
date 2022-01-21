/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ContenedorProductos from './components/ContenedorProductos/ContenedorProductos';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ContenedorProductos />
    </div>
  );
}

export default App;
