import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home.js"

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            
          </Switch>
      </Router>
    </>
  );
}

export default App;
