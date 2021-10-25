import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch,Route, Router } from "react-router-dom";

import UpdateRoute from './Components/RouteDet/UpdateRoute';
import AddRoute from './Components/RouteDet/AddRoute';
import ListRoute from './Components/RouteDet/ListRoute';

import AddSche from './Components/ScheduleDet/AddSche';
import ListSchedule from './Components/ScheduleDet/ListSchedule';
import UpdateSche from './Components/ScheduleDet/UpdateSche';
import RouteDe from './UserComponent/RouteDe'; 
import ScheduleDe from './UserComponent/ScheduleDe';
import Main from './Main';
import Home from './Home';
function App() {
  return (
    <>
{/* <Nav/> */}
    <Switch>
       <Route exact path='/update-route/:id' component={UpdateRoute} />
       <Route exact path='/AddRoute' component={AddRoute} />
       <Route exact path='/ListRoute' component={ListRoute} />
       <Route exact path='/AddSche' component={AddSche} />
       <Route exact path='/ListSchedule' component={ListSchedule} />
       <Route exact path='/update-schedule/:id' component={UpdateSche} />

       <Route exact path='/Home' component={Home} />

       <Route exact path='/' component={Main} />
       <Route exact path='/RouteDe' component={RouteDe} />
       <Route exact path='/ScheduleDe' component={ScheduleDe} />

       </Switch>
       </>
  );
}

export default App;
