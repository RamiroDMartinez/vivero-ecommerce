import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from'./components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar />
            <Routes>
              <Route index path='/' element={<ItemListContainer/>} />
              <Route  path='/categoria/:categoriaId' element={<ItemListContainer />} />
              <Route path='/detalle/:detalleId'element={<ItemDetailConteiner/>} />
              <Route path='*' element={ <Navigate to='/'/> } />
            </Routes>
        </div>
    </BrowserRouter>
  
  )
}

export default App;
