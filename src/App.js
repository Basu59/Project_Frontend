import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// custom component
import Login from "./Components/Login";
import Register from "./Components/Register";
import UserHome from "./UserComponent/UserHome";
import Home from "./UserComponent/Home";
import All from "./All";
import Profile from "./Components/Profile";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import UpdateRoute from './Components/RouteDet/UpdateRoute';
import AddRoute from './Components/RouteDet/AddRoute';
import ListRoute from './Components/RouteDet/ListRoute';
import AddSche from './Components/ScheduleDet/AddSche';
import ListSchedule from './Components/ScheduleDet/ListSchedule';
import UpdateSche from './Components/ScheduleDet/UpdateSche';
import RouteDe from './UserComponent/RouteDe';
import ScheduleDe from './UserComponent/ScheduleDe';
import ListStop from './Components/StopDet/ListStop';
import AddStop from './Components/StopDet/AddStop';
import ViewStop from './Components/StopDet/ViewStop';
import UpdateStop from './Components/StopDet/UpdateStop';
import AddPassenger from './Components/PassengerDet/AddPassenger';
import UpdatePassenger from './Components/PassengerDet/UpdatePassenger';
import AddBus from './Components/BusDet/AddBus'
import ListBus from './Components/BusDet/ListBus';
import UpdateBus from './Components/BusDet/UpdateBus'
import ListPassenger from './Components/PassengerDet/ListPassenger';
import Main from "./Main";
import BusDe from "./UserComponent/BusDe";
import PassengerDe from "./UserComponent/PassengerDe";
import StopDe from "./UserComponent/StopDe"
import Service from "./Components/Service";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark text-warning shadow ">
          CUTM


          {currentUser ? (
            <div className="navbar-nav ml-auto ">
              <li className="nav-item">
                <Link to={"/Main"} className="nav-link text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link to={"/profile"} className="nav-link  text-light ">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link text-light" onClick={logOut}>
                <FiLogOut/>
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"}  className="nav-link  text-light">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />

          <Route exact path='/' component={All} />

          <Route exact path='/Home' component={Home} />
          <Route exact path='/userhome' component={UserHome} />
          <Route exact path="/main" component={Main}/>
         <Route exact path='/update-route/:id' component={UpdateRoute} />
          <Route exact path='/AddRoute' component={AddRoute} />
          <Route exact path='/ListRoute' component={ListRoute} />
          <Route exact path='/AddSche' component={AddSche} />

          <Route exact path='/ListSchedule' component={ListSchedule} />
          <Route exact path='/update-schedule/:id' component={UpdateSche} />

          <Route exact path='/update-stop/:id' component={UpdateStop} />
          <Route exact path='/view-stop/:id' component={ViewStop} />
          <Route exact path='/ListStop' component={ListStop} />
          <Route exact path='/AddStop' component={AddStop} />


          <Route exact path='/update-passenger/:id' component={UpdatePassenger} />
          <Route exact path='/AddPassenger' component={AddPassenger} />
          <Route exact path='/ListPassenger' component={ListPassenger} />

          <Route exact path='/AddBus' component={AddBus} />
          <Route exact path='/ListBus' component={ListBus} />
          <Route exact path='/update-bus/:id' component={UpdateBus} />

          <Route exact path='/RouteDe' component={RouteDe} />
          <Route exact path='/BusDe' component={BusDe} />
          <Route exact path='/ScheduleDe' component={ScheduleDe} />
          <Route exact path='/PassengerDe' component={PassengerDe} />
          <Route exact path='/StopDe' component={StopDe} />

        </Switch>
      </div>

    </Router>
  );
};

export default App;
