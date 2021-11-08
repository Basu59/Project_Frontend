import React, { Component } from 'react'
import Service from '../Service';
import { Form, Row, Button } from "react-bootstrap";

export default class UpdateRoute extends Component {
  constructor(props) {
    super(props);


    this.state = {
      id: this.props.match.params.id,
      routeno: '',
      busno: '',
      origin: '',
      destination: '',
     
    }
    this.changeRouteNoHandler = this.changeRouteNoHandler.bind(this);
    this.changeBusNoHandler = this.changeBusNoHandler.bind(this);
    this.changeOriginHandler = this.changeOriginHandler.bind(this);
    this.changeDestinationHandler = this.changeDestinationHandler.bind(this);
    this.updateRoute = this.updateRoute.bind(this);
  }

  componentDidMount() {
    Service.getRouteById(this.state.id).then((res) => {
      let route = res.data;
      this.setState({
        routeno: route.routeno,
        busno: route.busno,
        origin: route.origin,
        destination: route.destination
      });
    });
  }
  updateRoute = (e) => {
    e.preventDefault();

    let route = { routeno: this.state.routeno, busno: this.state.busno, origin: this.state.origin, destination: this.state.destination }
    console.log('route =>' + JSON.stringify(route));
    console.log('id =>' + JSON.stringify(this.state.id));
    Service.updateRoute(route, this.state.id).then(res => {
      this.props.history.push('/ListRoute');
    });
  }
  changeRouteNoHandler(event) {
    this.setState({ routeno: event.target.value })
  }

  changeBusNoHandler(event) {
    this.setState({ busno: event.target.value })
  }

  changeOriginHandler(event) {
    this.setState({ origin: event.target.value })
  }
  changeDestinationHandler(event) {
    this.setState({ destination: event.target.value })
  }
 
  cancel() {
    this.props.history.push("/ListRoute");
  }

  render() {
    return (
      <div>
       <div className="card col-md-6 pt-9 offset-md-3 offset-md-3  bg-light shadow-lg rounded">
            <h3 className="text-center text mt-2">Route</h3>
            <div className="card-body">
            <Form>
              <div className="form-group">
                <label>Route No</label>
                <input placeholder="Route  No" name="routeno" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.routeno} onChange={this.changeRouteNoHandler} />
              </div>

              <div className="form-group">
                <label>Bus_No</label>
                <input placeholder="Bus_No" name="busno" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.busno} onChange={this.changeBusNoHandler} />
              </div>

              <div className="form-group">
                <label>Origin</label>
                <input placeholder="Origin" name="origin" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.origin} onChange={this.changeOriginHandler} />
              </div>
              <div className="form-group">
                <label>Destination</label>
                <input placeholder="Destination" name="destination" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.destination} onChange={this.changeDestinationHandler} />
              </div>
           
              <button className="btn btn-success me-3 mb-2" onClick={this.updateRoute}>Save</button>
              <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>cancel</button>
            </Form>
          </div>

        </div>

      </div>

    );
  }
}
