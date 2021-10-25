import React, { Component } from 'react'
import Service from '../Service';

export default class AddSche extends Component {
    constructor(props) {
        super(props);
    
    
        this.state = {
          
    busno: '',
    aritime:'',
    deptime:''
    
        }
        this.changeBusNoHandler = this.changeBusNoHandler.bind(this);
        this.changeAritimeHandler = this.changeAritimeHandler.bind(this);
        this.changeDeptimeHandler = this.changeDeptimeHandler.bind(this);
        this.saveSchedule = this.saveSchedule.bind(this);
      }
  
      saveSchedule = (e) =>{
        e.preventDefault();
    
        let schedule = {busno : this.state.busno,aritime:this.state.aritime,deptime:this.state.deptime }
        console.log('schedule =>' + JSON.stringify(schedule));
    
        Service.createSchedule(schedule).then(res =>{
          this.props.history.push('/ListSchedule');
        });
    
        
      }
     changeBusNoHandler(event){
        this.setState({busno: event.target.value})
      }
      
      changeAritimeHandler(event){
        this.setState({aritime: event.target.value})
      }
    
      changeDeptimeHandler(event){
        this.setState({deptime: event.target.value})
      }
     

      
      cancel(){
        this.props.history.push("/ListSchedule");
      }
    
      render() {
        return (
    
    <>
    <div className="container bg-light">
    
      <div className="row justify-content-center">
        <div className="card ">
        
        <h2 >Schedule</h2>
    <form>
    <div className="form-group">
      <label>Bus No</label>
      <input placeholder="Bus No" name="busno" className="form-control mt-1 mb-2 shadow-lg p-3 mb-2 bg-body rounded"
      value={this.state.busno} onChange={ this.changeBusNoHandler}/>
    </div>
    

    <div className="form-group">
      <label>Arrival time</label>
      <input placeholder="Arrival Time" name="aritime" className="form-control mt-1 mb-2 shadow-lg p-3 mb-2 bg-body rounded"
      value={this.state.aritime} onChange={ this.changeAritimeHandler }/>
    </div> 
    <div className="form-group">
      <label>Departure time</label>
      <input placeholder="Departure time" name="deptime" className="form-control mt-1 mb-2 shadow-lg p-3 mb-2 bg-body rounded"
      value={this.state.deptime} onChange={ this.changeDeptimeHandler }/>
    </div> 
   
    
    <button className="btn btn-success me-3 mb-2" onClick={this.saveSchedule}>Save</button>
    <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
    </form>
        </div>
    
      </div>
    </div>
    
    
  
          </>
        );
      }
}
