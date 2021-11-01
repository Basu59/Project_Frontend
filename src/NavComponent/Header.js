import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./header.css";
export default class Example extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { ontoggleNav } = this.props;
    return (
      <div>
        <Navbar className="Backnav" >
          <NavbarBrand>
            <a href="/">CUTM</a>
            <span className="hmbger" onClick={ontoggleNav}>
              &#9776;
            </span>
          </NavbarBrand>
         
        </Navbar>
      </div>
    );
  }
}
