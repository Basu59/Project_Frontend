import React, { Component } from 'react'
import Service from '../Service';
export default class UpdateStop extends Component {
  constructor(props) {
    super(props);


    this.state = {
      id: this.props.match.params.id,
      routeno: '',
    busstops:'',
     
    }
    this.changeRouteNoHandler = this.changeRouteNoHandler.bind(this);
        this.changeBusstopHandler = this.changeBusstopHandler.bind(this);
       
    
    this.updateStop = this.updateStop.bind(this);
  }

  componentDidMount() {
    Service.getStopById(this.state.id).then((res) => {
      let stops = res.data;
      this.setState({
        routeno: stops.routeno,
        busstops: stops.busstops,
        
      });
    });
  }
  updateStop = (e) => {
    e.preventDefault();

    let stops = { routeno: this.state.routeno, busstops: this.state.busstops }
    console.log('route =>' + JSON.stringify(stops));
    console.log('id =>' + JSON.stringify(this.state.id));
    Service.updateStop(stops, this.state.id).then(res => {
      this.props.history.push('/ListStop');
    });
  }
  changeRouteNoHandler(event) {
    this.setState({ routeno: event.target.value })
  }

  changeBusstopHandler(event) {
    this.setState({ busstops: event.target.value })
  }
 
  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (


      <div className="container">
        <div className="row ">
          <div className="card col-md-4 offset-md-4 offset-md-4">
            <h2>Update Details</h2>

            <form>
            
              <div className="form-group">
                <label>Route_No</label>
                <input placeholder="Bus_No" name="busno" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.routeno} onChange={this.changeRouteNoHandler} />
              </div>

              <div className="form-group">
                <label>BUS Stops</label>
                <input placeholder="Origin" name="origin" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.busstops} onChange={this.changeBusstopHandler} />
              </div>
             
           
              <button className="btn btn-success me-3 mb-2" onClick={this.updateStop}>Save</button>
              <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>cancel</button>
            </form>
          </div>

        </div>

      </div>

    );
  }
}
