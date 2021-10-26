import React, { Component } from 'react'
import Service from '../Service';
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
        <div className="container">

          <div className="row justify-content-center">
            <div className="card ">

              <h2 >Bus Details</h2>
              <form>

                <div class="form-floating mb-3">
                  <input class="form-control" id="floatingInput" placeholder="RouteNo"
                    value={this.state.busno} onChange={this.changeBusNoHandler} />
                  <label for="floatingInput">Bus No</label>
                </div>

                <div class="form-floating mb-3">
                  <input class="form-control" id="floatingInput" placeholder="RouteNo"
                    value={this.state.drivername} onChange={this.changeDNameHandler} />
                  <label for="floatingInput">dname</label>
                </div>

                <div class="form-floating mb-3">
                  <input class="form-control" id="floatingInput" placeholder="RouteNo"
                    value={this.state.mobileno} onChange={this.changeMobileNoHandler} />
                  <label for="floatingInput">mobileno</label>
                </div>




                {/* example */}


                <button className="btn btn-success me-3 mb-2" onClick={this.saveBus}>Save</button>
                <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
              </form>
            </div>

          </div>
        </div>



      </>
    );
  }
}
