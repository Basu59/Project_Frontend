import React, { Component } from 'react'
import Service from '../Service';
import { Form, Row, Button } from "react-bootstrap";

export default class AddBus extends Component {
  constructor(props) {
    super(props);


    this.state = {
      busno: '',
      drivername: '',
      mobileno: ''


    }
    this.changeBusNoHandler = this.changeBusNoHandler.bind(this);
    this.changeDNameHandler = this.changeDNameHandler.bind(this);
    this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
    this.saveBus = this.saveBus.bind(this);
  }

  saveBus = (e) => {
    e.preventDefault();

    let bus = { busno: this.state.busno, drivername: this.state.drivername, mobileno: this.state.mobileno }
    console.log('bus =>' + JSON.stringify(bus));

    Service.createBus(bus).then(res => {
      this.props.history.push('/ListBus');
    });


  }

  changeBusNoHandler(event) {
    this.setState({ busno: event.target.value })
  }

  changeDNameHandler(event) {
    this.setState({ drivername: event.target.value })
  }

  changeMobileNoHandler(event) {
    this.setState({ mobileno: event.target.value })
  }



  cancel() {
    this.props.history.push("/ListBus");
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
                  <label for="floatingInput">Bus No</label>
                  <input class="form-control" id="floatingInput" value={this.state.busno} onChange={this.changeBusNoHandler} />
                </div>

                <div class="form-floating mb-3">
                  <label for="floatingInput">Driver Name</label>
                  <input class="form-control" id="floatingInput" value={this.state.drivername} onChange={this.changeDNameHandler} />
                </div>

                <div class="form-floating mb-3">
                  <label for="floatingInput">Mobile No</label>
                  <input class="form-control" id="floatingInput" value={this.state.mobileno} onChange={this.changeMobileNoHandler} />
                </div>

                <button className="btn btn-success me-3 mb-2" onClick={this.saveBus}>Save</button>
                <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
              </Form>
            </div>

          </div>
        </div>



      </>
    );
  }
}
