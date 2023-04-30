import Landing from './Components/Landing.js';
import About from './Components/About.js';
import Prizes from './Components/Prizes.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing/>
      </header>
      <About/>
      <Prizes/>
    </div>
  );
}

export default App;
