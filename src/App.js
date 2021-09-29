import { Home } from './pages';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/">
          <Home title="hai"/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
