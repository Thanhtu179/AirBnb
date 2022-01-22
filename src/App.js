

import { createBrowserHistory } from "history";
import { Route, Switch, Router } from "react-router-dom";

import Home from './pages/Home';
import RoomList from './pages/RoomList';
import Room from "./pages/Room";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/room" component={Room} />
        <Route exact path="/room-list" component={RoomList} />
      </Switch>
    </Router>
  );
}

export default App;
