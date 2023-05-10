import Landing from "./Landing";
import NavBar from "./NavBar";
import "../App.css";

function Team() {
    return (
      <div className='App'>
        <header className="App-header">
            <NavBar />
            <Landing />
        </header>
        <div className="Team">
            <h1>Meet Our Team</h1>
            <h4>Coming Soon!</h4>
        </div>
      </div>
    )
}export default Team;
  