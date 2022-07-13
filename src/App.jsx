import NavBar from'./components/NavBar/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItenListContainer from './components/ItemListContainer/ItenListContainer';



function App() {
  return (
    <div className="App">
        <NavBar />
        <ItenListContainer saludo= {'Bienvenidos'}/>


    </div>
  );
}

export default App;
