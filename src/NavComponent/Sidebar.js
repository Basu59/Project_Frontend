import React from "react";
import classnames from "classnames";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from '../Main'
import "./styles.css";
import "./sidebar.css"
import { AiFillHome } from 'react-icons/ai';
import { BsStoplights } from 'react-icons/bs';
import { FaBus } from 'react-icons/fa';
import { FaRoute } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { BiTimeFive} from 'react-icons/bi';


class Sidebar extends React.Component {
  state = {
    opens: window.matchMedia("(min-width: 1024px)").matches || false
  };

  ontoggleNav = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { open } = this.state;
    const mobile = window.matchMedia("(max-width: 708px)").matches;
    console.log(mobile, open);
    return (
      <div>
        <div className="navHeaderWrap">
          <Header ontoggleNav={this.ontoggleNav} />
        </div>
        <div className="bodyWrap">
          <div className={classnames({ blur: mobile && open })} />
          <div
            className={classnames(
              "sidenav",
              
              { sidenavClose: !open },
              { sidenavOpen: open }
            )}
          >
            <a
              href="javascript:void(0)"
              className="closebtn hidex"
              onClick={() => this.ontoggleNav("0px")}
            >
              &times;
            </a>
            <a href="/Home"><AiFillHome />  Home</a>
            <a href="/ListStop"><BsStoplights/>  Stops</a>
            <a href="/ListBus"><FaBus/>  Bus</a>
            <a href="/ListPassenger"><IoMdPeople/>  Passenger</a>
            <a href="/ListRoute"><FaRoute/>  Route</a>
            <a href="/ListSchedule"><BiTimeFive/>  Schedule</a>

          </div>
{/* 
          <div
            className={classnames(
              "main",
              { mainShrink: open },
              { mainExpand: !open },
              { noscroll: mobile && open }
            )}
          >
          </div> */}
        </div>
      </div>
    );
  }
}

export default Sidebar;
