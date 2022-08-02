import "./App.css";
import { members } from "./members";
import { Switch, Route } from "react-router-dom";
import Costumer from "./components/pages/costumer";
import Company from "./components/pages/company";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/customer/:id">
            <Costumer />
          </Route>
          <Route exact path="/company/:id">
            <Company />
          </Route>
          <Route exact path="/">
            <Home members={members} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
