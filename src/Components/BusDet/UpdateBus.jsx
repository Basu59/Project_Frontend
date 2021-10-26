import React, { Component } from 'react'
import Service from '../Service';
export default class UpdateBus extends Component {
  constructor(props) {
    super(props);


    this.state = {
      id: this.props.match.params.id,
      busno: '',
      dname: '',
      mobileno: ''
     
    }
    this.changeBusNoHandler = this.changeBusNoHandler.bind(this);
    this.changeDNameHandler = this.changeDNameHandler.bind(this);
    this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
    this.updateBus = this.updateBus.bind(this);
  }

  componentDidMount() {
    Service.getBusById(this.state.id).then((res) => {
      let bus = res.data;
      this.setState({
        busno: bus.busno,
        drivername : bus.drivername ,
        mobileno: bus.mobileno
      });
    });
  }
  updateBus = (e) => {
    e.preventDefault();

    let bus = { busno: this.state.busno, drivername: this.state.drivername, mobileno: this.state.mobileno }
    console.log('bus =>' + JSON.stringify(bus));
    console.log('id =>' + JSON.stringify(this.state.id));
    Service.updateBus(bus, this.state.id).then(res => {
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


      <div className="container">
        <div className="row ">
          <div className="card col-md-4 offset-md-4 offset-md-4">
            <h2>Update Details</h2>

            <form>
             <div className="form-group">
                <label>Bus_No</label>
                <input placeholder="Bus_No" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.busno} onChange={this.changeBusNoHandler} />
              </div>

              <div className="form-group">
                <label>Driver Name</label>
                <input  placeholder="Driver Name" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.drivername} onChange={this.changeDNameHandler} />
              </div>
              <div className="form-group">
                <label>mobileno</label>
                <input placeholder="mobileno" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.mobileno} onChange={this.changeMobileNoHandler} />
              </div>
           
              <button className="btn btn-success me-3 mb-2" onClick={this.updateBus}>Save</button>
              <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>cancel</button>
            </form>
          </div>

        </div>

      </div>

    );
  
  }
}