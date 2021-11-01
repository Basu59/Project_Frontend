import React, { Component } from 'react'
import Service from '../Service';

export default class AddStop extends Component {
    constructor(props) {
        super(props);
    
    
        this.state = {
    routeno: '',
    busstops:'',

    
        }
        this.changeRouteNoHandler = this.changeRouteNoHandler.bind(this);
        this.changeBusstopHandler = this.changeBusstopHandler.bind(this);
       this.saveStop = this.saveStop.bind(this);
      }
  
      saveStop = (e) =>{
        e.preventDefault();
    
        let stop = {routeno : this.state.routeno,busstops:this.state.busstops }
        console.log('route =>' + JSON.stringify(stop));
    
        Service.createStop(stop).then(res =>{
          this.props.history.push('/ListStop');
        });
    
        
      }
        
      changeRouteNoHandler(event){
        this.setState({routeno: event.target.value})
      }
   
      changeBusstopHandler(event){
        this.setState({busstops: event.target.value})
      }
    
      

      
      cancel(){
        this.props.history.push("/ListRoute");
      }
    
      render() {
        return (
    
    <>
    <div className="container mt-5 w-50">
    
      <div className="container row justify-content-center">
        <div className="card ">
        
        <h2 >Stop</h2>
    <form>
    
<div class="form-floating mb-3">
  <input type="RouteNo" class="form-control" id="floatingInput" placeholder="RouteNo"
   value={this.state.routeno} onChange={ this.changeRouteNoHandler}/>
  <label for="floatingInput">Route No</label>
</div>
    
<div class="form-floating mb-3">
  <input type="RouteNo" class="form-control" id="floatingInput" placeholder="RouteNo"
   value={this.state.busstops} onChange={ this.changeBusstopHandler}/>
  <label for="floatingInput">Bus Stops</label>
</div>
    


    
    <button className="btn btn-success me-3 mb-2" onClick={this.saveStop}>Save</button>
    <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
    </form>
        </div>
    
      </div>
    </div>

    {/* example */}

    
    
    
  
          </>
        );
    }

}
