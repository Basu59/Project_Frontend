import React, { Component } from 'react'
import Service from '../Service';
import { Form, Row, Button } from "react-bootstrap";

export default class AddPassenger extends Component {
  constructor(props) {
    super(props);

    this.state = {

      firstname: '',
      lastname: '',
      emailid: '',
      mobileno: ''

    }
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
    this.savePassenger = this.savePassenger.bind(this);
  }

  savePassenger = (e) => {
    e.preventDefault();

    let passenger = { firstname: this.state.firstname, lastname: this.state.lastname, emailid: this.state.emailid, mobileno: this.state.mobileno }
    console.log('passenger =>' + JSON.stringify(passenger));

    Service.createPassenger(passenger).then(res => {
      this.props.history.push('/ListPassenger');
    });


  }
  changeFirstNameHandler(event) {
    this.setState({ firstname: event.target.value })
  }

  changeLastNameHandler(event) {
    this.setState({ lastname: event.target.value })
  }

  changeEmailIdHandler(event) {
    this.setState({ emailid: event.target.value })
  }

  changeMobileNoHandler(event) {
    this.setState({ mobileno: event.target.value })
  }



  cancel() {
    this.props.history.push("/ListPassenger");
  }

  render() {
    return (

      <>
        <div >
        <div className="card col-md-6 pt-9 offset-md-3 offset-md-3  bg-light shadow-lg rounded">
            <h3 className="text-center text mt-2">Route</h3>
            <div className="card-body">
              <Form>
                <div class="form-floating mb-3">
                  <label for="floatingInput">First Name</label>
                  <input type="text" class="form-control" id="floatingInput" 
                    value={this.state.firstname} onChange={this.changeFirstNameHandler} />
                </div>

                <div class="form-floating mb-3">
                  <label for="floatingInput">Last Name</label>
                  <input type="text" class="form-control" id="floatingInput" 
                    value={this.state.lastname} onChange={this.changeLastNameHandler} />
                </div>

                <div class="form-floating mb-3">
                  <label for="floatingInput">Email Id</label>
                  <input type="RouteNo" class="form-control" id="floatingInput" 
                    value={this.state.emailid} onChange={this.changeEmailIdHandler} />
                </div>

                <div class="form-floating mb-3">
                  <label for="floatingInput">Mobile No</label>
                  <input type="Number" class="form-control" id="floatingInput" 
                    value={this.state.mobileno} onChange={this.changeMobileNoHandler} />
                </div>

                <button className="btn btn-success me-3 mb-2" onClick={this.savePassenger}>Save</button>
                <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
              </Form>
            </div>

          </div>
        </div>



      </>
    );
  }
}