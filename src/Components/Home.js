import Prizes from './Prizes.js';
import About from "./About.js";
import Footer from "./Footer.js";
import NavBar from './NavBar.js'
import Landing from "./Landing.js";
import "../App.css";
import Sponsors from './Sponsors.js';

function Home() {
  return (
    <div className="App">
     <header className="App-header">
        <NavBar />
        <Landing />
      </header>
        <About/>
        <Prizes/>
        <Sponsors/>
        <Footer />
    </div>
  );
}

export default Home;