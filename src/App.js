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
import ListStop from './Components/StopDet/ListStop';
import AddStop from './Components/StopDet/AddStop';
import ViewStop from './Components/StopDet/ViewStop';
import UpdateStop from './Components/StopDet/UpdateStop';
import AddPassenger from './Components/PassengerDet/AddPassenger';
import UpdatePassenger from './Components/PassengerDet/UpdatePassenger';
import AddBus from './Components/BusDet/AddBus'
import ListBus from './Components/BusDet/ListBus'
import UpdateBus from './Components/BusDet/UpdateBus'
import ListPassenger from './Components/PassengerDet/ListPassenger';
import Main from './Main';
import Home from './Home';
import HomeNav from './HomeNav';
function App() {
  return (
    <>
    <HomeNav/>
{/* <Nav/> */}
    <Switch>
       <Route exact path='/update-route/:id' component={UpdateRoute} />
       <Route exact path='/AddRoute' component={AddRoute} />
       <Route exact path='/ListRoute' component={ListRoute} />
       <Route exact path='/AddSche' component={AddSche} />
       <Route exact path='/ListSchedule' component={ListSchedule} />
       <Route exact path='/update-schedule/:id' component={UpdateSche} />

       <Route exact path='/Home' component={Home} />
       <Route exact path='/update-stop/:id' component={UpdateStop} />
       <Route exact path='/view-stop/:id' component={ViewStop} />
       <Route exact path='/ListStop' component={ListStop} />
       <Route exact path='/AddStop' component={AddStop} />
       <Route exact path='/' component={Main} />
       <Route exact path='/RouteDe' component={RouteDe} />
       <Route exact path='/ScheduleDe' component={ScheduleDe} />
       <Route exact path='/update-passenger/:id' component={UpdatePassenger} />
       <Route exact path='/AddPassenger' component={AddPassenger} />
       <Route exact path='/AddBus' component={AddBus} />
       <Route exact path='/ListBus' component={ListBus} />
       <Route exact path='/update-bus/:id' component={UpdateBus} />
       <Route exact path='/ListPassenger' component={ListPassenger} />

       
       </Switch>
       </>
  );
}

export default App;
