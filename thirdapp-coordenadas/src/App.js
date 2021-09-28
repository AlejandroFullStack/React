
import logo from './logo.svg';
import './App.css';
import Coordenadas from './Component/Coordenadas'
import Coordenadas2 from './Component/Coordenadas2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Coordenadas />
        <Coordenadas2 />
        <p>
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
