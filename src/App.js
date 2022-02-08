

import { createBrowserHistory } from "history";
import { Route, Switch, Router } from "react-router-dom";

import Home from './pages/Home';
import RoomList from './pages/RoomList';
import Room from "./pages/Room";
import LoginRegister from "./pages/LoginRegister";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import ManagerLocation from "./pages/ManagerLocation";
import ManagerUsers from "./pages/ManagerUsers";
import ManagerRooms from "./pages/ManagerRooms"

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/room/:id" component={Room} />
        <Route exact path="/room-list" component={RoomList} />
        <Route exact path="/login-register" component={LoginRegister} />
        <AdminTemplate exact path="/admin/ManagerRooms" Component={ManagerRooms} />
        <AdminTemplate exact path="/admin/ManagerLocation" Component={ManagerLocation} />
        <AdminTemplate exact path="/admin/ManagerUsers" Component={ManagerUsers} />
      </Switch>
    </Router>
  );
}

export default App;
