import { Home, Detail, MyPokemon } from './pages';
import { ApolloProvider } from "@apollo/client";
import client from "./config"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/myPokemon">
            <MyPokemon />
          </Route>
          <Route path="/:name">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
