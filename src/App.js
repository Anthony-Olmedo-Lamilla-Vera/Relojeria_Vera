import "./App.css";
import MainProductos from "./Elements/MainProductos";
import Nav from "./Elements/Nav";
import Article from "./Secciones/Article";

function App() {
  return (
    //RUTAS
    <div className="App">
      <header>
        <Nav />
      </header>
      <Article />
      <MainProductos />
    </div>
  );
}

export default App;
