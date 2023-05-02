import Landing from "./Components/Landing.js";
import About from "./Components/About.js";
import Footer from "./Components/Footer/Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing />
      </header>
      <About />
      <Footer />
    </div>
  );
}

export default App;
