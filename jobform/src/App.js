import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>

        <Switch>
          <Route  exact path="/form">
             <Form/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
