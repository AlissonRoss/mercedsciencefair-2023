import Home from './Components/Home.js';
import Team from './Components/Team.js';
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Team" element={<Team />}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
