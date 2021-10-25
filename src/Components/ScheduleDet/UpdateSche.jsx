import React, { Component } from 'react'
import Service from '../Service'; 
export default class UpdateSche extends Component {
  constructor(props) {
    super(props);


    this.state = {
      id: this.props.match.params.id,
      
      busno: '',
      aritime: '',
      deptime: '',
     
    }
    this.changeBusNoHandler = this.changeBusNoHandler.bind(this);
    this.changeArtimeHandler = this.changeArtimeHandler.bind(this);
    this.changeDeptimeHandler = this.changeDeptimeHandler.bind(this);
    this.updateSchedule = this.updateSchedule.bind(this);
  }

  componentDidMount() {
    Service.getScheduleById(this.state.id).then((res) => {
      let schedule = res.data;
      this.setState({
        busno: schedule.busno,
        aritime: schedule.aritime,
        deptime: schedule.deptime
      });
    });
  }
  updateSchedule = (e) => {
    e.preventDefault();

    let schedule = {busno: this.state.busno, aritime: this.state.aritime, deptime: this.state.deptime }
    console.log('schedule =>' + JSON.stringify(schedule));
    console.log('id =>' + JSON.stringify(this.state.id));
    Service.updateSchedule(schedule, this.state.id).then(res => {
      this.props.history.push('/ListSchedule');
    });
  }

  changeBusNoHandler(event) {
    this.setState({ busno: event.target.value })
  }

  changeArtimeHandler(event) {
    this.setState({ aritime: event.target.value })
  }
  changeDeptimeHandler(event) {
    this.setState({ deptime: event.target.value })
  }
 
  cancel() {
    this.props.history.push("/ListSchedule");
  }

  render() {
    return (


      <div className="container bg-light">
        <div className="row ">
          <div className="card col-md-4 offset-md-4 offset-md-4">
            <h2>Update Details</h2>

            <form>
              <div className="form-group">
                <label>Bus_No</label>
                <input placeholder="Bus_No" name="busno" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.busno} onChange={this.changeBusNoHandler} />
              </div>

              <div className="form-group">
                <label>aritime</label>
                <input placeholder="aritime" name="aritime" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.aritime} onChange={this.changeArtimeHandler} />
              </div>
              <div className="form-group">
                <label>deptime</label>
                <input placeholder="deptime" name="deptime" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 bg-body rounded"
                  value={this.state.deptime} onChange={this.changeDeptimeHandler} />
              </div>
           
              <button className="btn btn-success me-3 mb-2" onClick={this.updateSchedule}>Save</button>
              <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>cancel</button>
            </form>
          </div>

        </div>

      </div>

    );
  }
}
