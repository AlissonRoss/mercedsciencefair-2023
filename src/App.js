
import NavBar from './Components/NavBar.js'
import Landing from "./Components/Landing.js";
import About from "./Components/About.js";
import Footer from "./Components/Footer.js";
import "./App.css";
import Sponsors from './Components/Sponsors.js';

function App() {
  return (
    <div className="App">
        <NavBar/>
      <header className="App-header">
        <Landing />
      </header>

      <About />
      <Sponsors/>
      <Footer />
    
    </div>
  );
}

export default App;
