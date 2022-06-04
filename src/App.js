import Testimonio from './components/Testimonios';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que opinan nuestros comensales sobre las Kaloburger</h1>
        <Testimonio
          nombre='Lucas Rodriguez'
          imagen='simple'
          ubicacion='San Andres de Giles'
          opinion='since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'/>
        <Testimonio
          nombre='Alan Gomez'
          imagen='dobleBacon'
          ubicacion='Mercedes'
          opinion='since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting 1500s, when an unknown printer took a galley of type and scrambled it 1500s, when an unknown printer took a galley of type and scrambled it'/>
        <Testimonio
          nombre='Camila Dominic'
          imagen='dobleCebolla'
          ubicacion='San Antonio de Areco'
          opinion='since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ook a galley of type and scrambled it to make ook a galley of type and scrambled it to make '/>
      </div>
    </div>
  );
}

export default App;
