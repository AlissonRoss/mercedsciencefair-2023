import Landing from './Components/Landing.js';
import About from './Components/About.js';
import NavBar from './Components/NavBar.js'
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
      <header className="App-header">
        <Landing/>
      </header>
      <About/>
    </div>
  );
}

export default App;
