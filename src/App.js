import Landing from './Components/Landing.js';
import About from './Components/About.js';
import './App.css';
import Sponsors from './Components/Sponsors.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing/>
      </header>
      <About/>
      <Sponsors/>
    </div>
  );
}

export default App;
