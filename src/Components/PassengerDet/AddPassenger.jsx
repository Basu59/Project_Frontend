import React, { Component } from 'react'
import Service from '../Service';
export default class AddPassenger extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          
    firstname: '',
    lastname: '',
    emailid:'',
    mobileno:''
    
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
        this.savePassenger = this.savePassenger.bind(this);
      }
  
      savePassenger = (e) =>{
        e.preventDefault();
    
        let passenger = {firstname: this.state.firstname, lastname : this.state.lastname, emailid:this.state.emailid, mobileno:this.state.mobileno }
        console.log('passenger =>' + JSON.stringify(passenger));
    
        Service.createPassenger(passenger).then(res =>{
          this.props.history.push('/ListPassenger');
        });
    
        
      }
      changeFirstNameHandler(event){
        this.setState({firstname: event.target.value})
      }
    
      changeLastNameHandler(event){
        this.setState({lastname: event.target.value})
      }
   
      changeEmailIdHandler(event){
        this.setState({emailid: event.target.value})
      }
    
      changeMobileNoHandler(event){
        this.setState({mobileno: event.target.value})
      }
     

      
      cancel(){
        this.props.history.push("/ListPassenger");
      }
    
      render() {
        return (
    
    <>
    <div className="container">
    
      <div className="row justify-content-center">
        <div className="card ">
        
        <h2 >Passenger</h2>
    <form>



    <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="FirstName"
   value={this.state.firstname} onChange={ this.changeFirstNameHandler}/>
  <label for="floatingInput">First Name</label>
</div>
    
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="LastName"
   value={this.state.lastname} onChange={ this.changeLastNameHandler}/>
  <label for="floatingInput">Last Name</label>
</div>
    
<div class="form-floating mb-3">
  <input type="RouteNo" class="form-control" id="floatingInput" placeholder="EmailId"
   value={this.state.emailid} onChange={ this.changeEmailIdHandler}/>
  <label for="floatingInput">Email Id</label>
</div>
    
<div class="form-floating mb-3">
  <input type="Number" class="form-control" id="floatingInput" placeholder="MobileNo"
   value={this.state.mobileno} onChange={ this.changeMobileNoHandler}/>
  <label for="floatingInput">Mobile No</label>
</div>

    
    

    {/* example */}

    
    <button className="btn btn-success me-3 mb-2" onClick={this.savePassenger}>Save</button>
    <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
    </form>
        </div>
    
      </div>
    </div>
    
    
  
          </>
        );
      }
}