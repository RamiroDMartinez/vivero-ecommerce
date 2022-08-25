import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from'./components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import Cart from './components/Cart/Cart';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CartContextProvider from './components/contex/CartContex';


function App() {
  return (
    <BrowserRouter>
        <CartContextProvider>
        <div className="App">
          <NavBar />
            <Routes>
              <Route index path='/' element={<ItemListContainer/>} />
              <Route path='/categoria/:categoriaId'element={<ItemListContainer/>} />
              <Route path='/detalle/:detalleId'element={<ItemDetailConteiner/>} />
              <Route path='/cart'element={<Cart/>} />
              <Route path='*' element={ <Navigate to='/'/>} />
            </Routes>
        </div>
        </CartContextProvider>
    </BrowserRouter>
  
  )
}

export default App;
